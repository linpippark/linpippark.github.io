// Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyDxEdDVzYP7ZX-p4GkHCL41rWifMQXm3-Q",
  authDomain: "macau-travel-map.firebaseapp.com",
  databaseURL: "https://macau-travel-map-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "macau-travel-map",
  storageBucket: "macau-travel-map.firebasestorage.app",
  messagingSenderId: "614251094494",
  appId: "1:614251094494:web:3581029de250f502a7fd4f"
};

// 初始化 Firebase (Compat Syntax)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let map;
let markerLayer;
let isAdmin = true; // 開放所有人直接新增刪除景點

let allMarkers = {};
let currentActiveKey = null;

// 天氣代碼對應表
const weatherCodes = {
    0: { desc: '晴天', icon: 'fa-sun' },
    1: { desc: '晴時多雲', icon: 'fa-cloud-sun' },
    2: { desc: '多雲', icon: 'fa-cloud' },
    3: { desc: '陰天', icon: 'fa-cloud' },
    45: { desc: '霧', icon: 'fa-smog' },
    48: { desc: '霧淞', icon: 'fa-smog' },
    51: { desc: '毛毛雨(輕)', icon: 'fa-cloud-rain' },
    53: { desc: '毛毛雨(中)', icon: 'fa-cloud-rain' },
    55: { desc: '毛毛雨(重)', icon: 'fa-cloud-rain' },
    61: { desc: '小雨', icon: 'fa-cloud-showers-heavy' },
    63: { desc: '中雨', icon: 'fa-cloud-showers-heavy' },
    65: { desc: '大雨', icon: 'fa-cloud-showers-heavy' },
    71: { desc: '小雪', icon: 'fa-snowflake' },
    73: { desc: '中雪', icon: 'fa-snowflake' },
    75: { desc: '大雪', icon: 'fa-snowflake' },
    95: { desc: '雷雨', icon: 'fa-bolt' },
    96: { desc: '雷陣雨', icon: 'fa-bolt' },
    99: { desc: '大雷陣雨', icon: 'fa-bolt' }
};

document.addEventListener('DOMContentLoaded', () => {
    initDate();
    initWeather();
    initMap();
    initUI();
    initSearch();
    
    adjustMapHeight();
    window.addEventListener('resize', adjustMapHeight);
});

function adjustMapHeight() {
    const header = document.getElementById('header');
    const mapDiv = document.getElementById('map');
    if(header && mapDiv) {
        mapDiv.style.height = `calc(100dvh - ${header.offsetHeight}px)`;
    }
}

function initDate() {
    const dateEl = document.getElementById('current-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const today = new Date();
    dateEl.textContent = today.toLocaleDateString('zh-TW', options);
}

async function initWeather() {
    const lat = 22.1987;
    const lng = 113.5439;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FMacau`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const current = data.current_weather;
        const codeInfo = weatherCodes[current.weathercode] || { desc: '未知', icon: 'fa-cloud' };
        
        document.getElementById('current-temp').textContent = `${Math.round(current.temperature)}°C`;
        document.getElementById('current-desc').textContent = codeInfo.desc;
        
        const iconEl = document.getElementById('current-weather-icon');
        iconEl.className = `fa-solid ${codeInfo.icon} text-3xl text-primary`;

        const daily = data.daily;
        const container = document.getElementById('forecast-container');
        container.innerHTML = '';

        for (let i = 0; i < daily.time.length; i++) {
            const dateStr = daily.time[i];
            const dateObj = new Date(dateStr);
            const dayName = i === 0 ? '今天' : dateObj.toLocaleDateString('zh-TW', { weekday: 'short' });
            const dayCodeInfo = weatherCodes[daily.weathercode[i]] || { desc: '未知', icon: 'fa-cloud' };
            const maxTemp = Math.round(daily.temperature_2m_max[i]);
            const minTemp = Math.round(daily.temperature_2m_min[i]);

            const itemHTML = `
                <div class="flex flex-col items-center min-w-[45px]">
                    <span class="text-[10px] text-secondary mb-0.5">${dayName}</span>
                    <i class="fa-solid ${dayCodeInfo.icon} text-base text-primary mb-0.5"></i>
                    <span class="text-[11px] font-bold">${maxTemp}°</span>
                    <span class="text-[9px] text-white/50">${minTemp}°</span>
                </div>
            `;
            container.innerHTML += itemHTML;
        }
    } catch (error) {
        console.error("無法取得天氣資訊:", error);
        document.getElementById('current-desc').textContent = '天氣載入失敗';
    }
}

function initMap() {
    const macauCenter = [22.1987, 113.5439];
    
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView(macauCenter, 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
    }).addTo(map);

    // 畫上十月初五街 (Rua de Cinco de Outubro) 顯眼線條
    const cincoDeOutubroLines = [
        [[22.1959428,113.5370372], [22.1957391,113.5368286], [22.1952043,113.5362295]],
        [[22.1978331,113.5378156], [22.1981352,113.5377157], [22.1983387,113.5376483], [22.1985494,113.5375785], [22.1987981,113.5374972]],
        [[22.1963384,113.5374501], [22.1966157,113.5376597], [22.1967714,113.5377774], [22.1970091,113.5378629]],
        [[22.1992528,113.5374501], [22.1993923,113.5374408], [22.1996549,113.5374233], [22.2000323,113.537398]]
    ];
    
    const streetLine = L.polyline(cincoDeOutubroLines, {
        color: '#FFE600', // 明亮的黃色
        weight: 8,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: '1, 10'
    }).addTo(map);

    streetLine.bindPopup('<b>十月初五街</b><br>Rua de Cinco de Outubro');

    // 畫上官也街 (Rua do Cunha) 顯眼線條
    const cunhaLines = [
        [22.1540583, 113.5566893],
        [22.1539201, 113.5567726],
        [22.1537269, 113.5568890],
        [22.1535333, 113.5570055],
        [22.1533407, 113.5571215],
        [22.1532006, 113.5572059],
        [22.1531126, 113.5572589]
    ];
    
    const cunhaLine = L.polyline(cunhaLines, {
        color: '#FFE600', // 明亮的黃色
        weight: 8,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: '1, 10'
    }).addTo(map);

    cunhaLine.bindPopup('<b>官也街</b><br>Rua do Cunha');

    markerLayer = L.layerGroup().addTo(map);

    // 載入即時資料庫的座標 (Compat Syntax)
    const placesRef = db.ref('places');
    let isInitialLoad = true;

    placesRef.on('value', (snapshot) => {
        markerLayer.clearLayers();
        const data = snapshot.val();
        
        const placesListEl = document.getElementById('places-list');
        if (placesListEl) placesListEl.innerHTML = '';

        if (!data) {
            if (placesListEl) placesListEl.innerHTML = '<li class="text-slate-500 text-xs empty-message">目前沒有景點</li>';
            return;
        }

        const bounds = [];
        
        Object.keys(data).forEach(key => {
            const place = data[key];
            const lowerName = place.name.toLowerCase();
            
            const customIcon = getIconForPlace(place, key, false);

            const marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(markerLayer);
            allMarkers[key] = { marker, place };
            bounds.push([place.lat, place.lng]);
            
            // 綁定 Popup 作為明顯提示
            marker.bindPopup(`<div class="text-center font-bold text-slate-800">${place.name}</div>`, {
                closeButton: false,
                autoClose: true
            });
            
            marker.on('click', () => {
                highlightPlace(key);
                showBottomSheet(place, key);
                map.setView([place.lat - 0.005, place.lng], 16, { animate: true });
            });

            // 加入左側列表
            if (placesListEl) {
                const li = document.createElement('li');
                li.className = 'cursor-pointer text-slate-700 font-bold hover:text-dark transition-colors flex items-center group py-1';
                
                // 為了列表圖示的顏色判斷
                const isHotel = place.name.includes('藝舍酒店');
                const foodMappings = [
                    { keywords: ['咖啡', '茶', '冰室', 'cafe', '飲', '奶', '豆花'], icon: 'fa-mug-hot' },
                    { keywords: ['餅', '撻', '甜', '糕', '雪糕', '安德魯', '瑪嘉烈'], icon: 'fa-ice-cream' },
                    { keywords: ['麵', '粉', '粥', '湯', '雲吞'], icon: 'fa-bowl-food' },
                    { keywords: ['牛雜', '肉', '豬', '雞', '鴨', '堡', '排'], icon: 'fa-drumstick-bite' },
                    { keywords: ['餐廳', '飯店', '餐室', '美食', '記', '食', '味', '小吃', '葡國', '廚', '大排檔', '酒樓', '館', '鍋'], icon: 'fa-utensils' }
                ];
                let foodIcon = null;
                for (let mapping of foodMappings) {
                    if (mapping.keywords.some(kw => lowerName.includes(kw))) {
                        foodIcon = mapping.icon; break;
                    }
                }

                let listIconHTML = '<i class="fa-solid fa-star text-[10px] mr-2 text-slate-400 w-4 text-center group-hover:text-dark transition-colors"></i>';
                if (isHotel) {
                    listIconHTML = '<i class="fa-solid fa-bed text-[10px] mr-2 text-[#E63946] w-4 text-center group-hover:text-dark transition-colors"></i>';
                } else if (foodIcon) {
                    listIconHTML = `<i class="fa-solid ${foodIcon} text-[10px] mr-2 text-slate-400 w-4 text-center group-hover:text-dark transition-colors"></i>`;
                }
                
                li.innerHTML = `${listIconHTML} <span class="truncate text-xs leading-tight border-b border-transparent group-hover:border-dark pb-0.5">${place.name}</span>`;
                li.onclick = () => {
                    highlightPlace(key);
                    showBottomSheet(place, key);
                    map.setView([place.lat - 0.005, place.lng], 16, { animate: true });
                };
                placesListEl.appendChild(li);
            }
        });

        if (isInitialLoad && bounds.length > 0) {
            map.fitBounds(bounds, { padding: [20, 20] });
            isInitialLoad = false;
        }

        // 當 Firebase 資料更新後，重新套用現有的搜尋過濾
        const filterInput = document.getElementById('filter-input');
        if (filterInput && filterInput.value) {
            filterInput.dispatchEvent(new Event('input'));
        }
    });

    document.getElementById('btn-center').addEventListener('click', () => {
        map.setView(macauCenter, 14, { animate: true });
        hideBottomSheet();
        map.closePopup();
        highlightPlace(null);
    });

    map.on('click', () => {
        hideBottomSheet();
        map.closePopup();
        highlightPlace(null);
    });

    map.on('contextmenu', (e) => {
        
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        Swal.fire({
            title: '新增景點',
            text: '請輸入此座標的景點名稱',
            input: 'text',
            inputPlaceholder: '例如：大三巴牌坊',
            showCancelButton: true,
            confirmButtonText: '新增',
            cancelButtonText: '取消',
            confirmButtonColor: '#5478FF',
            inputValidator: (value) => {
                if (!value) {
                    return '請輸入名稱！'
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // 將資料寫入 Firebase (Compat Syntax)
                db.ref('places').push({
                    name: result.value,
                    lat: lat,
                    lng: lng,
                    createdAt: Date.now()
                }).then(() => {
                    Swal.fire('成功！', '景點已經即時同步給所有使用者', 'success');
                });
            }
        });
    });
}

function initUI() {
    document.getElementById('btn-close').addEventListener('click', hideBottomSheet);

    // 側邊欄收合邏輯
    const sidebar = document.getElementById('places-sidebar');
    const btnOpenSidebar = document.getElementById('btn-open-sidebar');
    const btnCloseSidebar = document.getElementById('btn-close-sidebar');

    if (sidebar && btnOpenSidebar && btnCloseSidebar) {
        btnCloseSidebar.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-[150%]');
            setTimeout(() => {
                btnOpenSidebar.classList.remove('hidden');
            }, 300); // 等待動畫完成
        });

        btnOpenSidebar.addEventListener('click', () => {
            btnOpenSidebar.classList.add('hidden');
            sidebar.classList.remove('-translate-x-[150%]');
        });
    }

    // 列表過濾功能
    const filterInput = document.getElementById('filter-input');
    if (filterInput) {
        filterInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const listItems = document.querySelectorAll('#places-list li');
            listItems.forEach(li => {
                if (li.classList.contains('empty-message')) return;
                const text = li.textContent.toLowerCase();
                if (text.includes(term)) {
                    li.style.display = 'flex';
                } else {
                    li.style.display = 'none';
                }
            });
        });
    }
}

function initSearch() {
    const searchBtn = document.getElementById('btn-search');
    if (!searchBtn) return;

    searchBtn.addEventListener('click', async () => {
        const { value: query } = await Swal.fire({
            title: '搜尋景點或地址',
            input: 'text',
            inputPlaceholder: '請輸入要搜尋的名稱...',
            showCancelButton: true,
            confirmButtonText: '搜尋',
            cancelButtonText: '取消',
            confirmButtonColor: '#5478FF'
        });

        if (!query) return;

        // 呼叫 Nominatim API
        Swal.fire({ title: '搜尋中...', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });
        
        try {
            // 改用更精準且不容易出錯的參數設定，加入 accept-language 與 countrycodes(澳門與周邊)
            const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&limit=5&accept-language=zh-TW&countrycodes=mo,cn`;
            
            const res = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!res.ok) {
                throw new Error(`API 回應錯誤: ${res.status}`);
            }

            const results = await res.json();

            if (results.length === 0) {
                Swal.fire('找不到結果', '請嘗試更換關鍵字（例如包含路名）。', 'info');
                return;
            }

            // 整理選項供選擇
            const inputOptions = {};
            results.forEach((item, index) => {
                inputOptions[index] = item.display_name;
            });

            const { value: selectedIndex } = await Swal.fire({
                title: '請選擇正確的地點',
                input: 'radio',
                inputOptions: inputOptions,
                showCancelButton: true,
                confirmButtonText: '選擇',
                cancelButtonText: '取消',
                confirmButtonColor: '#5478FF',
                inputValidator: (value) => {
                    if (value === undefined) {
                        return '請選擇一個地點！';
                    }
                }
            });

            if (selectedIndex !== undefined) {
                const selectedItem = results[selectedIndex];
                
                // 詢問顯示在地圖上的短名稱
                const { value: finalName } = await Swal.fire({
                    title: '確認景點名稱',
                    input: 'text',
                    inputValue: query, // 預設帶入原搜尋字
                    showCancelButton: true,
                    confirmButtonText: '新增至地圖',
                    cancelButtonText: '取消',
                    confirmButtonColor: '#5478FF'
                });

                if (finalName) {
                    db.ref('places').push({
                        name: finalName,
                        lat: parseFloat(selectedItem.lat),
                        lng: parseFloat(selectedItem.lon),
                        createdAt: Date.now()
                    }).then(() => {
                        Swal.fire('成功！', '景點已經即時同步給所有使用者', 'success');
                        map.setView([parseFloat(selectedItem.lat), parseFloat(selectedItem.lon)], 16, { animate: true });
                    });
                }
            }
        } catch (err) {
            console.error(err);
            Swal.fire('錯誤', '搜尋時發生錯誤，請稍後再試。', 'error');
        }
    });
}

function showBottomSheet(place, key) {
    const sheet = document.getElementById('bottom-sheet');
    document.getElementById('place-title').textContent = place.name;
    document.getElementById('place-coords').textContent = `${place.lat.toFixed(5)}, ${place.lng.toFixed(5)}`;
    
    const navBtn = document.getElementById('btn-nav');
    navBtn.onclick = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
        window.open(url, '_blank');
    };

    const delBtn = document.getElementById('btn-delete');
    if (delBtn) {
        if (isAdmin) {
            delBtn.classList.remove('hidden');
            delBtn.onclick = () => {
                Swal.fire({
                    title: '確定要刪除嗎？',
                    text: `您即將刪除「${place.name}」，此動作無法復原。`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: '是的，刪除！',
                    cancelButtonText: '取消'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // 1. 立即關閉資訊視窗，不要等待網路回應，避免視窗卡住
                        hideBottomSheet();
                        
                        // 2. 執行資料庫刪除
                        db.ref('places/' + key).remove().then(() => {
                            Swal.fire('已刪除', '景點已成功移除並同步。', 'success');
                        }).catch((err) => {
                            console.error(err);
                            Swal.fire('錯誤', '刪除失敗，請檢查網路連線。', 'error');
                        });
                    }
                });
            };
        } else {
            delBtn.classList.add('hidden');
        }
    }
    
    sheet.classList.add('show');
}

function hideBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    sheet.classList.remove('show');
}

function getIconForPlace(place, key, isActive) {
    const lowerName = place.name.toLowerCase();
    const foodMappings = [
        { keywords: ['咖啡', '茶', '冰室', 'cafe', '飲', '奶', '豆花'], icon: 'fa-mug-hot' },
        { keywords: ['餅', '撻', '甜', '糕', '雪糕', '安德魯', '瑪嘉烈'], icon: 'fa-ice-cream' },
        { keywords: ['麵', '粉', '粥', '湯', '雲吞'], icon: 'fa-bowl-food' },
        { keywords: ['牛雜', '肉', '豬', '雞', '鴨', '堡', '排'], icon: 'fa-drumstick-bite' },
        { keywords: ['餐廳', '飯店', '餐室', '美食', '記', '食', '味', '小吃', '葡國', '廚', '大排檔', '酒樓', '館', '鍋'], icon: 'fa-utensils' }
    ];

    let foodIcon = null;
    for (let mapping of foodMappings) {
        if (mapping.keywords.some(kw => lowerName.includes(kw))) {
            foodIcon = mapping.icon;
            break;
        }
    }
    
    const isCustom = !key.startsWith('place_');
    const isHotel = place.name.includes('藝舍酒店');
    
    let iconClass = 'custom-marker';
    if (isHotel) iconClass += ' special-hotel';
    else if (isCustom) iconClass += ' new-place';
    
    // 選中時加入紅色高亮類別 (排除飯店，因為飯店本身就是紅色)
    if (isActive && !isHotel) {
        iconClass += ' active-marker';
    }
    
    let faIcon = '<i class="fa-solid fa-star"></i>';
    if (isHotel) {
        faIcon = `
            <div class="hotel-wrapper">
                <div class="hotel-pin"><i class="fa-solid fa-bed"></i></div>
                <div class="hotel-shadow"></div>
            </div>
        `;
    } else if (foodIcon) {
        faIcon = `<i class="fa-solid ${foodIcon}"></i>`;
    }
    
    return L.divIcon({
        className: iconClass,
        html: faIcon,
        iconSize: isHotel ? [40, 50] : [32, 32],
        iconAnchor: isHotel ? [20, 50] : [16, 16],
        popupAnchor: isHotel ? [0, -45] : [0, -16]
    });
}

function highlightPlace(targetKey) {
    if (currentActiveKey && allMarkers[currentActiveKey]) {
        const prev = allMarkers[currentActiveKey];
        prev.marker.setIcon(getIconForPlace(prev.place, currentActiveKey, false));
    }
    
    currentActiveKey = targetKey;
    
    if (targetKey && allMarkers[targetKey]) {
        const curr = allMarkers[targetKey];
        curr.marker.setIcon(getIconForPlace(curr.place, targetKey, true));
        curr.marker.openPopup();
    }
}

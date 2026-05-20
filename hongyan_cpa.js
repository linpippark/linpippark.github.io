/**
 * Hongyan CPA (紅焰會計事務所) Premium Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. 導覽列與滾動進度條 (Navbar & Scroll Progress)
    // ==========================================
    const header = document.querySelector('.main-header');
    const scrollProgress = document.getElementById('scroll-progress');
    const btnToTop = document.getElementById('btn-totop');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // 1.1 滾動進度條
        if (docHeight > 0) {
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = `${scrollPercent}%`;
        }

        // 1.2 導覽列收縮與變色
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // 1.3 返回頂部按鈕顯示
        if (scrollTop > 500) {
            btnToTop.classList.add('active');
        } else {
            btnToTop.classList.remove('active');
        }
    });

    // 返回頂部平滑滾動
    btnToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 2. 行動端選單切換 (Mobile Navbar Toggle)
    // ==========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // 點擊導覽連結自動關閉菜單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // ==========================================
    // 3. 數字跑分動畫 (Hero Stats Counter Animation)
    // ==========================================
    const stats = document.querySelectorAll('.stat-number');
    
    function animateCounters() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            let startTimestamp = null;

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * target);
                stat.textContent = currentValue;
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    stat.textContent = target; // Ensure exact final value
                }
            };
            
            window.requestAnimationFrame(step);
        });
    }

    // 啟動跑分動畫 (直接加載或在視口內啟動)
    animateCounters();

    // ==========================================
    // 4. 智慧記帳資費估算器 (Fee Estimator)
    // ==========================================
    const revenueRange = document.getElementById('revenue-range');
    const invoiceRange = document.getElementById('invoice-range');
    
    const revenueVal = document.getElementById('revenue-val');
    const invoiceVal = document.getElementById('invoice-val');
    
    const recBadge = document.getElementById('recommended-plan-badge');
    const priceDisplay = document.getElementById('estimated-price');
    const periodDisplay = document.querySelector('.price-box .period');
    const currencyDisplay = document.querySelector('.price-box .currency');
    const featuresList = document.getElementById('plan-features-list');
    const ctaBtn = document.getElementById('plan-cta-btn');

    // 參數級距對照
    const revenueLabels = [
        "NT$ 10 萬元以下",
        "NT$ 10 萬 至 50 萬元",
        "NT$ 50 萬 至 150 萬元",
        "NT$ 150 萬 至 300 萬元",
        "NT$ 300 萬元以上"
    ];

    const invoiceLabels = [
        "30 張以內",
        "30 至 70 張",
        "70 至 150 張",
        "150 張以上"
    ];

    // 計費與推薦邏輯
    function calculateFee() {
        const revIdx = parseInt(revenueRange.value, 10);
        const invIdx = parseInt(invoiceRange.value, 10);
        
        // 更新顯示文字
        revenueVal.textContent = revenueLabels[revIdx];
        invoiceVal.textContent = invoiceLabels[invIdx];

        let planName = "";
        let priceText = "";
        let isProjectBased = false;
        let features = [];

        // 決策樹計費
        if (revIdx === 4) {
            // 300萬以上的大企業，一律採專案報價
            planName = "大企業與集團客製服務";
            priceText = "專案報價";
            isProjectBased = true;
            features = [
                "全方位客製化會計外包與財務長諮詢服務",
                "集團合併財務報表編製與移轉訂價查核",
                "跨國租稅架構設計與租稅優惠最大化申請",
                "會計師專屬團隊全程對接與稅務稽查專案支援",
                "綠色諮詢特快通道，享有最優先支援服務"
            ];
        } else if (revIdx === 3 || invIdx === 3) {
            // 150萬-300萬 或 憑證150張以上
            planName = "企業尊榮方案";
            priceText = "8,000";
            features = [
                "每雙月營業稅申報 (401表)",
                "年終營所稅結算申報與暫繳申報",
                "全套會計記帳處理、資產負債與損益表編製",
                "營所稅簽證申報優先評估與輔導",
                "會計師每季度專案諮詢會議（1小時/季）",
                "兩岸三地或股權架構設計等中高階稅務諮詢"
            ];
        } else if (revIdx === 2 || invIdx === 2) {
            // 50萬-150萬 或 憑證70-150張
            planName = "卓越飛躍方案";
            priceText = "5,000";
            features = [
                "每雙月營業稅申報 (401表)",
                "年終營所稅結算申報與暫繳申報",
                "傳票整理、總分類帳及財務分析報表",
                "每月定期雲端電子報表傳輸與分析指導",
                "公司合法節稅方案設計與規劃",
                "會計師一對一電話或線上財稅諮詢（不限次數）"
            ];
        } else if (revIdx === 1 || invIdx === 1) {
            // 10萬-50萬 或 憑證30-70張
            planName = "企業成長方案";
            priceText = "3,000";
            features = [
                "每雙月營業稅申報 (401表)",
                "年終營所稅結算申報與暫繳申報",
                "傳票整理、登帳及半年財務報表編製",
                "薪資及各類所得扣繳免扣繳申報",
                "日常一般性財稅與發票開立電話諮詢",
                "年終營運損益分析與稅務健康診斷"
            ];
        } else {
            // 10萬以下且憑證30張以內
            planName = "推薦新創精簡方案";
            priceText = "2,000";
            features = [
                "每雙月營業稅申報 (401表)",
                "年終營所稅結算申報",
                "薪資及各類所得年度扣繳申報",
                "基本傳票整理、登帳及年度報表編製",
                "初階財稅、二代健保法規電話諮詢"
            ];
        }

        // 更新 UI
        recBadge.textContent = planName;
        
        // 數字更新動畫 (非專案報價時)
        if (isProjectBased) {
            priceDisplay.textContent = priceText;
            priceDisplay.style.fontSize = "2.2rem";
            currencyDisplay.style.display = "none";
            periodDisplay.style.display = "none";
        } else {
            priceDisplay.style.fontSize = "2.8rem";
            currencyDisplay.style.display = "inline";
            periodDisplay.style.display = "inline";
            
            // 跑數動畫
            animatePrice(parseInt(priceText.replace(/,/g, ''), 10));
        }

        // 渲染項目
        featuresList.innerHTML = features.map(item => `
            <li><i class="fa-solid fa-circle-check"></i> ${item}</li>
        `).join('');

        // 更新行動按鈕
        ctaBtn.href = `#contact?plan=${encodeURIComponent(planName)}`;
    }

    // 價格跑數動畫
    let currentPriceAnim = 0;
    function animatePrice(targetPrice) {
        const start = currentPriceAnim;
        const diff = targetPrice - start;
        if (diff === 0) {
            priceDisplay.textContent = targetPrice.toLocaleString();
            return;
        }
        
        const duration = 300;
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const val = Math.floor(start + (diff * progress));
            priceDisplay.textContent = val.toLocaleString();
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                priceDisplay.textContent = targetPrice.toLocaleString();
                currentPriceAnim = targetPrice;
            }
        };
        window.requestAnimationFrame(step);
    }

    // 綁定估算器事件
    revenueRange.addEventListener('input', calculateFee);
    invoiceRange.addEventListener('input', calculateFee);
    
    // 初始化計算
    calculateFee();

    // ==========================================
    // 5. 點擊互動式稅務行事曆 (Tax Calendar)
    // ==========================================
    const calendarTabs = document.querySelectorAll('.calendar-tab');
    const calendarContentBox = document.querySelector('.calendar-content-box');

    // 稅務資料結構
    const taxData = {
        "1": {
            monthNum: "01",
            title: "一月申報重點：年度起步與各類扣繳",
            subtitle: "一月份是企業年度結算與年度法定憑證申報最重要的月份，需集中整理員工與相關給付資料。",
            items: [
                {
                    time: "1/15 前",
                    title: "申報前一年度 11-12 月份營業稅",
                    desc: "進行前年 11-12 月進銷項發票與憑證申報（401/403表）。"
                },
                {
                    time: "2/5 前 (常因春節調整)",
                    title: "各類所得扣繳及免扣繳憑單、股利憑單申報",
                    desc: "申報上一年度給付予個人之薪資、執行業務、租金、利息、非居民所得及股利，並向納稅人發送憑單。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "請新創企業主務必於一月初備妥員工身分證影本、各類薪資明細、勞退二代健保明細及房東扣繳資料，此月份也是會計師最忙碌的時期，提前備妥能確保申報萬無一失！"
                }
            ]
        },
        "3": {
            monthNum: "03",
            title: "三月申報重點：首季回顧與營業稅申報",
            subtitle: "三月份是春季首度營業稅申報，並需完成年度所得稅結算申報的底稿準備。",
            items: [
                {
                    time: "3/15 前",
                    title: "申報 1-2 月份營業稅",
                    desc: "進行當年 1-2 月份營業稅申報。業主在此月份可檢視首季營運是否符合預期。"
                },
                {
                    time: "3/31 前",
                    title: "補充保費申報",
                    desc: "二代健保年度補充保費明細核對與核實申報。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "第一季的損益狀況在此月份初露端倪。我們會協助您檢核 1-2 月進銷項憑證的合規程度，並為 5 月份的營所稅申報做最後一輪財務報表核算與優化準備。"
                }
            ]
        },
        "5": {
            monthNum: "05",
            title: "五月申報重點：年度大考！營所稅與個人綜所稅",
            subtitle: "五月份是台灣最重要的報稅季，企業與個人所得稅將在此月份集中申報，對企業現金流是關鍵考驗。",
            items: [
                {
                    time: "5/15 前",
                    title: "申報 3-4 月份營業稅",
                    desc: "進行當年 3-4 月份營業稅申報。"
                },
                {
                    time: "5/1 ~ 5/31",
                    title: "營利事業所得稅 (營所稅) 結算申報",
                    desc: "辦理上一年度之營利事業所得稅結算申報、未分配盈餘申報。新創公司若有虧損也須辦理申報以利後續盈虧互抵。"
                },
                {
                    time: "5/1 ~ 5/31",
                    title: "個人綜合所得稅申報",
                    desc: "業主個人綜所稅申報。獨資合夥組織之合夥人也在此時申報個人營利所得。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "營所稅稅額龐大，若公司年營業額較高，建議委託紅焰進行「會計師稅務簽證」，不僅能提高合法費用認列限額，更能將虧損扣抵年限延長至 10 年，並降低被國稅局抽查審計的機率！"
                }
            ]
        },
        "7": {
            monthNum: "07",
            title: "七月申報重點：年中結算與年中營業稅",
            subtitle: "七月份進入下半年度，新創公司可在此時檢視前半年度的整體財務狀況，並完成年中申報。",
            items: [
                {
                    time: "7/15 前",
                    title: "申報 5-6 月份營業稅",
                    desc: "辦理 5-6 月份營業稅申報。這也是上半年整體進銷分析的關鍵節點。"
                },
                {
                    time: "7/31 前",
                    title: "境外公司年檢及維護",
                    desc: "若企業有設立境外公司（如薩摩亞、開曼等進行架構控股），通常需在此時辦理年檢或繳納年費。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "年中是進行下半年合法避稅規劃（如採購設備、研發支出投資抵減）的黃金時期。我們會在此時為記帳客戶提供中期財務診斷，主動提醒節稅空間。"
                }
            ]
        },
        "9": {
            monthNum: "09",
            title: "九月申報重點：營所稅暫繳申報",
            subtitle: "九月份企業需預繳下半年的所得稅，以平衡國庫稅收，對企業中期的資金鏈管理非常關鍵。",
            items: [
                {
                    time: "9/15 前",
                    title: "申報 7-8 月份營業稅",
                    desc: "辦理 7-8 月份營業稅申報。"
                },
                {
                    time: "9/1 ~ 9/30",
                    title: "營利事業所得稅暫繳申報",
                    desc: "企業應按上一年度營所稅應納稅額之半數自行繳納，並辦理暫繳申報。若符合特定條件（如無投抵、由會計師簽證等）可免辦申報或改採試算。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "若公司上半年業績比去年同期大幅衰退，可選擇由會計師進行「上半年財務報表查核簽證」，以實際營業額試算暫繳稅額，避免平白積壓大筆資金在國稅局！"
                }
            ]
        },
        "11": {
            monthNum: "11",
            title: "十一月申報重點：年底收網與結案稅務規劃",
            subtitle: "十一月是年度的最後一次營業稅申報，也是企業主進行年度結帳與合法避稅佈局的最後機會。",
            items: [
                {
                    time: "11/15 前",
                    title: "申報 9-10 月份營業稅",
                    desc: "辦理 9-10 月份營業稅申報。"
                },
                {
                    time: "11/30 前",
                    title: "年度稅務規劃與帳務檢核",
                    desc: "核對截至 10 月份之損益狀況，預估全年盈餘。盤點尚未取得的發票與憑證，加緊進行年底合法憑證整理。"
                },
                {
                    time: "紅焰提示",
                    isTip: true,
                    desc: "不要等到了 12 月 31 日才想著怎麼省稅！十一月是調整損益與取得發票的最佳時機，紅焰會在此時主動聯繫記帳客戶，審閱傳票，評估應補足憑證，提供量身定制的避稅規劃建議。"
                }
            ]
        }
    };

    // 切換行事曆頁籤
    calendarTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除舊的 Active 狀態
            calendarTabs.forEach(t => t.classList.remove('active'));
            
            // 設定新的 Active 狀態
            tab.classList.add('active');
            
            const month = tab.getAttribute('data-month');
            const data = taxData[month];
            
            if (data) {
                // 優雅的淡入淡出動畫
                calendarContentBox.style.opacity = '0';
                calendarContentBox.style.transform = 'translateY(10px)';
                calendarContentBox.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    renderCalendarPane(data);
                    calendarContentBox.style.opacity = '1';
                    calendarContentBox.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });

    // 渲染行事曆內容
    function renderCalendarPane(data) {
        let timelineHTML = "";
        
        data.items.forEach(item => {
            if (item.isTip) {
                timelineHTML += `
                    <div class="timeline-item highlight">
                        <div class="time-marker">${item.time}</div>
                        <div class="time-content">
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `;
            } else {
                timelineHTML += `
                    <div class="timeline-item">
                        <div class="time-marker">${item.time}</div>
                        <div class="time-content">
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `;
            }
        });

        calendarContentBox.innerHTML = `
            <div class="calendar-pane active">
                <div class="pane-header">
                    <span class="pane-month">${data.monthNum}</span>
                    <div>
                        <h3 class="pane-title">${data.title}</h3>
                        <p class="pane-subtitle">${data.subtitle}</p>
                    </div>
                </div>
                <div class="timeline-items">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }

    // ==========================================
    // 6. 客戶見證輪播 (Testimonials Carousel)
    // ==========================================
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselDots = document.querySelectorAll('.dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    let autoplayInterval;

    function moveCarousel(index) {
        if (index < 0) index = testimonialCards.length - 1;
        if (index >= testimonialCards.length) index = 0;
        
        currentIndex = index;
        const amountToMove = -100 * currentIndex;
        carouselTrack.style.transform = `translateX(${amountToMove}%)`;
        
        // 更新 Dots
        carouselDots.forEach(dot => dot.classList.remove('active'));
        carouselDots[currentIndex].classList.add('active');
    }

    // 點擊點切換
    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            moveCarousel(index);
            resetAutoplay();
        });
    });

    // 自動播放邏輯
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            moveCarousel(currentIndex + 1);
        }, 6000); // 6 seconds
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    // 啟動輪播
    startAutoplay();

    // ==========================================
    // 7. 線上諮詢表單提交與回饋 (Consultation Form)
    // ==========================================
    const consultationForm = document.getElementById('consultation-form');
    const successOverlay = document.getElementById('form-success');
    const closeSuccessBtn = document.getElementById('close-success-btn');
    const serviceSelect = document.getElementById('form-service');

    // 處理 URL query 帶入推薦方案
    function checkUrlForPlan() {
        const params = new URLSearchParams(window.location.search);
        const plan = params.get('plan');
        if (plan) {
            // 自動選取相對應的表單項目
            if (plan.includes('新創') || plan.includes('精簡') || plan.includes('成長')) {
                serviceSelect.value = "記帳服務與報稅";
            } else if (plan.includes('尊榮') || plan.includes('集團') || plan.includes('外包')) {
                serviceSelect.value = "財務或稅務簽證";
            }
            
            // 自動帶入留言提示
            const messageArea = document.getElementById('form-message');
            messageArea.value = `您好，我剛在網站估算了資費方案，對【${plan}】非常感興趣。希望預約會計師進行詳細諮詢。`;
        }
    }

    // 監聽雜湊改變 (當點擊試算器 CTA 按鈕錨點跳轉時)
    window.addEventListener('hashchange', () => {
        // 因單頁錨點，透過 click 直接修改 select，這裡由 CTA Click 事件直接處理更即時
    });

    // 試算器 CTA 點擊事件直接帶入表單細節
    ctaBtn.addEventListener('click', (e) => {
        const planName = recBadge.textContent;
        serviceSelect.value = (planName.includes('新創') || planName.includes('成長') || planName.includes('飛躍')) 
            ? "記帳服務與報稅" 
            : "財務或稅務簽證";
        
        const messageArea = document.getElementById('form-message');
        messageArea.value = `您好，我剛在網站估算了資費方案，對【${planName}】非常感興趣。希望預約會計師進行詳細諮詢。`;
    });

    // 檢查 URL 載入
    checkUrlForPlan();

    // 表單提交
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 取得表單欄位
        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const company = document.getElementById('form-company').value;
        const service = serviceSelect.value;
        const message = document.getElementById('form-message').value;

        // 表單防呆基本驗證
        if (!name || !phone || !email || !service || !message) {
            alert('請填寫所有必填欄位 (*)');
            return;
        }

        // 模擬發送 Ajax 請求 (呈現高階 Loading 效果)
        const submitBtn = consultationForm.querySelector('button[type="submit"]');
        const origBtnText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 發送中，請稍候...`;

        setTimeout(() => {
            // 成功發送後恢復按鈕，並顯示成功毛玻璃覆蓋層
            submitBtn.disabled = false;
            submitBtn.innerHTML = origBtnText;
            
            // 顯示成功面板
            successOverlay.classList.add('active');
            
            // 重設表單
            consultationForm.reset();
        }, 1500); // 1.5s delay to make it feel authentic
    });

    // 關閉成功面板
    closeSuccessBtn.addEventListener('click', () => {
        successOverlay.classList.remove('active');
    });

    // ==========================================
    // 8. 滾動進入動畫 (Scroll Reveal IntersectionObserver)
    // ==========================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealCards = document.querySelectorAll('.reveal-card');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // 如果是卡片 grid，順序觸發子卡片的動畫
                const cards = entry.target.querySelectorAll('.reveal-card');
                if (cards.length > 0) {
                    cards.forEach((card, idx) => {
                        setTimeout(() => {
                            card.classList.add('active');
                        }, idx * 150); // 150ms stagger delay
                    });
                }
                
                // 取消監聽已觸發元素
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 若瀏覽器不支持 IntersectionObserver，直接全部顯示
    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('active'));
        revealCards.forEach(card => card.classList.add('active'));
    }
});

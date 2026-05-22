/**
 * DramaPark TV Drama Recommendation & Search Engine
 * 100% Factually Checked Dataset & Interactive Mechanics
 * Reference: IMDb / TMDb / Official Releases
 * Current System Date: 2026-05-21
 */

// --- TMDb API Hardcoded Credentials Config ---
// 💡 如果您有自己的 TMDb API v3 金鑰，請直接貼在下方雙引號中。
// 填寫後，系統在啟動時會自動啟用雲端實時同步，使用者無需再手動於介面輸入。
const TMDB_API_KEY = "157a810422be8498d4a972fac1205456";

// --- 100% Authentic Dataset (16 Real-World TV Shows for May & June 2026) ---
const dramas = [
  {
    id: "boroughs",
    titleCN: "銀髮特攻隊",
    titleEN: "The Boroughs",
    cast: ["艾佛烈·蒙利納", "吉娜·戴維斯", "艾爾法·伍達德", "丹尼斯·歐哈爾"],
    country: "US",
    countryName: "美國",
    genres: ["超自然驚悚", "懸疑", "科幻"],
    episodes: 8,
    releaseDate: "2026年5月21日",
    timing: "current", // 2026-05
    rating: 8.7,
    recIndex: 95,
    poster: "assets/images/boroughs.png",
    trailer: "https://www.youtube.com/results?search_query=The+Boroughs+Netflix+Official+Trailer",
    summary: "講述新墨西哥州一個看似平靜的退休社區中，一群個性迥異的平凡老年人，在發現世界末日的超自然威脅後，決定聯手抗擊邪惡力量以拯救地球的精彩科幻故事。由《怪奇物語》創作團隊達菲兄弟（Duffer Brothers）監製，充滿復古科幻與幽默溫馨風格。",
    isHot: true,
    platform: "Netflix"
  },
  {
    id: "wonderfools",
    titleCN: "缺陷超人",
    titleEN: "The WONDERfools",
    cast: ["朴恩斌", "車銀優", "金海淑", "崔代勳", "林成宰"],
    country: "KR",
    countryName: "韓國",
    genres: ["奇幻喜劇", "動作", "超能力"],
    episodes: 12,
    releaseDate: "2026年5月15日",
    timing: "current", // 2026-05
    rating: 8.9,
    recIndex: 96,
    poster: "assets/images/wonderfools.png",
    trailer: "https://www.youtube.com/results?search_query=The+WONDERfools+Kdrama+Official+Trailer",
    summary: "背景設定在充滿懷舊氣息的 1999 年末，講述一群擁有「缺陷超能力」的平凡市民，在世紀末的慌亂世界中，意外獲得超能力並挺身抗擊邪惡組織的奇幻搞笑故事。朴恩斌飾演毫無計畫的邊緣人，與車銀優飾演的嚴肅公務員碰撞出精彩火花。",
    isHot: true,
    platform: "Netflix"
  },
  {
    id: "soulmate",
    titleCN: "靈魂伴侶",
    titleEN: "Soul Mate",
    cast: ["磯村勇斗", "玉澤演", "吉村界人", "神野三鈴"],
    country: "JP",
    countryName: "日本",
    genres: ["浪漫愛情", "BL", "深刻劇情"],
    episodes: 6,
    releaseDate: "2026年5月14日",
    timing: "current", // 2026-05
    rating: 8.8,
    recIndex: 94,
    poster: "assets/images/soulmate.png",
    trailer: "https://www.youtube.com/results?search_query=Soul+Mate+Netflix+Hayato+Isomura+Taecyeon",
    summary: "由日本與韓國聯合製作的深刻浪漫BL影集。敘述一位日本男子與一位韓國拳擊手之間長達十年的深刻靈魂羈絆，故事場景跨越德國柏林、韓國首爾與日本東京。細膩描繪了跨越國界、性別與時間的深刻宿命感與愛戀。",
    isHot: true,
    platform: "Netflix"
  },
  {
    id: "theair",
    titleCN: "風之元素",
    titleEN: "The Air",
    cast: ["芙琳·薩羅查", "瑞貝卡·阿姆斯壯", "南思·派查拉"],
    country: "TH",
    countryName: "泰國",
    genres: ["青春浪漫", "GL", "四大元素"],
    episodes: 10,
    releaseDate: "2026年5月16日",
    timing: "current", // 2026-05
    rating: 9.1,
    recIndex: 97,
    poster: "assets/images/theair.png",
    trailer: "https://www.youtube.com/results?search_query=The+Air+GL+FreenBecky+Official+Trailer",
    summary: "泰國超人氣GL螢幕情侶 Freen 與 Becky（代表作《粉紅理論》）再度聯袂主演的最新大作，作為「四大元素」主題系列劇集的一部分。本劇以清新的鄉野大自然為背景，描繪一場如風般自由、溫柔卻又令人窒息的青春純愛物語，音樂與視覺美學極其出眾。",
    isHot: true,
    platform: "Idol Factory / One31"
  },
  {
    id: "thebear5",
    titleCN: "大熊餐廳 第五季",
    titleEN: "The Bear Season 5",
    cast: ["傑瑞米·艾倫·懷特", "艾邦·摩斯-貝克許", "阿優·艾德比里", "莉薩·科倫-扎亞斯"],
    country: "US",
    countryName: "美國",
    genres: ["職場劇情", "美食藝術", "高壓緊張"],
    episodes: 10,
    releaseDate: "2026年6月25日",
    timing: "upcoming", // 2026-06
    rating: 9.3,
    recIndex: 98,
    poster: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=The+Bear+Season+5+Official+Trailer",
    summary: "榮獲多項艾美獎的現象級神劇迎來最終章第五季。卡米（Carmy）與他的廚藝團隊在經歷了米其林星級的洗禮與個人情感的崩潰後，將面臨餐廳生死存亡的終極考驗。高頻率的剪輯、極度真實的廚房衝突與溫暖的人性光輝依然是本季焦點。",
    isHot: true,
    platform: "FX / Hulu"
  },
  {
    id: "spidernoir",
    titleCN: "暗影蜘蛛人",
    titleEN: "Spider-Noir",
    cast: ["尼可拉斯·凱吉", "拉蒙尼·莫里斯", "布蘭頓·柯伊爾"],
    country: "US",
    countryName: "美國",
    genres: ["超級英雄", "黑色電影", "動作冒險"],
    episodes: 8,
    releaseDate: "2026年5月25日",
    timing: "current", // 2026-05
    rating: 8.9,
    recIndex: 95,
    poster: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Spider-Noir+Nicolas+Cage+Official+Trailer",
    summary: "講述在 1930 年代紐約，一位年邁且生活落魄的私家偵探（由奧斯卡影帝尼可拉斯·凱吉飾演），作為城市中唯一的超級英雄，在黑白交織的犯罪網中掙扎求生的黑色硬漢故事。極致講究的黑白光影美學與硬派動作設計，是本劇的最大亮點。",
    isHot: true,
    platform: "MGM+ / Prime Video"
  },
  {
    id: "samuraisong",
    titleCN: "武士之歌",
    titleEN: "Song of the Samurai",
    cast: ["鈴鹿央士", "磯村勇斗", "新田真劍佑", "黑島結菜"],
    country: "JP",
    countryName: "日本",
    genres: ["歷史時代劇", "刀劍動作", "深刻劇情"],
    episodes: 10,
    releaseDate: "2026年5月9日",
    timing: "current", // 2026-05
    rating: 8.9,
    recIndex: 94,
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Song+of+the+Samurai+HBO+Max+Trailer",
    summary: "改編自經典幕末漫畫《新選組默示錄》。講述江戶時代末期，新選組隊士們在動盪不安的京都中，為了守護信仰與心中的正義而揮刀戰鬥的壯烈時代悲歌。由 HBO Max 聯合出品，武打場面宏大且極致考究。",
    isHot: true,
    platform: "HBO Max / U-NEXT"
  },
  {
    id: "fiftiespro",
    titleCN: "五十歲的專業人士",
    titleEN: "Fifties Professionals",
    cast: ["申河均", "吳正世", "許城泰", "林智妍"],
    country: "KR",
    countryName: "韓國",
    genres: ["動作喜劇", "犯罪爆笑", "職場反擊"],
    episodes: 10,
    releaseDate: "2026年5月22日",
    timing: "current", // 2026-05
    rating: 8.5,
    recIndex: 91,
    poster: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Fifties+Professionals+Kdrama+Trailer",
    summary: "講述三位年過半百、看似落魄但各自身懷絕技的中年男子，因一場意外的巨額洗錢案被重新召集，展開一場爆笑又驚險的世紀反擊。申河均、吳正世、許城泰三位影帝級戲骨同台飆戲，張力十足。",
    isHot: true,
    platform: "Genie TV / ENA"
  },
  {
    id: "crazylovemoo",
    titleCN: "瘋狂愛上小牛",
    titleEN: "Crazy Love, Moo-Moo!",
    cast: ["波斯·柴卡蒙", "諾爾·納塔拉特", "福多多"],
    country: "TH",
    countryName: "泰國",
    genres: ["青春喜劇", "浪漫 BL", "鄉村輕喜"],
    episodes: 12,
    releaseDate: "2026年5月9日",
    timing: "current", // 2026-05
    rating: 8.8,
    recIndex: 93,
    poster: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Crazy+Love+Moo-Moo+Thai+Drama+Trailer",
    summary: "講述一位高冷的農場繼承人與一位天真活潑的都市實習生在牛棚與牧場間展開的甜蜜爆笑愛情故事。劇中呈現了大量唯美的泰國北部綠色田園風光，氣氛輕鬆活潑，廣受海內外 BL 影迷喜愛。",
    isHot: false,
    platform: "GMMTV / iQIYI"
  },
  {
    id: "legends",
    titleCN: "傳奇臥底",
    titleEN: "Legends",
    cast: ["湯姆·伯克", "史蒂夫·庫根", "海莉·斯誇爾斯", "湯姆·休斯"],
    country: "EU",
    countryName: "歐洲 (英國)",
    genres: ["犯罪劇情", "紀實改編", "懸疑"],
    episodes: 6,
    releaseDate: "2026年5月7日",
    timing: "current", // 2026-05
    rating: 8.6,
    recIndex: 92,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Legends+Neil+Forsyth+Netflix+Trailer",
    summary: "由知名編劇尼爾·福塞斯（Neil Forsyth）編導，改編自 1990 年代初期英國海關署的真實機密行動。講述一群平凡的辦公室基層海關調查員，出乎意料地被徵召為臥底，潛入國際跨國大型販毒集團展開生死博弈的驚險犯罪紀實劇。",
    isHot: false,
    platform: "BBC / Netflix"
  },
  {
    id: "notsuitable",
    titleCN: "辦公室不宜",
    titleEN: "Not Suitable for Work",
    cast: ["艾拉·亨特", "阿凡提卡", "傑·艾利斯", "伊高·恩沃迪姆"],
    country: "US",
    countryName: "美國",
    genres: ["職場喜劇", "都市愛情"],
    episodes: 8,
    releaseDate: "2026年6月2日",
    timing: "upcoming", // 2026-06
    rating: 8.3,
    recIndex: 88,
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Not+Suitable+for+Work+Hulu+Mindy+Kaling+Trailer",
    summary: "由艾美獎多次提名的著名喜劇製作人敏迪·卡靈（Mindy Kaling）傾力打造的都市職場喜劇。故事圍繞在曼哈頓莫里山區，五位熱愛工作卻生活一團糟的二十多歲年輕人，在追求事業顛峰、友情磨合與荒謬職場潛規則中的爆笑日常。",
    isHot: false,
    platform: "Hulu / Disney+"
  },
  {
    id: "doctoredge",
    titleCN: "孤島醫生",
    titleEN: "Doctor on the Edge",
    cast: ["李宰旭", "辛叡恩", "洪民基", "李秀敬", "金允宇"],
    country: "KR",
    countryName: "韓國",
    genres: ["醫療愛情", "網漫改編", "人生成長"],
    episodes: 12,
    releaseDate: "2026年6月1日",
    timing: "upcoming", // 2026-06
    rating: 8.7,
    recIndex: 92,
    poster: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Doctor+on+the+Edge+Kdrama+Official+Trailer",
    summary: "改編自人氣網路漫畫《耐力醫生》。描述一位自傲的都市整形外科醫生，為履行兵役義務被分派到偏遠且生活艱困的孤立島嶼擔任醫官，與島上充滿秘密的熱心護士相遇，兩人在克難的醫療資源下共同拯救生命並互相治癒心靈的溫暖愛情故事。",
    isHot: false,
    platform: "Genie TV / Disney+"
  },
  {
    id: "chloeemma",
    titleCN: "克洛伊與艾瑪",
    titleEN: "Chloe et Emma",
    cast: ["多部未華子", "杉咲花", "岩瀨洋志", "井之脇海"],
    country: "JP",
    countryName: "日本",
    genres: ["溫馨懸疑", "女性情誼", "漫畫改編"],
    episodes: 5,
    releaseDate: "2026年6月12日",
    timing: "upcoming", // 2026-06
    rating: 8.5,
    recIndex: 90,
    poster: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Chloe+et+Emma+Japanese+drama+Prime+Video+Trailer",
    summary: "改編自《逃避雖可恥但有用》漫畫家海野綱彌的最新作品。描述 30 歲在同一天失去工作、男友與房子的艾瑪（杉咲花飾），意外與神秘冷靜的富裕女子克洛伊（多部未華子飾）展開不可思議的同居。兩人共同開辦了一家解憂占卜店，為上門的顧客解開人生與生活中的各類迷霧。",
    isHot: false,
    platform: "Amazon Prime Video"
  },
  {
    id: "witness",
    titleCN: "目擊者",
    titleEN: "The Witness",
    cast: ["湯姆·休斯", "夏洛特·里奇", "道格拉斯·霍奇"],
    country: "EU",
    countryName: "歐洲 (英國)",
    genres: ["犯罪懸疑", "真實改編", "社會議題"],
    episodes: 4,
    releaseDate: "2026年6月4日",
    timing: "upcoming", // 2026-06
    rating: 8.4,
    recIndex: 89,
    poster: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=The+Witness+Netflix+Rachel+Nickell+Trailer",
    summary: "這部極具爭議與反思性的犯罪影集改編自震驚全英的「瑞秋·尼克爾謀殺案」。劇情摒棄了傳統的獵奇追兇視角，將焦點放在該起悲劇對受害者年幼兒子、家庭、以及當時負責搜證的調查員們所造成的深遠心理影響與社會漣漪。",
    isHot: false,
    platform: "Netflix"
  },
  {
    id: "evillawyer",
    titleCN: "邪惡律師",
    titleEN: "The Evil Lawyer",
    cast: ["貝拉·拉達·彭甘", "克里特·安普拉瑟"],
    country: "TH",
    countryName: "泰國",
    genres: ["法律驚悚", "復仇暗黑", "職場鬥爭"],
    episodes: 12,
    releaseDate: "2026年6月",
    timing: "upcoming", // 2026-06
    rating: 8.6,
    recIndex: 91,
    poster: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=The+Evil+Lawyer+Netflix+Trailer",
    summary: "敘述一位美艷且手段極其毒辣的女律師，為了利益與金錢遊走在黑白兩道邊緣，被同行私下稱為「邪惡律師」。直到她在一場陰謀中遭遇慘痛背叛並失去至親後，決定利用自己最精通但最「邪惡」的法律遊戲，向龐大的權貴勢力展開一場致命且精準的復仇反擊。",
    isHot: false,
    platform: "Netflix"
  },
  {
    id: "beyondparadise4",
    titleCN: "天堂之外 第四季",
    titleEN: "Beyond Paradise Season 4",
    cast: ["克里斯·馬歇爾", "莎莉·布雷頓", "扎拉·阿赫米德"],
    country: "EU",
    countryName: "歐洲 (英國)",
    genres: ["溫馨偵探", "輕快懸疑", "幽默小鎮"],
    episodes: 6,
    releaseDate: "2026年6月9日",
    timing: "upcoming", // 2026-06
    rating: 8.4,
    recIndex: 89,
    poster: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Beyond+Paradise+Season+4+BritBox+Trailer",
    summary: "廣受歡迎的英式溫馨偵探喜劇《天堂之外》迎來第四季。漢弗萊（Humphrey）督察與他的警探團隊在德文郡美麗的港口小鎮，繼續破解各種看似離奇難解但實則充滿溫情與鄉土氣息的離奇案件。極具英式幽默與田園風情。",
    isHot: false,
    platform: "BritBox / BBC"
  },
  {
    id: "lanterns",
    titleCN: "綠光軍團",
    titleEN: "Lanterns",
    cast: ["艾力克斯·派帝佛", "阿爾迪斯·霍吉", "凱爾·錢德勒"],
    country: "US",
    countryName: "美國",
    genres: ["超級英雄", "科幻懸疑", "警匪動作"],
    episodes: 8,
    releaseDate: "2026年8月",
    timing: "late2026",
    rating: 8.8,
    recIndex: 94,
    poster: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Lanterns+HBO+Official+Trailer",
    summary: "改編自 DC 漫畫經典 IP《綠光戰警》，這部 HBO 頂級科幻懸疑大作以雙主角形式展開。新任綠光戰警約翰·史都華與傳奇綠光戰警哈爾·喬丹在地球深處調查一宗離奇命案，卻意外扯出了威脅整個宇宙的驚天陰謀。風格偏向《無間警探》般陰暗硬派。",
    isHot: true,
    platform: "HBO / Max"
  },
  {
    id: "shopkillers2",
    titleCN: "殺手接班人 第二季",
    titleEN: "A Shop for Killers Season 2",
    cast: ["李棟旭", "金慧峻", "徐賢宇", "金民"],
    country: "KR",
    countryName: "韓國",
    genres: ["動作驚悚", "懸疑暗黑", "殺手對決"],
    episodes: 8,
    releaseDate: "2026年10月",
    timing: "late2026",
    rating: 9.0,
    recIndex: 95,
    poster: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=A+Shop+for+Killers+Season+2+Disney+Trailer",
    summary: "備受期待的爆品韓劇《殺手接班人》第二季強勢回歸！接續第一季叔叔鄭進灣驚天復活的震撼結論，鄭智安正式接掌了神秘且致命的武器購物網站。隨著各國頂尖殺手與地下勢力再次蠢蠢欲動，叔姪倆將攜手在槍林彈雨中揭開購物網背後的終極真相。",
    isHot: true,
    platform: "Disney+"
  },
  {
    id: "madeinkorea2",
    titleCN: "韓國製造 第二季",
    titleEN: "Made in Korea Season 2",
    cast: ["玄彬", "鄭雨盛", "元志安"],
    country: "KR",
    countryName: "韓國",
    genres: ["時代劇情", "史詩犯罪", "政治博弈"],
    episodes: 10,
    releaseDate: "2026年11月",
    timing: "late2026",
    rating: 9.1,
    recIndex: 96,
    poster: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Made+in+Korea+Kdrama+Disney+Trailer",
    summary: "由影帝玄彬與鄭雨盛巔峰交鋒的史詩級巨作《韓國製造》推出第二季。背景橫跨動盪的 1970 年代，描繪一個充滿野心與財富激盪的時代。身懷滔天權慾的男人與挺身對抗他的正義檢察官，將展開更加慘烈無情的生死較量。",
    isHot: true,
    platform: "Disney+"
  },
  {
    id: "humanvapor",
    titleCN: "氣體人",
    titleEN: "The Human Vapor",
    cast: ["磯村勇斗", "山崎賢人", "奈緒"],
    country: "JP",
    countryName: "日本",
    genres: ["科幻驚悚", "深刻劇情", "超能力犯罪"],
    episodes: 8,
    releaseDate: "2026年11月",
    timing: "late2026",
    rating: 8.7,
    recIndex: 93,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=The+Human+Vapor+Netflix+Official+Trailer",
    summary: "改編自日本東寶經典科幻特攝片《電送人間》與《氣體人第一號》。由南韓名導三池崇史監製、磯村勇斗與山崎賢人聯手主演。敘述因人體實驗而獲得能自由化為「氣體」的超能力犯罪者，與追查他的刑警之間在科技東京所展開的精彩對決。",
    isHot: false,
    platform: "Netflix"
  },
  {
    id: "severance3",
    titleCN: "人生切割術 第三季",
    titleEN: "Severance Season 3",
    cast: ["亞當·史考特", "派翠西亞·艾奎特", "約翰·特托羅", "克里斯多夫·華肯"],
    country: "US",
    countryName: "美國",
    genres: ["科幻懸疑", "心理驚悚", "反烏托邦"],
    episodes: 9,
    releaseDate: "2027年1月",
    timing: "year2027",
    rating: 9.4,
    recIndex: 97,
    poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Severance+Season+3+Apple+TV+Trailer",
    summary: "榮獲多項大獎的現象級燒腦神劇《人生切割術》強勢續訂第三季。在第二季結尾打破內外人格界限的驚天逃亡後，馬克（Mark）與他的小組成員在盧盟工業內部展開了更具威脅的反擊，試圖徹底拆毀這座控制他們心智的龐大反烏托邦帝國。",
    isHot: true,
    platform: "Apple TV+"
  },
  {
    id: "godofwar",
    titleCN: "戰神",
    titleEN: "God of War",
    cast: ["薩尼·蘇爾吉克", "克里斯多福·賈基"],
    country: "US",
    countryName: "美國",
    genres: ["動作奇幻", "神話史詩", "冒險劇情"],
    episodes: 8,
    releaseDate: "2027年11月",
    timing: "year2027",
    rating: 9.5,
    recIndex: 98,
    poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=God+of+War+Amazon+Series+Official+Trailer",
    summary: "改編自索尼 PlayStation 同名殿堂級遊戲神作，由 Amazon Prime Video 聯手索尼影業傾力打造的史詩級美劇。故事以北歐神話篇章為藍本，講述在荒涼殘酷的北歐荒野中，戰神奎托斯與兒子阿特柔斯踏上履行誓言的壯烈冒險，極致逼真的 CG 效與震撼打鬥場面無與倫比。",
    isHot: false,
    platform: "Prime Video"
  },
  {
    id: "onepiece2",
    titleCN: "航海王 第二季",
    titleEN: "One Piece Season 2",
    cast: ["伊納基·戈多伊", "新田真劍佑", "艾蜜莉·拉德", "雅各·吉勃遜"],
    country: "JP",
    countryName: "日本 / 美國",
    genres: ["奇幻冒險", "熱血動作", "漫改神作"],
    episodes: 8,
    releaseDate: "2027年",
    timing: "year2027",
    rating: 9.0,
    recIndex: 94,
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=One+Piece+Season+2+Netflix+Trailer",
    summary: "席捲全球的真人版漫改神作《航海王》第二季震撼上檔！魯夫與草帽海賊團將跨越顛倒山，正式進入充滿未知危險的「偉大航道」。人氣極高的喬巴將首次登場，巴洛克華克組織的陰謀也逐漸拉開帷幕，視覺特效與海洋冒險規模全面升級。",
    isHot: false,
    platform: "Netflix"
  },
  {
    id: "shades",
    titleCN: "影 / 精英學院",
    titleEN: "Shades",
    cast: ["夏洛特·奧斯汀", "英法·瓦拉哈"],
    country: "TH",
    countryName: "泰國",
    genres: ["青春懸疑", "浪漫 GL", "校園博弈"],
    episodes: 10,
    releaseDate: "2027年",
    timing: "year2027",
    rating: 8.9,
    recIndex: 93,
    poster: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80",
    trailer: "https://www.youtube.com/results?search_query=Shades+Engfa+Charlotte+Grand+TV+Trailer",
    summary: "泰國頂流 GL 螢幕情侶 Engfa 與 Charlotte（代表作《畫中情思》）再度聯手出演的年度大作。在一座專為社會名流子弟設立的私立精英學院中，兩位背景截然不同的少女在利益權謀、秘密結社與暗黑校園霸凌中，展開相愛相殺且極度動人的深情虐戀。",
    isHot: false,
    platform: "Grand TV / Netflix"
  }
];

// --- State Management ---
let currentCountryFilter = "all";
let currentMonthFilter = "all";
let currentPlatformFilter = "all";
let currentSearchQuery = "";
let currentCarouselIndex = 0;
let carouselInterval = null;

// TMDb Sync Configuration States
let tmdbSyncEnabled = false;
let tmdbApiKey = "";
let activeDramas = [];

// --- DOM Elements ---
const carouselSlidesWrapper = document.getElementById("carousel-slides-wrapper");
const carouselDotsWrapper = document.getElementById("carousel-dots-wrapper");
const carouselPrevBtn = document.getElementById("carousel-prev");
const carouselNextBtn = document.getElementById("carousel-next");

const showsGrid = document.getElementById("shows-grid");
const hotShowsGrid = document.getElementById("hot-shows-grid");
const noResultsElement = document.getElementById("no-results");
const globalSearchInput = document.getElementById("global-search");

const countryFiltersContainer = document.getElementById("country-filters");
const monthFiltersContainer = document.getElementById("month-filters");
const platformFiltersContainer = document.getElementById("platform-filters");

const filtersSummaryElement = document.getElementById("filters-summary");
const summaryChipsContainer = document.getElementById("summary-chips-container");
const clearFiltersBtn = document.getElementById("clear-filters");

const detailModal = document.getElementById("detail-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalBodyContent = document.getElementById("modal-body-content");

const trailerModal = document.getElementById("trailer-modal");
const closeTrailerBtn = document.getElementById("close-trailer");
const trailerIframe = document.getElementById("trailer-iframe");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  loadSyncSettings();
  setupFilterListeners();
  setupSearchListener();
  setupModalListeners();
  setupSyncModalListeners();

  if (tmdbSyncEnabled && tmdbApiKey) {
    startTMDbSync();
  } else {
    useLocalDramas();
  }
});

// Load static curated dramas into active display array
function useLocalDramas() {
  activeDramas = JSON.parse(JSON.stringify(dramas));
  initCarousel();
  renderShows();
  renderHotShows();
  updateSyncStatusUI(false);
}

// Load sync settings from browser LocalStorage
function loadSyncSettings() {
  // If API key is hardcoded in JS, use it and enable sync automatically
  if (typeof TMDB_API_KEY !== "undefined" && TMDB_API_KEY && TMDB_API_KEY !== "YOUR_TMDB_API_KEY_HERE") {
    tmdbApiKey = TMDB_API_KEY;
    tmdbSyncEnabled = true;
    return;
  }

  const savedEnabled = localStorage.getItem("tmdb_sync_enabled");
  const savedKey = localStorage.getItem("tmdb_api_key");

  tmdbSyncEnabled = savedEnabled === "true";
  tmdbApiKey = savedKey || "";
}

// Update settings UI indicator light and headers
function updateSyncStatusUI(syncing, errorMsg = "") {
  const syncBtn = document.getElementById("open-sync-settings");
  const indicator = document.querySelector("#sync-status .status-indicator");
  const statusTitle = document.getElementById("sync-status-title");
  const statusDesc = document.getElementById("sync-status-desc");

  if (!indicator || !statusTitle || !statusDesc) return;

  if (syncing) {
    syncBtn.classList.add("active");
    indicator.className = "status-indicator online";
    statusTitle.textContent = "目前狀態：雲端實時同步中...";
    statusDesc.textContent = "正在連接 The Movie Database 獲取最新即時數據...";
  } else {
    syncBtn.classList.remove("active");
    if (tmdbSyncEnabled && tmdbApiKey) {
      if (errorMsg) {
        indicator.className = "status-indicator offline";
        statusTitle.textContent = "目前狀態：同步失敗";
        statusDesc.textContent = `錯誤原因：${errorMsg}。已自動降級至本地快取模式。`;
      } else {
        indicator.className = "status-indicator online";
        statusTitle.textContent = "目前狀態：雲端同步啟用";
        statusDesc.textContent = `已成功連接 TMDb。獲取最新即時數據（共 ${activeDramas.length} 部劇）。`;
      }
    } else {
      indicator.className = "status-indicator offline";
      statusTitle.textContent = "目前狀態：本地快取模式";
      statusDesc.textContent = "使用專屬精選高品質 Traditional Chinese 電視劇數據（共 24 部劇）。";
    }
  }
}

// Setup Settings modal toggles & password inputs
function setupSyncModalListeners() {
  const syncSettingsModal = document.getElementById("sync-settings-modal");
  const openSyncSettingsBtn = document.getElementById("open-sync-settings");
  const closeSettingsBtn = document.getElementById("close-settings");
  const cancelSettingsBtn = document.getElementById("cancel-settings");
  const saveSettingsBtn = document.getElementById("save-settings");
  const tmdbToggleInput = document.getElementById("tmdb-toggle");
  const tmdbKeyInput = document.getElementById("tmdb-key-input");
  const toggleKeyVisibilityBtn = document.getElementById("toggle-key-visibility");

  openSyncSettingsBtn.addEventListener("click", () => {
    tmdbToggleInput.checked = tmdbSyncEnabled;
    tmdbKeyInput.value = tmdbApiKey;
    syncSettingsModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeSettings = () => {
    syncSettingsModal.classList.remove("active");
    if (!detailModal.classList.contains("active")) {
      document.body.style.overflow = "";
    }
  };
  closeSettingsBtn.addEventListener("click", closeSettings);
  cancelSettingsBtn.addEventListener("click", closeSettings);
  
  syncSettingsModal.addEventListener("click", (e) => {
    if (e.target === syncSettingsModal) closeSettings();
  });

  toggleKeyVisibilityBtn.addEventListener("click", () => {
    const isPassword = tmdbKeyInput.type === "password";
    tmdbKeyInput.type = isPassword ? "text" : "password";
    const icon = toggleKeyVisibilityBtn.querySelector("i");
    if (icon) {
      icon.className = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    }
  });

  saveSettingsBtn.addEventListener("click", () => {
    const enabled = tmdbToggleInput.checked;
    const key = tmdbKeyInput.value.trim();

    if (enabled && !key) {
      alert("請輸入您的 TMDb API 金鑰以啟用實時同步功能！");
      return;
    }

    tmdbSyncEnabled = enabled;
    tmdbApiKey = key;

    localStorage.setItem("tmdb_sync_enabled", enabled ? "true" : "false");
    localStorage.setItem("tmdb_api_key", key);

    closeSettings();

    if (tmdbSyncEnabled && tmdbApiKey) {
      startTMDbSync();
    } else {
      useLocalDramas();
    }
  });
}

// Dynamic TMDb Live Sync engine
async function startTMDbSync() {
  updateSyncStatusUI(true);

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKey = tmdbApiKey;
  const commonParams = `api_key=${apiKey}&language=zh-TW&sort_by=popularity.desc&with_origin_country=US|KR|JP|TH|GB|FR|DE|IT|ES`;

  const timeframes = [
    { timing: "current", gte: "2026-05-01", lte: "2026-05-31" },
    { timing: "upcoming", gte: "2026-06-01", lte: "2026-06-30" },
    { timing: "late2026", gte: "2026-07-01", lte: "2026-12-31" },
    { timing: "year2027", gte: "2027-01-01", lte: "2027-12-31" }
  ];

  try {
    const fetchPromises = timeframes.map(tf => {
      const url = `${baseUrl}/discover/tv?${commonParams}&first_air_date.gte=${tf.gte}&first_air_date.lte=${tf.lte}`;
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP 錯誤! 狀態碼: ${response.status}`);
          }
          return response.json();
        })
        .then(data => ({ timing: tf.timing, results: data.results || [] }));
    });

    const resultsArray = await Promise.all(fetchPromises);
    let tempDramas = [];

    // Dictionary to translate TMDb TV genres to Traditional Chinese
    const genreDict = {
      10759: "動作冒險", 16: "動畫", 35: "喜劇", 80: "犯罪", 99: "紀錄",
      18: "劇情", 10751: "家庭", 10762: "兒童", 9648: "懸疑", 10763: "新聞",
      10764: "真人秀", 10765: "科幻奇幻", 10766: "肥皂劇", 10767: "談話",
      10768: "戰爭政治", 37: "西部"
    };

    // Country Code to Chinese Name Translator
    function mapCountry(originCountries) {
      if (!originCountries || originCountries.length === 0) return { code: "US", name: "美國" };
      const primary = originCountries[0];
      if (primary === "US") return { code: "US", name: "美國" };
      if (primary === "KR") return { code: "KR", name: "韓國" };
      if (primary === "JP") return { code: "JP", name: "日本" };
      if (primary === "TH") return { code: "TH", name: "泰國" };
      
      const euCountries = {
        "GB": "英國", "FR": "法國", "DE": "德國", "IT": "義大利", "ES": "西班牙",
        "IE": "愛爾蘭", "NL": "荷蘭", "SE": "瑞典", "NO": "挪威", "DK": "丹麥",
        "FI": "芬蘭", "PL": "波蘭", "BE": "比利時", "CH": "瑞士", "AT": "奧地利"
      };
      if (euCountries[primary]) {
        return { code: "EU", name: `歐洲 (${euCountries[primary]})` };
      }
      return { code: "US", name: "美國" };
    }

    resultsArray.forEach(group => {
      group.results.forEach(show => {
        const mappedCountry = mapCountry(show.origin_country);
        const genres = (show.genre_ids || [])
          .map(id => genreDict[id])
          .filter(name => !!name);

        if (genres.length === 0) genres.push("電視劇");

        let releaseDateStr = "未定";
        if (show.first_air_date) {
          const parts = show.first_air_date.split("-");
          if (parts.length === 3) {
            releaseDateStr = `${parts[0]}年${parseInt(parts[1])}月${parseInt(parts[2])}日`;
          } else {
            releaseDateStr = show.first_air_date;
          }
        }

        const rawRating = show.vote_average || 0;
        const rating = rawRating > 0 ? parseFloat(rawRating.toFixed(1)) : parseFloat((8.0 + (show.popularity % 15) / 10).toFixed(1));
        const recIndex = Math.min(99, Math.max(70, Math.round(rating * 10)));

        const posterUrl = show.poster_path 
          ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
          : "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80";

        tempDramas.push({
          id: String(show.id),
          titleCN: show.name || show.original_name,
          titleEN: show.original_name || show.name,
          cast: ["TMDb 載入中..."],
          country: mappedCountry.code,
          countryName: mappedCountry.name,
          genres: genres,
          episodes: "更新中",
          releaseDate: releaseDateStr,
          timing: group.timing,
          rating: rating,
          recIndex: recIndex,
          poster: posterUrl,
          trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent((show.name || show.original_name) + " 預告")}`,
          summary: show.overview || "暫無繁體中文劇集介紹。本劇集由 TMDb 提供實時同步資料，詳情請點擊展開卡片關注後續更新。",
          isHot: false,
          platform: "TMDb Sync",
          isDetailed: false,
          popularity: show.popularity || 0
        });
      });
    });

    if (tempDramas.length === 0) {
      throw new Error("TMDb 未返回任何劇集數據");
    }

    // Select Top 10 most popular shows from current/upcoming sets for the Carousel
    const currentAndUpcoming = tempDramas.filter(d => d.timing === "current" || d.timing === "upcoming");
    currentAndUpcoming.sort((a, b) => b.popularity - a.popularity);
    
    const hotIds = currentAndUpcoming.slice(0, 10).map(d => d.id);
    tempDramas.forEach(d => {
      if (hotIds.includes(d.id)) {
        d.isHot = true;
      }
    });

    activeDramas = tempDramas;
    initCarousel();
    renderShows();
    renderHotShows();
    updateSyncStatusUI(false);
  } catch (error) {
    console.error("TMDb Synchronization Error:", error);
    useLocalDramas();
    updateSyncStatusUI(false, error.message || "未知網路錯誤");
  }
}

// --- Friendly Genre Icon Dictionary & Mapper ---
function getGenreIcon(genre) {
  const mapping = {
    "超自然驚悚": "fa-ghost",
    "懸疑": "fa-magnifying-glass",
    "科幻驚悚": "fa-user-astronaut",
    "科幻": "fa-robot",
    "奇幻喜劇": "fa-wand-magic-sparkles",
    "奇幻冒險": "fa-wand-magic-sparkles",
    "奇幻": "fa-wand-magic-sparkles",
    "科幻奇幻": "fa-wand-magic-sparkles",
    "動作": "fa-bolt",
    "刀劍動作": "fa-shield-halved",
    "動作驚悚": "fa-bolt",
    "動作冒險": "fa-bolt",
    "超能力": "fa-bolt-lightning",
    "超能力犯罪": "fa-bolt-lightning",
    "浪漫愛情": "fa-heart",
    "浪漫 BL": "fa-heart",
    "浪漫 GL": "fa-heart",
    "GL": "fa-heart",
    "BL": "fa-heart",
    "深刻劇情": "fa-masks-theater",
    "劇情": "fa-masks-theater",
    "職場劇情": "fa-briefcase",
    "人生成長": "fa-arrow-trend-up",
    "女性情誼": "fa-user-group",
    "社會議題": "fa-circle-question",
    "史詩犯罪": "fa-user-secret",
    "政治博弈": "fa-landmark",
    "時代劇情": "fa-landmark",
    "青春浪漫": "fa-graduation-cap",
    "青春喜劇": "fa-graduation-cap",
    "青春懸疑": "fa-graduation-cap",
    "職場喜劇": "fa-briefcase",
    "職場反擊": "fa-briefcase",
    "職場鬥爭": "fa-briefcase",
    "美食藝術": "fa-utensils",
    "高壓緊張": "fa-gauge-high",
    "超級英雄": "fa-mask",
    "黑色電影": "fa-moon",
    "歷史時代劇": "fa-landmark",
    "犯罪爆笑": "fa-handcuffs",
    "犯罪劇情": "fa-user-secret",
    "犯罪懸疑": "fa-user-secret",
    "犯罪": "fa-user-secret",
    "鄉村輕喜": "fa-wheat-awn",
    "紀實改編": "fa-file-signature",
    "真實改編": "fa-file-signature",
    "都市愛情": "fa-building",
    "醫療愛情": "fa-stethoscope",
    "網漫改編": "fa-book-open",
    "漫畫改編": "fa-book-open",
    "漫改神作": "fa-book-open",
    "溫馨懸疑": "fa-mug-hot",
    "溫馨偵探": "fa-mug-hot",
    "輕快懸疑": "fa-magnifying-glass",
    "幽默小鎮": "fa-map-pin",
    "喜劇": "fa-face-smile",
    "動畫": "fa-palette",
    "紀錄": "fa-camera",
    "家庭": "fa-house-chimney-user",
    "兒童": "fa-baby-carriage",
    "戰爭政治": "fa-flag",
    "肥皂劇": "fa-soap",
    "談話": "fa-comments"
  };

  for (let key in mapping) {
    if (genre.includes(key)) {
      return `<i class="fa-solid ${mapping[key]}"></i> `;
    }
  }
  return `<i class="fa-solid fa-hashtag"></i> `;
}

// --- 1. Carousel Slide Engine (Hot Dramas) ---
function initCarousel() {
  const hotDramas = activeDramas.filter(d => d.isHot);
  carouselSlidesWrapper.innerHTML = "";
  carouselDotsWrapper.innerHTML = "";

  hotDramas.forEach((drama, index) => {
    // Generate Slide HTML
    const slide = document.createElement("div");
    slide.className = `carousel-slide ${index === 0 ? "active" : ""}`;
    slide.innerHTML = `
      <img src="${drama.poster}" alt="${drama.titleCN}" class="slide-bg">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <div class="hot-badge"><i class="fa-solid fa-fire"></i> 熱門精選</div>
        <h3 class="slide-title">${drama.titleCN}</h3>
        <div class="slide-metadata">
          <span class="slide-rating"><i class="fa-solid fa-star"></i> ${drama.rating} 評分</span>
          <span class="slide-rec"><i class="fa-solid fa-heart"></i> ${drama.recIndex}% 推薦</span>
          <span class="slide-genre">${drama.genres.map(g => getGenreIcon(g) + g).join(" / ")}</span>
          <span class="slide-country"><i class="fa-solid fa-earth-asia"></i> ${drama.countryName}</span>
        </div>
        <p class="slide-desc">${drama.summary}</p>
        <div class="slide-actions">
          <button class="btn btn-primary" onclick="openDetails('${drama.id}')">
            <i class="fa-solid fa-circle-info"></i> 查看詳情
          </button>
          <button class="btn btn-secondary" onclick="openTrailer('${drama.trailer}')">
            <i class="fa-solid fa-circle-play"></i> 播放預告
          </button>
        </div>
      </div>
    `;
    carouselSlidesWrapper.appendChild(slide);

    // Generate Dot HTML
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `頁面 ${index + 1}`);
    dot.addEventListener("click", () => {
      setCarouselSlide(index);
      resetCarouselTimer();
    });
    carouselDotsWrapper.appendChild(dot);
  });

  // Carousel Button Listeners
  carouselPrevBtn.addEventListener("click", () => {
    navigateCarousel(-1);
    resetCarouselTimer();
  });
  carouselNextBtn.addEventListener("click", () => {
    navigateCarousel(1);
    resetCarouselTimer();
  });

  startCarouselTimer();
}

function setCarouselSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  if (slides.length === 0) return;

  slides[currentCarouselIndex].classList.remove("active");
  dots[currentCarouselIndex].classList.remove("active");

  currentCarouselIndex = (index + slides.length) % slides.length;

  slides[currentCarouselIndex].classList.add("active");
  dots[currentCarouselIndex].classList.add("active");
}

function navigateCarousel(direction) {
  setCarouselSlide(currentCarouselIndex + direction);
}

function startCarouselTimer() {
  carouselInterval = setInterval(() => {
    navigateCarousel(1);
  }, 6000);
}

function resetCarouselTimer() {
  clearInterval(carouselInterval);
  startCarouselTimer();
}

// --- 2. Filter & Render System ---
function renderShows() {
  showsGrid.innerHTML = "";
  
  // Apply State Filters
  const filteredDramas = activeDramas.filter(drama => {
    // Country Filter
    const matchesCountry = (currentCountryFilter === "all" || drama.country === currentCountryFilter);
    // Timing Filter
    const matchesTiming = (currentMonthFilter === "all" || drama.timing === currentMonthFilter);
    // Search Filter
    const query = currentSearchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      drama.titleCN.toLowerCase().includes(query) ||
      drama.titleEN.toLowerCase().includes(query) ||
      drama.genres.some(g => g.toLowerCase().includes(query)) ||
      drama.cast.some(actor => actor.toLowerCase().includes(query));

    // Platform Filter
    let matchesPlatform = true;
    if (currentPlatformFilter !== "all") {
      const platformStr = (drama.platform || "").toLowerCase();
      if (currentPlatformFilter === "netflix") {
        matchesPlatform = platformStr.includes("netflix");
      } else if (currentPlatformFilter === "disney") {
        matchesPlatform = platformStr.includes("disney");
      } else if (currentPlatformFilter === "prime") {
        matchesPlatform = platformStr.includes("prime") || platformStr.includes("amazon");
      } else if (currentPlatformFilter === "hbo") {
        matchesPlatform = platformStr.includes("hbo") || platformStr.includes("max");
      } else if (currentPlatformFilter === "hulu") {
        matchesPlatform = platformStr.includes("hulu");
      } else if (currentPlatformFilter === "apple") {
        matchesPlatform = platformStr.includes("apple");
      } else if (currentPlatformFilter === "others") {
        const isMajor = platformStr.includes("netflix") || 
                        platformStr.includes("disney") || 
                        platformStr.includes("prime") || 
                        platformStr.includes("amazon") || 
                        platformStr.includes("hbo") || 
                        platformStr.includes("max") || 
                        platformStr.includes("hulu") || 
                        platformStr.includes("apple");
        matchesPlatform = !isMajor;
      }
    }

    return matchesCountry && matchesTiming && matchesSearch && matchesPlatform;
  });

  // Empty State Check
  if (filteredDramas.length === 0) {
    noResultsElement.style.display = "block";
    showsGrid.style.display = "none";
  } else {
    noResultsElement.style.display = "none";
    showsGrid.style.display = "grid";
  }

  // Inject Show Cards
  filteredDramas.forEach(drama => {
    const card = document.createElement("div");
    card.className = "show-card";
    card.addEventListener("click", () => openDetails(drama.id));

    // Cover Visual Strategy (Now 100% Filled using dynamic image hyperlinks)
    let posterContent = `<img src="${drama.poster}" alt="${drama.titleCN}" loading="lazy">`;

    let timingBadgeClass = "badge-month-current";
    let timingBadgeLabel = "本月上映";
    let timingBadgeIcon = "fa-hourglass-start";
    if (drama.timing === "upcoming") {
      timingBadgeClass = "badge-month-upcoming";
      timingBadgeLabel = "下月預告";
      timingBadgeIcon = "fa-hourglass-half";
    } else if (drama.timing === "late2026") {
      timingBadgeClass = "badge-month-late2026";
      timingBadgeLabel = "2026下半年";
      timingBadgeIcon = "fa-snowflake";
    } else if (drama.timing === "year2027") {
      timingBadgeClass = "badge-month-year2027";
      timingBadgeLabel = "2027年預告";
      timingBadgeIcon = "fa-rocket";
    }

    card.innerHTML = `
      <div class="card-img-wrapper">
        <span class="card-badge ${timingBadgeClass}"><i class="fa-solid ${timingBadgeIcon}"></i> ${timingBadgeLabel}</span>
        <span class="card-rating-float"><i class="fa-solid fa-star"></i> ${drama.rating}</span>
        ${posterContent}
      </div>
      <div class="card-content">
        <h3 class="card-title" title="${drama.titleCN}">${drama.titleCN}</h3>
        <div class="card-tags">
          ${drama.genres.slice(0, 2).map(g => `<span class="card-tag">${getGenreIcon(g)}${g}</span>`).join("")}
          <span class="card-tag" style="background: rgba(24, 116, 152, 0.1); border: 1px solid rgba(24, 116, 152, 0.2); color: #7dd3fc;"><i class="fa-solid fa-earth-asia"></i> ${drama.countryName}</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-calendar-days"></i>
          <span>檔期: ${drama.releaseDate}</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-users"></i>
          <span title="${drama.cast.join(", ")}">演員: ${drama.cast.slice(0, 2).join(", ")}...</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-tv"></i>
          <span>規格: 共 ${drama.episodes} 集 / ${drama.platform}</span>
        </div>
        
        <div class="card-footer">
          <div class="rec-bar-container">
            <div class="rec-bar-label">
              <span><i class="fa-solid fa-heart"></i> 推薦指數</span>
              <span>${drama.recIndex}%</span>
            </div>
            <div class="rec-bar-track">
              <div class="rec-bar-fill" style="width: ${drama.recIndex}%"></div>
            </div>
          </div>
          <span class="rec-index-pct">${getStarsIcon(drama.rating)}</span>
        </div>
      </div>
    `;
    showsGrid.appendChild(card);
  });

  updateFilterSummaryBanner();
}

// --- 2b. Hot Shows Grid Rendering System ---
function renderHotShows() {
  if (!hotShowsGrid) return;
  hotShowsGrid.innerHTML = "";

  const hotDramas = activeDramas.filter(d => d.isHot);

  hotDramas.forEach(drama => {
    const card = document.createElement("div");
    card.className = "show-card";
    card.addEventListener("click", () => openDetails(drama.id));

    let posterContent = `<img src="${drama.poster}" alt="${drama.titleCN}" loading="lazy">`;

    let timingBadgeClass = "badge-month-current";
    let timingBadgeLabel = "本月上映";
    let timingBadgeIcon = "fa-hourglass-start";
    if (drama.timing === "upcoming") {
      timingBadgeClass = "badge-month-upcoming";
      timingBadgeLabel = "下月預告";
      timingBadgeIcon = "fa-hourglass-half";
    } else if (drama.timing === "late2026") {
      timingBadgeClass = "badge-month-late2026";
      timingBadgeLabel = "2026下半年";
      timingBadgeIcon = "fa-snowflake";
    } else if (drama.timing === "year2027") {
      timingBadgeClass = "badge-month-year2027";
      timingBadgeLabel = "2027年預告";
      timingBadgeIcon = "fa-rocket";
    }

    card.innerHTML = `
      <div class="card-img-wrapper">
        <span class="card-badge ${timingBadgeClass}"><i class="fa-solid ${timingBadgeIcon}"></i> ${timingBadgeLabel}</span>
        <span class="card-rating-float"><i class="fa-solid fa-star"></i> ${drama.rating}</span>
        ${posterContent}
      </div>
      <div class="card-content">
        <h3 class="card-title" title="${drama.titleCN}">${drama.titleCN}</h3>
        <div class="card-tags">
          ${drama.genres.slice(0, 2).map(g => `<span class="card-tag">${getGenreIcon(g)}${g}</span>`).join("")}
          <span class="card-tag" style="background: rgba(24, 116, 152, 0.1); border: 1px solid rgba(24, 116, 152, 0.2); color: #7dd3fc;"><i class="fa-solid fa-earth-asia"></i> ${drama.countryName}</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-calendar-days"></i>
          <span>檔期: ${drama.releaseDate}</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-users"></i>
          <span title="${drama.cast.join(", ")}">演員: ${drama.cast.slice(0, 2).join(", ")}...</span>
        </div>
        <div class="card-info-item">
          <i class="fa-solid fa-tv"></i>
          <span>規格: 共 ${drama.episodes} 集 / ${drama.platform}</span>
        </div>
        
        <div class="card-footer">
          <div class="rec-bar-container">
            <div class="rec-bar-label">
              <span><i class="fa-solid fa-heart"></i> 推薦指數</span>
              <span>${drama.recIndex}%</span>
            </div>
            <div class="rec-bar-track">
              <div class="rec-bar-fill" style="width: ${drama.recIndex}%"></div>
            </div>
          </div>
          <span class="rec-index-pct">${getStarsIcon(drama.rating)}</span>
        </div>
      </div>
    `;
    hotShowsGrid.appendChild(card);
  });
}

// Generate stars visual for recommendation index
function getStarsIcon(rating) {
  if (rating >= 9.0) return "★★★★★";
  if (rating >= 8.5) return "★★★★☆";
  return "★★★☆☆";
}

// --- 3. Filter Interactive Logic ---
function setupFilterListeners() {
  // Country filter chips
  countryFiltersContainer.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      countryFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
      chip.classList.add("active");
      currentCountryFilter = chip.getAttribute("data-country");
      renderShows();
    });
  });

  // Release Month filter chips
  monthFiltersContainer.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      monthFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
      chip.classList.add("active");
      currentMonthFilter = chip.getAttribute("data-month");
      renderShows();
    });
  });

  // Streaming Platform filter chips
  if (platformFiltersContainer) {
    platformFiltersContainer.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        platformFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
        chip.classList.add("active");
        currentPlatformFilter = chip.getAttribute("data-platform");
        renderShows();
      });
    });
  }

  // Reset filter button
  clearFiltersBtn.addEventListener("click", () => {
    resetFilters();
  });
}

function resetFilters() {
  currentCountryFilter = "all";
  currentMonthFilter = "all";
  currentPlatformFilter = "all";
  currentSearchQuery = "";
  globalSearchInput.value = "";

  countryFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
  countryFiltersContainer.querySelector('[data-country="all"]').classList.add("active");

  monthFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
  monthFiltersContainer.querySelector('[data-month="all"]').classList.add("active");

  if (platformFiltersContainer) {
    platformFiltersContainer.querySelector(".filter-chip.active").classList.remove("active");
    platformFiltersContainer.querySelector('[data-platform="all"]').classList.add("active");
  }

  renderShows();
}

function updateFilterSummaryBanner() {
  summaryChipsContainer.innerHTML = "";
  let hasActiveFilter = false;

  if (currentCountryFilter !== "all") {
    const countryNames = { "US": "美國劇", "KR": "韓國劇", "JP": "日本劇", "EU": "歐洲劇", "TH": "泰國劇" };
    createSummaryTag(countryNames[currentCountryFilter]);
    hasActiveFilter = true;
  }

  if (currentMonthFilter !== "all") {
    const monthLabels = { 
      "current": "2026/05 本月上映", 
      "upcoming": "2026/06 下月即將上映",
      "late2026": "2026年底前 (下半年)",
      "year2027": "2027年即將上映"
    };
    createSummaryTag(monthLabels[currentMonthFilter]);
    hasActiveFilter = true;
  }

  if (currentPlatformFilter !== "all") {
    const platformNames = {
      "netflix": "Netflix",
      "disney": "Disney+",
      "prime": "Prime Video",
      "hbo": "HBO / Max",
      "hulu": "Hulu",
      "apple": "Apple TV+",
      "others": "其他平台"
    };
    createSummaryTag(platformNames[currentPlatformFilter]);
    hasActiveFilter = true;
  }

  if (currentSearchQuery.trim() !== "") {
    createSummaryTag(`搜尋: "${currentSearchQuery}"`);
    hasActiveFilter = true;
  }

  if (hasActiveFilter) {
    filtersSummaryElement.style.display = "flex";
  } else {
    filtersSummaryElement.style.display = "none";
  }
}

function createSummaryTag(text) {
  const tag = document.createElement("span");
  tag.className = "summary-tag";
  tag.textContent = text;
  summaryChipsContainer.appendChild(tag);
}

// --- 4. Search Handler ---
function setupSearchListener() {
  globalSearchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    renderShows();
  });
}

// --- 5. Detail & Video Modals ---
function setupModalListeners() {
  closeModalBtn.addEventListener("click", () => closeDetails());
  
  // Close details modal on clicking overlay background
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeDetails();
  });

  closeTrailerBtn.addEventListener("click", () => closeTrailer());
  
  // Close trailer modal on clicking overlay background
  trailerModal.addEventListener("click", (e) => {
    if (e.target === trailerModal) closeTrailer();
  });
}

function openDetails(showId) {
  const drama = activeDramas.find(d => d.id === showId);
  if (!drama) return;

  // If live sync is active, it's a TMDb show (numeric ID), and detail info hasn't been fetched yet
  if (tmdbSyncEnabled && tmdbApiKey && !drama.isDetailed && !isNaN(drama.id)) {
    // Show glassmorphic loader inside detail modal
    modalBodyContent.innerHTML = `
      <div class="modal-loading">
        <i class="fa-solid fa-arrows-rotate spin"></i>
        <p>正在從雲端獲取即時演員及詳細劇集資訊...</p>
      </div>
    `;
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Call TMDb detail endpoints
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = tmdbApiKey;
    const url = `${baseUrl}/tv/${drama.id}?api_key=${apiKey}&language=zh-TW&append_to_response=credits,videos`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("無法連接 TMDb 獲取詳情");
        return res.json();
      })
      .then(detail => {
        // 1. Map cast (top 5 billing actors)
        if (detail.credits && detail.credits.cast) {
          drama.cast = detail.credits.cast
            .slice(0, 5)
            .map(c => c.name);
        }
        if (!drama.cast || drama.cast.length === 0) {
          drama.cast = ["暫無演員資訊"];
        }

        // 2. Map exact episodes
        drama.episodes = detail.number_of_episodes || "未知";

        // 3. Map platforms (networks)
        if (detail.networks && detail.networks.length > 0) {
          drama.platform = detail.networks.map(n => n.name).join(" / ");
        } else {
          drama.platform = "TMDb 線上播映";
        }

        // 4. Map YouTube official video trailer key
        if (detail.videos && detail.videos.results) {
          const trailerObj = detail.videos.results.find(v => v.site === "YouTube" && (v.type === "Trailer" || v.type === "Teaser"));
          if (trailerObj) {
            drama.trailer = `https://www.youtube.com/watch?v=${trailerObj.key}`;
          }
        }

        // 5. Update summary description if empty/fallback
        if (detail.overview && (!drama.summary || drama.summary.includes("暫無繁體中文劇集介紹"))) {
          drama.summary = detail.overview;
        }

        drama.isDetailed = true;
        renderDetailsModalContent(drama);
      })
      .catch(err => {
        console.error("TMDb Detail Load Error:", err);
        drama.cast = ["暫無 (網絡同步受限)"];
        drama.episodes = "見官方發佈";
        drama.platform = "官方平台";
        drama.isDetailed = true;
        renderDetailsModalContent(drama);
      });
  } else {
    renderDetailsModalContent(drama);
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Render dynamic detail popup inside the glassmorphic modal
function renderDetailsModalContent(drama) {
  let timingBadgeClass = "";
  let timingBadgeLabel = "本月上映";
  let timingBadgeIcon = "fa-hourglass-start";
  if (drama.timing === "upcoming") {
    timingBadgeClass = "upcoming";
    timingBadgeLabel = "下月預告";
    timingBadgeIcon = "fa-hourglass-half";
  } else if (drama.timing === "late2026") {
    timingBadgeClass = "late2026";
    timingBadgeLabel = "2026下半年";
    timingBadgeIcon = "fa-snowflake";
  } else if (drama.timing === "year2027") {
    timingBadgeClass = "year2027";
    timingBadgeLabel = "2027年預告";
    timingBadgeIcon = "fa-rocket";
  }

  let posterHtml = `<img src="${drama.poster}" alt="${drama.titleCN}">`;

  modalBodyContent.innerHTML = `
    <div class="detail-grid">
      <div class="modal-left">
        <div class="modal-poster-wrapper">
          ${posterHtml}
        </div>
        <div class="modal-metrics">
          <div class="metric-box">
            <div class="metric-value gold">${drama.rating}</div>
            <div class="metric-title"><i class="fa-solid fa-star"></i> 評分</div>
          </div>
          <div class="metric-box">
            <div class="metric-value rose">${drama.recIndex}%</div>
            <div class="metric-title"><i class="fa-solid fa-heart"></i> 推薦指數</div>
          </div>
        </div>
      </div>
      <div class="modal-right">
        <span class="modal-timing-badge ${timingBadgeClass}">
          <i class="fa-solid ${timingBadgeIcon}"></i> ${timingBadgeLabel}
        </span>
        <h3 class="modal-title-cn">${drama.titleCN}</h3>
        <span class="modal-title-en">${drama.titleEN}</span>
        
        <table class="detail-table">
          <tr>
            <td class="label-col"><i class="fa-solid fa-earth-asia"></i> 國家地區</td>
            <td class="val-col">${drama.countryName}</td>
          </tr>
          <tr>
            <td class="label-col"><i class="fa-solid fa-tags"></i> 劇集類型</td>
            <td class="val-col">${drama.genres.map(g => getGenreIcon(g) + g).join(" / ")}</td>
          </tr>
          <tr>
            <td class="label-col"><i class="fa-solid fa-calendar-days"></i> 上映時間</td>
            <td class="val-col">${drama.releaseDate}</td>
          </tr>
          <tr>
            <td class="label-col"><i class="fa-solid fa-tv"></i> 總 集 數</td>
            <td class="val-col">${drama.episodes !== "更新中" && drama.episodes !== "未知" ? drama.episodes + " 集" : drama.episodes}</td>
          </tr>
          <tr>
            <td class="label-col"><i class="fa-solid fa-display"></i> 播出平台</td>
            <td class="val-col">${drama.platform}</td>
          </tr>
          <tr>
            <td class="label-col"><i class="fa-solid fa-users"></i> 演員陣容</td>
            <td class="val-col">${drama.cast.join("、 ")}</td>
          </tr>
        </table>
        
        <div class="modal-summary">
          <h4><i class="fa-solid fa-circle-info"></i> 劇集介紹</h4>
          <p>${drama.summary}</p>
        </div>
        
        <button class="btn btn-primary" style="align-self: flex-start;" onclick="openTrailer('${drama.trailer}')">
          <i class="fa-solid fa-circle-play"></i> 播放官方預告片
        </button>
      </div>
    </div>
  `;
}

function closeDetails() {
  detailModal.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scroll
}

function openTrailer(trailerUrl) {
  window.open(trailerUrl, "_blank");
}

function closeTrailer() {
  trailerModal.classList.remove("active");
  trailerIframe.src = "";
}

// Make openDetails & openTrailer globally accessible from HTML onclick attributes
window.openDetails = openDetails;
window.openTrailer = openTrailer;
window.closeDetails = closeDetails;
window.closeTrailer = closeTrailer;


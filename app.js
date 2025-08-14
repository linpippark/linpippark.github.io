// 基礎資料：可擴充
const VOCABULARY = [
  // 基本問候
  { es: "hola", en: "hello", category: "greetings", hint: "常見問候" },
  { es: "adiós", en: "goodbye", category: "greetings", hint: "告別語" },
  { es: "por favor", en: "please", category: "greetings", hint: "禮貌用語" },
  { es: "gracias", en: "thank you", category: "greetings", hint: "表達感謝" },
  { es: "de nada", en: "you're welcome", category: "greetings", hint: "回應感謝" },
  { es: "perdón", en: "sorry", category: "greetings", hint: "道歉" },

  // 食物
  { es: "agua", en: "water", category: "food", hint: "最基本的飲品" },
  { es: "pan", en: "bread", category: "food", hint: "常見主食" },
  { es: "queso", en: "cheese", category: "food", hint: "老鼠最愛" },
  { es: "leche", en: "milk", category: "food", hint: "白色飲品" },
  { es: "manzana", en: "apple", category: "food", hint: "一日一個醫生遠離我" },

  // 顏色
  { es: "rojo", en: "red", category: "colors", hint: "顏色之一" },
  { es: "azul", en: "blue", category: "colors", hint: "天空的顏色" },
  { es: "verde", en: "green", category: "colors", hint: "草地顏色" },
  { es: "amarillo", en: "yellow", category: "colors", hint: "向日葵顏色" },
  { es: "negro", en: "black", category: "colors", hint: "夜空顏色" },

  // 日常會話
  { es: "sí", en: "yes", category: "daily", hint: "肯定回應" },
  { es: "no", en: "no", category: "daily", hint: "否定回應" },
  { es: "tal vez", en: "maybe", category: "daily", hint: "介於是與否之間" },
  { es: "¿Cómo estás?", en: "how are you?", category: "daily", hint: "關心對方近況" },
  { es: "bien", en: "fine/good", category: "daily", hint: "感覺不錯" },
  { es: "más o menos", en: "so-so", category: "daily", hint: "一般般" },
  { es: "¿Dónde está el baño?", en: "where is the bathroom?", category: "daily", hint: "旅遊必備" },
  { es: "no entiendo", en: "I don't understand", category: "daily", hint: "表達聽不懂" },
  { es: "¿Cuánto cuesta?", en: "how much is it?", category: "daily", hint: "詢問價格" },
  { es: "me gusta", en: "I like it", category: "daily", hint: "表達喜好" },
  // ====== 新增 500 筆詞條（每類 20 筆，共 25 類）======
  // 常用動詞 verbs_common (20)
  { es: "ser", en: "to be", category: "verbs_common" },
  { es: "estar", en: "to be (state)", category: "verbs_common" },
  { es: "tener", en: "to have", category: "verbs_common" },
  { es: "hacer", en: "to do/make", category: "verbs_common" },
  { es: "poder", en: "to be able to", category: "verbs_common" },
  { es: "decir", en: "to say", category: "verbs_common" },
  { es: "ir", en: "to go", category: "verbs_common" },
  { es: "ver", en: "to see", category: "verbs_common" },
  { es: "dar", en: "to give", category: "verbs_common" },
  { es: "saber", en: "to know", category: "verbs_common" },
  { es: "querer", en: "to want", category: "verbs_common" },
  { es: "llegar", en: "to arrive", category: "verbs_common" },
  { es: "pasar", en: "to happen/pass", category: "verbs_common" },
  { es: "deber", en: "must/should", category: "verbs_common" },
  { es: "poner", en: "to put", category: "verbs_common" },
  { es: "parecer", en: "to seem", category: "verbs_common" },
  { es: "quedar", en: "to stay/remain", category: "verbs_common" },
  { es: "creer", en: "to believe", category: "verbs_common" },
  { es: "hablar", en: "to speak", category: "verbs_common" },
  { es: "llevar", en: "to carry/wear", category: "verbs_common" },

  // 動物 animals (20)
  { es: "perro", en: "dog", category: "animals" },
  { es: "gato", en: "cat", category: "animals" },
  { es: "pájaro", en: "bird", category: "animals" },
  { es: "pez", en: "fish", category: "animals" },
  { es: "vaca", en: "cow", category: "animals" },
  { es: "cerdo", en: "pig", category: "animals" },
  { es: "caballo", en: "horse", category: "animals" },
  { es: "oveja", en: "sheep", category: "animals" },
  { es: "cabra", en: "goat", category: "animals" },
  { es: "pollo", en: "chicken", category: "animals" },
  { es: "pato", en: "duck", category: "animals" },
  { es: "león", en: "lion", category: "animals" },
  { es: "tigre", en: "tiger", category: "animals" },
  { es: "oso", en: "bear", category: "animals" },
  { es: "mono", en: "monkey", category: "animals" },
  { es: "elefante", en: "elephant", category: "animals" },
  { es: "jirafa", en: "giraffe", category: "animals" },
  { es: "lobo", en: "wolf", category: "animals" },
  { es: "zorro", en: "fox", category: "animals" },
  { es: "conejo", en: "rabbit", category: "animals" },

  // 身體 body (20)
  { es: "cabeza", en: "head", category: "body" },
  { es: "ojo", en: "eye", category: "body" },
  { es: "oreja", en: "ear", category: "body" },
  { es: "nariz", en: "nose", category: "body" },
  { es: "boca", en: "mouth", category: "body" },
  { es: "diente", en: "tooth", category: "body" },
  { es: "lengua", en: "tongue", category: "body" },
  { es: "cuello", en: "neck", category: "body" },
  { es: "hombro", en: "shoulder", category: "body" },
  { es: "brazo", en: "arm", category: "body" },
  { es: "mano", en: "hand", category: "body" },
  { es: "dedo", en: "finger", category: "body" },
  { es: "pecho", en: "chest", category: "body" },
  { es: "espalda", en: "back", category: "body" },
  { es: "estómago", en: "stomach", category: "body" },
  { es: "pierna", en: "leg", category: "body" },
  { es: "rodilla", en: "knee", category: "body" },
  { es: "tobillo", en: "ankle", category: "body" },
  { es: "pie", en: "foot", category: "body" },
  { es: "corazón", en: "heart", category: "body" },

  // 衣物 clothing (20)
  { es: "camisa", en: "shirt", category: "clothing" },
  { es: "camiseta", en: "t-shirt", category: "clothing" },
  { es: "pantalón", en: "pants", category: "clothing" },
  { es: "falda", en: "skirt", category: "clothing" },
  { es: "vestido", en: "dress", category: "clothing" },
  { es: "chaqueta", en: "jacket", category: "clothing" },
  { es: "abrigo", en: "coat", category: "clothing" },
  { es: "suéter", en: "sweater", category: "clothing" },
  { es: "calcetín", en: "sock", category: "clothing" },
  { es: "zapato", en: "shoe", category: "clothing" },
  { es: "bota", en: "boot", category: "clothing" },
  { es: "cinturón", en: "belt", category: "clothing" },
  { es: "sombrero", en: "hat", category: "clothing" },
  { es: "gorra", en: "cap", category: "clothing" },
  { es: "bufanda", en: "scarf", category: "clothing" },
  { es: "guante", en: "glove", category: "clothing" },
  { es: "corbata", en: "tie", category: "clothing" },
  { es: "pijama", en: "pajamas", category: "clothing" },
  { es: "traje", en: "suit", category: "clothing" },
  { es: "bolso", en: "bag", category: "clothing" },

  // 家庭 family (20)
  { es: "madre", en: "mother", category: "family" },
  { es: "padre", en: "father", category: "family" },
  { es: "hijo", en: "son", category: "family" },
  { es: "hija", en: "daughter", category: "family" },
  { es: "hermano", en: "brother", category: "family" },
  { es: "hermana", en: "sister", category: "family" },
  { es: "abuelo", en: "grandfather", category: "family" },
  { es: "abuela", en: "grandmother", category: "family" },
  { es: "tío", en: "uncle", category: "family" },
  { es: "tía", en: "aunt", category: "family" },
  { es: "primo", en: "cousin (m)", category: "family" },
  { es: "prima", en: "cousin (f)", category: "family" },
  { es: "esposo", en: "husband", category: "family" },
  { es: "esposa", en: "wife", category: "family" },
  { es: "suegro", en: "father-in-law", category: "family" },
  { es: "suegra", en: "mother-in-law", category: "family" },
  { es: "yerno", en: "son-in-law", category: "family" },
  { es: "nuera", en: "daughter-in-law", category: "family" },
  { es: "cuñado", en: "brother-in-law", category: "family" },
  { es: "cuñada", en: "sister-in-law", category: "family" },

  // 數字 numbers (20)
  { es: "uno", en: "one", category: "numbers" },
  { es: "dos", en: "two", category: "numbers" },
  { es: "tres", en: "three", category: "numbers" },
  { es: "cuatro", en: "four", category: "numbers" },
  { es: "cinco", en: "five", category: "numbers" },
  { es: "seis", en: "six", category: "numbers" },
  { es: "siete", en: "seven", category: "numbers" },
  { es: "ocho", en: "eight", category: "numbers" },
  { es: "nueve", en: "nine", category: "numbers" },
  { es: "diez", en: "ten", category: "numbers" },
  { es: "once", en: "eleven", category: "numbers" },
  { es: "doce", en: "twelve", category: "numbers" },
  { es: "trece", en: "thirteen", category: "numbers" },
  { es: "catorce", en: "fourteen", category: "numbers" },
  { es: "quince", en: "fifteen", category: "numbers" },
  { es: "dieciséis", en: "sixteen", category: "numbers" },
  { es: "diecisiete", en: "seventeen", category: "numbers" },
  { es: "dieciocho", en: "eighteen", category: "numbers" },
  { es: "diecinueve", en: "nineteen", category: "numbers" },
  { es: "veinte", en: "twenty", category: "numbers" },

  // 時間 time (20)
  { es: "hoy", en: "today", category: "time" },
  { es: "ayer", en: "yesterday", category: "time" },
  { es: "mañana", en: "tomorrow", category: "time" },
  { es: "ahora", en: "now", category: "time" },
  { es: "temprano", en: "early", category: "time" },
  { es: "tarde", en: "late/afternoon", category: "time" },
  { es: "noche", en: "night", category: "time" },
  { es: "mediodía", en: "noon", category: "time" },
  { es: "medianoche", en: "midnight", category: "time" },
  { es: "minuto", en: "minute", category: "time" },
  { es: "hora", en: "hour", category: "time" },
  { es: "día", en: "day", category: "time" },
  { es: "semana", en: "week", category: "time" },
  { es: "mes", en: "month", category: "time" },
  { es: "año", en: "year", category: "time" },
  { es: "lunes", en: "Monday", category: "time" },
  { es: "martes", en: "Tuesday", category: "time" },
  { es: "miércoles", en: "Wednesday", category: "time" },
  { es: "jueves", en: "Thursday", category: "time" },
  { es: "viernes", en: "Friday", category: "time" },

  // 旅遊 travel (20)
  { es: "viaje", en: "trip", category: "travel" },
  { es: "turista", en: "tourist", category: "travel" },
  { es: "hotel", en: "hotel", category: "travel" },
  { es: "reserva", en: "reservation", category: "travel" },
  { es: "billete", en: "ticket", category: "travel" },
  { es: "pasaporte", en: "passport", category: "travel" },
  { es: "maleta", en: "suitcase", category: "travel" },
  { es: "aeropuerto", en: "airport", category: "travel" },
  { es: "vuelo", en: "flight", category: "travel" },
  { es: "llegada", en: "arrival", category: "travel" },
  { es: "salida", en: "departure", category: "travel" },
  { es: "mapa", en: "map", category: "travel" },
  { es: "guía", en: "guide", category: "travel" },
  { es: "excursión", en: "tour/excursion", category: "travel" },
  { es: "playa", en: "beach", category: "travel" },
  { es: "montaña", en: "mountain", category: "travel" },
  { es: "ciudad", en: "city", category: "travel" },
  { es: "campo", en: "countryside", category: "travel" },
  { es: "museo", en: "museum", category: "travel" },
  { es: "restaurante", en: "restaurant", category: "travel" },

  // 旅遊會話 travel_convo (20)
  { es: "¿Dónde está la estación de tren?", en: "Where is the train station?", category: "travel_convo", hint: "問路：火車站在哪裡" },
  { es: "¿Dónde está la parada de autobús?", en: "Where is the bus stop?", category: "travel_convo", hint: "問路：公車站在哪裡" },
  { es: "Quisiera reservar una habitación", en: "I'd like to book a room", category: "travel_convo", hint: "旅館訂房" },
  { es: "Tengo una reserva", en: "I have a reservation", category: "travel_convo", hint: "出示訂位" },
  { es: "¿Cuánto cuesta por noche?", en: "How much is it per night?", category: "travel_convo", hint: "詢問房價" },
  { es: "¿Incluye el desayuno?", en: "Is breakfast included?", category: "travel_convo", hint: "是否含早餐" },
  { es: "¿A qué hora es el check-in?", en: "What time is check-in?", category: "travel_convo", hint: "入住時間" },
  { es: "¿A qué hora sale el tren?", en: "What time does the train leave?", category: "travel_convo", hint: "班次時間" },
  { es: "¿Cuánto cuesta el billete a Madrid?", en: "How much is the ticket to Madrid?", category: "travel_convo", hint: "票價詢問" },
  { es: "¿Puede ayudarme?", en: "Can you help me?", category: "travel_convo", hint: "請求協助" },
  { es: "Estoy perdido", en: "I'm lost", category: "travel_convo", hint: "迷路求助" },
  { es: "Necesito un taxi", en: "I need a taxi", category: "travel_convo", hint: "叫計程車" },
  { es: "¿Aceptan tarjeta?", en: "Do you accept card?", category: "travel_convo", hint: "刷卡付款" },
  { es: "¿Dónde puedo cambiar dinero?", en: "Where can I exchange money?", category: "travel_convo", hint: "換匯地點" },
  { es: "¿Hay wifi gratis?", en: "Is there free wifi?", category: "travel_convo", hint: "Wi‑Fi 詢問" },
  { es: "¿Puede hablar más despacio?", en: "Can you speak more slowly?", category: "travel_convo", hint: "請放慢速度" },
  { es: "No hablo mucho español", en: "I don't speak much Spanish", category: "travel_convo", hint: "語言能力" },
  { es: "¿Dónde está la oficina de turismo?", en: "Where is the tourist office?", category: "travel_convo", hint: "觀光資訊" },
  { es: "¿Está cerca o lejos?", en: "Is it near or far?", category: "travel_convo", hint: "距離詢問" },
  { es: "Gracias por su ayuda", en: "Thank you for your help", category: "travel_convo", hint: "致謝" },

  // 交通 transport (20)
  { es: "coche", en: "car", category: "transport" },
  { es: "autobús", en: "bus", category: "transport" },
  { es: "tren", en: "train", category: "transport" },
  { es: "metro", en: "subway", category: "transport" },
  { es: "tranvía", en: "tram", category: "transport" },
  { es: "taxi", en: "taxi", category: "transport" },
  { es: "avión", en: "plane", category: "transport" },
  { es: "barco", en: "boat", category: "transport" },
  { es: "bicicleta", en: "bicycle", category: "transport" },
  { es: "motocicleta", en: "motorcycle", category: "transport" },
  { es: "camión", en: "truck", category: "transport" },
  { es: "carretera", en: "highway", category: "transport" },
  { es: "calle", en: "street", category: "transport" },
  { es: "puente", en: "bridge", category: "transport" },
  { es: "túnel", en: "tunnel", category: "transport" },
  { es: "estación", en: "station", category: "transport" },
  { es: "parada", en: "stop", category: "transport" },
  { es: "gasolina", en: "gasoline", category: "transport" },
  { es: "volante", en: "steering wheel", category: "transport" },
  { es: "freno", en: "brake", category: "transport" },

  // 學校 school (20)
  { es: "escuela", en: "school", category: "school" },
  { es: "colegio", en: "high school", category: "school" },
  { es: "universidad", en: "university", category: "school" },
  { es: "clase", en: "class", category: "school" },
  { es: "lección", en: "lesson", category: "school" },
  { es: "profesor", en: "teacher (m)", category: "school" },
  { es: "profesora", en: "teacher (f)", category: "school" },
  { es: "estudiante", en: "student", category: "school" },
  { es: "cuaderno", en: "notebook", category: "school" },
  { es: "libro", en: "book", category: "school" },
  { es: "lápiz", en: "pencil", category: "school" },
  { es: "bolígrafo", en: "pen", category: "school" },
  { es: "borrador", en: "eraser", category: "school" },
  { es: "regla", en: "ruler", category: "school" },
  { es: "mochila", en: "backpack", category: "school" },
  { es: "tarea", en: "homework", category: "school" },
  { es: "examen", en: "exam", category: "school" },
  { es: "nota", en: "grade", category: "school" },
  { es: "pizarra", en: "board", category: "school" },
  { es: "laboratorio", en: "laboratory", category: "school" },

  // 工作 work (20)
  { es: "trabajo", en: "work", category: "work" },
  { es: "oficina", en: "office", category: "work" },
  { es: "jefe", en: "boss (m)", category: "work" },
  { es: "jefa", en: "boss (f)", category: "work" },
  { es: "empleado", en: "employee", category: "work" },
  { es: "salario", en: "salary", category: "work" },
  { es: "reunión", en: "meeting", category: "work" },
  { es: "proyecto", en: "project", category: "work" },
  { es: "informe", en: "report", category: "work" },
  { es: "contrato", en: "contract", category: "work" },
  { es: "horario", en: "schedule", category: "work" },
  { es: "descanso", en: "break", category: "work" },
  { es: "vacaciones", en: "vacation", category: "work" },
  { es: "objetivo", en: "goal", category: "work" },
  { es: "cliente", en: "client", category: "work" },
  { es: "proveedor", en: "supplier", category: "work" },
  { es: "factura", en: "invoice", category: "work" },
  { es: "envío", en: "shipment", category: "work" },
  { es: "presupuesto", en: "budget", category: "work" },
  { es: "ascenso", en: "promotion", category: "work" },

  // 科技 technology (20)
  { es: "ordenador", en: "computer", category: "technology" },
  { es: "computadora", en: "computer", category: "technology" },
  { es: "portátil", en: "laptop", category: "technology" },
  { es: "teclado", en: "keyboard", category: "technology" },
  { es: "ratón", en: "mouse", category: "technology" },
  { es: "pantalla", en: "screen", category: "technology" },
  { es: "impresora", en: "printer", category: "technology" },
  { es: "internet", en: "internet", category: "technology" },
  { es: "correo", en: "email", category: "technology" },
  { es: "archivo", en: "file", category: "technology" },
  { es: "carpeta", en: "folder", category: "technology" },
  { es: "programa", en: "program", category: "technology" },
  { es: "aplicación", en: "app", category: "technology" },
  { es: "contraseña", en: "password", category: "technology" },
  { es: "nube", en: "cloud", category: "technology" },
  { es: "servidor", en: "server", category: "technology" },
  { es: "base de datos", en: "database", category: "technology" },
  { es: "código", en: "code", category: "technology" },
  { es: "sitio web", en: "website", category: "technology" },
  { es: "actualización", en: "update", category: "technology" },

  // 自然 nature (20)
  { es: "árbol", en: "tree", category: "nature" },
  { es: "flor", en: "flower", category: "nature" },
  { es: "hoja", en: "leaf", category: "nature" },
  { es: "raíz", en: "root", category: "nature" },
  { es: "tronco", en: "trunk", category: "nature" },
  { es: "bosque", en: "forest", category: "nature" },
  { es: "río", en: "river", category: "nature" },
  { es: "lago", en: "lake", category: "nature" },
  { es: "mar", en: "sea", category: "nature" },
  { es: "montaña", en: "mountain", category: "nature" },
  { es: "valle", en: "valley", category: "nature" },
  { es: "desierto", en: "desert", category: "nature" },
  { es: "isla", en: "island", category: "nature" },
  { es: "playa", en: "beach", category: "nature" },
  { es: "cielo", en: "sky", category: "nature" },
  { es: "nube", en: "cloud", category: "nature" },
  { es: "lluvia", en: "rain", category: "nature" },
  { es: "nieve", en: "snow", category: "nature" },
  { es: "viento", en: "wind", category: "nature" },
  { es: "sol", en: "sun", category: "nature" },

  // 天氣 weather (20)
  { es: "tiempo", en: "weather", category: "weather" },
  { es: "clima", en: "climate", category: "weather" },
  { es: "temperatura", en: "temperature", category: "weather" },
  { es: "calor", en: "heat", category: "weather" },
  { es: "frío", en: "cold", category: "weather" },
  { es: "nublado", en: "cloudy", category: "weather" },
  { es: "soleado", en: "sunny", category: "weather" },
  { es: "lluvioso", en: "rainy", category: "weather" },
  { es: "ventoso", en: "windy", category: "weather" },
  { es: "tormenta", en: "storm", category: "weather" },
  { es: "trueno", en: "thunder", category: "weather" },
  { es: "relámpago", en: "lightning", category: "weather" },
  { es: "niebla", en: "fog", category: "weather" },
  { es: "humedad", en: "humidity", category: "weather" },
  { es: "sequía", en: "drought", category: "weather" },
  { es: "granizo", en: "hail", category: "weather" },
  { es: "pronóstico", en: "forecast", category: "weather" },
  { es: "arcoíris", en: "rainbow", category: "weather" },
  { es: "chubasco", en: "shower", category: "weather" },
  { es: "huracán", en: "hurricane", category: "weather" },

  // 城市 city (20)
  { es: "ciudad", en: "city", category: "city" },
  { es: "barrio", en: "neighborhood", category: "city" },
  { es: "calle", en: "street", category: "city" },
  { es: "avenida", en: "avenue", category: "city" },
  { es: "plaza", en: "square", category: "city" },
  { es: "parque", en: "park", category: "city" },
  { es: "mercado", en: "market", category: "city" },
  { es: "tienda", en: "shop", category: "city" },
  { es: "supermercado", en: "supermarket", category: "city" },
  { es: "banco", en: "bank", category: "city" },
  { es: "hospital", en: "hospital", category: "city" },
  { es: "clínica", en: "clinic", category: "city" },
  { es: "farmacia", en: "pharmacy", category: "city" },
  { es: "escuela", en: "school", category: "city" },
  { es: "biblioteca", en: "library", category: "city" },
  { es: "teatro", en: "theater", category: "city" },
  { es: "cine", en: "cinema", category: "city" },
  { es: "restaurante", en: "restaurant", category: "city" },
  { es: "hotel", en: "hotel", category: "city" },
  { es: "estación", en: "station", category: "city" },

  // 家居 house (20)
  { es: "casa", en: "house", category: "house" },
  { es: "apartamento", en: "apartment", category: "house" },
  { es: "sala", en: "living room", category: "house" },
  { es: "comedor", en: "dining room", category: "house" },
  { es: "cocina", en: "kitchen", category: "house" },
  { es: "baño", en: "bathroom", category: "house" },
  { es: "dormitorio", en: "bedroom", category: "house" },
  { es: "pasillo", en: "hallway", category: "house" },
  { es: "jardín", en: "garden", category: "house" },
  { es: "garaje", en: "garage", category: "house" },
  { es: "balcón", en: "balcony", category: "house" },
  { es: "terraza", en: "terrace", category: "house" },
  { es: "techo", en: "roof/ceiling", category: "house" },
  { es: "pared", en: "wall", category: "house" },
  { es: "ventana", en: "window", category: "house" },
  { es: "puerta", en: "door", category: "house" },
  { es: "escalera", en: "stairs", category: "house" },
  { es: "sótano", en: "basement", category: "house" },
  { es: "ático", en: "attic", category: "house" },
  { es: "patio", en: "yard", category: "house" },

  // 廚房 kitchen (20)
  { es: "olla", en: "pot", category: "kitchen" },
  { es: "sartén", en: "pan", category: "kitchen" },
  { es: "cuchillo", en: "knife", category: "kitchen" },
  { es: "tenedor", en: "fork", category: "kitchen" },
  { es: "cuchara", en: "spoon", category: "kitchen" },
  { es: "plato", en: "plate", category: "kitchen" },
  { es: "vaso", en: "glass", category: "kitchen" },
  { es: "taza", en: "cup", category: "kitchen" },
  { es: "tetera", en: "teapot", category: "kitchen" },
  { es: "microondas", en: "microwave", category: "kitchen" },
  { es: "horno", en: "oven", category: "kitchen" },
  { es: "nevera", en: "fridge", category: "kitchen" },
  { es: "congelador", en: "freezer", category: "kitchen" },
  { es: "fregadero", en: "sink", category: "kitchen" },
  { es: "encimera", en: "countertop", category: "kitchen" },
  { es: "tabla", en: "board", category: "kitchen" },
  { es: "batidora", en: "blender", category: "kitchen" },
  { es: "tostadora", en: "toaster", category: "kitchen" },
  { es: "especias", en: "spices", category: "kitchen" },
  { es: "receta", en: "recipe", category: "kitchen" },

  // 浴室 bathroom (20)
  { es: "ducha", en: "shower", category: "bathroom" },
  { es: "bañera", en: "bathtub", category: "bathroom" },
  { es: "lavabo", en: "sink", category: "bathroom" },
  { es: "inodoro", en: "toilet", category: "bathroom" },
  { es: "toalla", en: "towel", category: "bathroom" },
  { es: "jabón", en: "soap", category: "bathroom" },
  { es: "champú", en: "shampoo", category: "bathroom" },
  { es: "cepillo", en: "brush", category: "bathroom" },
  { es: "pasta", en: "toothpaste", category: "bathroom" },
  { es: "espejo", en: "mirror", category: "bathroom" },
  { es: "peine", en: "comb", category: "bathroom" },
  { es: "secador", en: "dryer", category: "bathroom" },
  { es: "papel higiénico", en: "toilet paper", category: "bathroom" },
  { es: "desodorante", en: "deodorant", category: "bathroom" },
  { es: "crema", en: "cream", category: "bathroom" },
  { es: "afeitadora", en: "razor", category: "bathroom" },
  { es: "cepillo de baño", en: "bath brush", category: "bathroom" },
  { es: "cortina", en: "curtain", category: "bathroom" },
  { es: "tapete", en: "mat", category: "bathroom" },
  { es: "grifo", en: "faucet", category: "bathroom" },

  // 情緒 emotions (20)
  { es: "feliz", en: "happy", category: "emotions" },
  { es: "triste", en: "sad", category: "emotions" },
  { es: "enojado", en: "angry", category: "emotions" },
  { es: "sorprendido", en: "surprised", category: "emotions" },
  { es: "asustado", en: "scared", category: "emotions" },
  { es: "nervioso", en: "nervous", category: "emotions" },
  { es: "tranquilo", en: "calm", category: "emotions" },
  { es: "cansado", en: "tired", category: "emotions" },
  { es: "aburrido", en: "bored", category: "emotions" },
  { es: "emocionado", en: "excited", category: "emotions" },
  { es: "celoso", en: "jealous", category: "emotions" },
  { es: "orgulloso", en: "proud", category: "emotions" },
  { es: "avergonzado", en: "embarrassed", category: "emotions" },
  { es: "confundido", en: "confused", category: "emotions" },
  { es: "satisfecho", en: "satisfied", category: "emotions" },
  { es: "frustrado", en: "frustrated", category: "emotions" },
  { es: "esperanzado", en: "hopeful", category: "emotions" },
  { es: "ansioso", en: "anxious", category: "emotions" },
  { es: "relajado", en: "relaxed", category: "emotions" },
  { es: "enamorado", en: "in love", category: "emotions" },

  // 形容詞 adjectives (20)
  { es: "grande", en: "big", category: "adjectives" },
  { es: "pequeño", en: "small", category: "adjectives" },
  { es: "largo", en: "long", category: "adjectives" },
  { es: "corto", en: "short", category: "adjectives" },
  { es: "alto", en: "tall/high", category: "adjectives" },
  { es: "bajo", en: "short/low", category: "adjectives" },
  { es: "rápido", en: "fast", category: "adjectives" },
  { es: "lento", en: "slow", category: "adjectives" },
  { es: "fuerte", en: "strong", category: "adjectives" },
  { es: "débil", en: "weak", category: "adjectives" },
  { es: "viejo", en: "old", category: "adjectives" },
  { es: "joven", en: "young", category: "adjectives" },
  { es: "nuevo", en: "new", category: "adjectives" },
  { es: "moderno", en: "modern", category: "adjectives" },
  { es: "antiguo", en: "ancient/old", category: "adjectives" },
  { es: "caro", en: "expensive", category: "adjectives" },
  { es: "barato", en: "cheap", category: "adjectives" },
  { es: "fácil", en: "easy", category: "adjectives" },
  { es: "difícil", en: "difficult", category: "adjectives" },
  { es: "limpio", en: "clean", category: "adjectives" },

  // 副詞 adverbs (20)
  { es: "sucio", en: "dirty", category: "adjectives" },
  { es: "siempre", en: "always", category: "adverbs" },
  { es: "nunca", en: "never", category: "adverbs" },
  { es: "a veces", en: "sometimes", category: "adverbs" },
  { es: "también", en: "also", category: "adverbs" },
  { es: "tampoco", en: "neither", category: "adverbs" },
  { es: "aquí", en: "here", category: "adverbs" },
  { es: "allí", en: "there", category: "adverbs" },
  { es: "allá", en: "over there", category: "adverbs" },
  { es: "encima", en: "on top", category: "adverbs" },
  { es: "debajo", en: "under", category: "adverbs" },
  { es: "dentro", en: "inside", category: "adverbs" },
  { es: "fuera", en: "outside", category: "adverbs" },
  { es: "pronto", en: "soon", category: "adverbs" },
  { es: "tarde", en: "late", category: "adverbs" },
  { es: "entonces", en: "then", category: "adverbs" },
  { es: "luego", en: "later", category: "adverbs" },
  { es: "hoy", en: "today", category: "adverbs" },
  { es: "mañana", en: "tomorrow", category: "adverbs" },
  { es: "ayer", en: "yesterday", category: "adverbs" },

  // 介系詞 prepositions (20)
  { es: "a", en: "to/at", category: "prepositions" },
  { es: "de", en: "of/from", category: "prepositions" },
  { es: "en", en: "in/on", category: "prepositions" },
  { es: "con", en: "with", category: "prepositions" },
  { es: "sin", en: "without", category: "prepositions" },
  { es: "por", en: "for/by", category: "prepositions" },
  { es: "para", en: "for/to", category: "prepositions" },
  { es: "sobre", en: "about/on", category: "prepositions" },
  { es: "entre", en: "between", category: "prepositions" },
  { es: "hasta", en: "until", category: "prepositions" },
  { es: "desde", en: "from/since", category: "prepositions" },
  { es: "contra", en: "against", category: "prepositions" },
  { es: "hacia", en: "toward", category: "prepositions" },
  { es: "según", en: "according to", category: "prepositions" },
  { es: "tras", en: "after/behind", category: "prepositions" },
  { es: "durante", en: "during", category: "prepositions" },
  { es: "mediante", en: "by means of", category: "prepositions" },
  { es: "excepto", en: "except", category: "prepositions" },
  { es: "salvo", en: "except", category: "prepositions" },
  { es: "ante", en: "before", category: "prepositions" },

  // 職業 professions (20)
  { es: "médico", en: "doctor", category: "professions" },
  { es: "enfermero", en: "nurse", category: "professions" },
  { es: "profesor", en: "teacher", category: "professions" },
  { es: "ingeniero", en: "engineer", category: "professions" },
  { es: "abogado", en: "lawyer", category: "professions" },
  { es: "arquitecto", en: "architect", category: "professions" },
  { es: "cocinero", en: "cook", category: "professions" },
  { es: "camarero", en: "waiter", category: "professions" },
  { es: "vendedor", en: "salesperson", category: "professions" },
  { es: "conductor", en: "driver", category: "professions" },
  { es: "agricultor", en: "farmer", category: "professions" },
  { es: "bombero", en: "firefighter", category: "professions" },
  { es: "policía", en: "police officer", category: "professions" },
  { es: "músico", en: "musician", category: "professions" },
  { es: "actor", en: "actor", category: "professions" },
  { es: "escritora", en: "writer (f)", category: "professions" },
  { es: "periodista", en: "journalist", category: "professions" },
  { es: "dentista", en: "dentist", category: "professions" },
  { es: "pintor", en: "painter", category: "professions" },
  { es: "diseñador", en: "designer", category: "professions" },

  // 運動 sports (20)
  { es: "fútbol", en: "soccer", category: "sports" },
  { es: "baloncesto", en: "basketball", category: "sports" },
  { es: "tenis", en: "tennis", category: "sports" },
  { es: "voleibol", en: "volleyball", category: "sports" },
  { es: "béisbol", en: "baseball", category: "sports" },
  { es: "golf", en: "golf", category: "sports" },
  { es: "natación", en: "swimming", category: "sports" },
  { es: "atletismo", en: "athletics", category: "sports" },
  { es: "ciclismo", en: "cycling", category: "sports" },
  { es: "boxeo", en: "boxing", category: "sports" },
  { es: "judo", en: "judo", category: "sports" },
  { es: "karate", en: "karate", category: "sports" },
  { es: "surf", en: "surfing", category: "sports" },
  { es: "esquí", en: "skiing", category: "sports" },
  { es: "patinaje", en: "skating", category: "sports" },
  { es: "senderismo", en: "hiking", category: "sports" },
  { es: "gimnasia", en: "gymnastics", category: "sports" },
  { es: "remo", en: "rowing", category: "sports" },
  { es: "tiro", en: "shooting", category: "sports" },
  { es: "rugby", en: "rugby", category: "sports" },

  // 水果 fruits (20)
  { es: "plátano", en: "banana", category: "fruits" },
  { es: "naranja", en: "orange", category: "fruits" },
  { es: "pera", en: "pear", category: "fruits" },
  { es: "uva", en: "grape", category: "fruits" },
  { es: "fresa", en: "strawberry", category: "fruits" },
  { es: "limón", en: "lemon", category: "fruits" },
  { es: "melón", en: "melon", category: "fruits" },
  { es: "sandía", en: "watermelon", category: "fruits" },
  { es: "piña", en: "pineapple", category: "fruits" },
  { es: "mango", en: "mango", category: "fruits" },
  { es: "papaya", en: "papaya", category: "fruits" },
  { es: "kiwi", en: "kiwi", category: "fruits" },
  { es: "melocotón", en: "peach", category: "fruits" },
  { es: "cereza", en: "cherry", category: "fruits" },
  { es: "arándano", en: "blueberry", category: "fruits" },
  { es: "frambuesa", en: "raspberry", category: "fruits" },
  { es: "granada", en: "pomegranate", category: "fruits" },
  { es: "ciruela", en: "plum", category: "fruits" },
  { es: "coco", en: "coconut", category: "fruits" },
  { es: "guayaba", en: "guava", category: "fruits" },
  
  // ====== 新增 700 筆詞條（每類 20 筆，共 35 類）======
  // 蔬菜 vegetables (20)
  { es: "tomate", en: "tomato", category: "vegetables" },
  { es: "lechuga", en: "lettuce", category: "vegetables" },
  { es: "zanahoria", en: "carrot", category: "vegetables" },
  { es: "cebolla", en: "onion", category: "vegetables" },
  { es: "ajo", en: "garlic", category: "vegetables" },
  { es: "pepino", en: "cucumber", category: "vegetables" },
  { es: "pimiento", en: "bell pepper", category: "vegetables" },
  { es: "patata", en: "potato", category: "vegetables" },
  { es: "col", en: "cabbage", category: "vegetables" },
  { es: "brócoli", en: "broccoli", category: "vegetables" },
  { es: "coliflor", en: "cauliflower", category: "vegetables" },
  { es: "espinaca", en: "spinach", category: "vegetables" },
  { es: "berenjena", en: "eggplant", category: "vegetables" },
  { es: "calabacín", en: "zucchini", category: "vegetables" },
  { es: "calabaza", en: "pumpkin", category: "vegetables" },
  { es: "apio", en: "celery", category: "vegetables" },
  { es: "remolacha", en: "beet", category: "vegetables" },
  { es: "alcachofa", en: "artichoke", category: "vegetables" },
  { es: "guisante", en: "pea", category: "vegetables" },
  { es: "judía", en: "bean", category: "vegetables" },

  // 飲品 beverages (20)
  { es: "café", en: "coffee", category: "beverages" },
  { es: "té", en: "tea", category: "beverages" },
  { es: "zumo", en: "juice", category: "beverages" },
  { es: "refresco", en: "soda", category: "beverages" },
  { es: "agua con gas", en: "sparkling water", category: "beverages" },
  { es: "cerveza", en: "beer", category: "beverages" },
  { es: "vino", en: "wine", category: "beverages" },
  { es: "batido", en: "milkshake", category: "beverages" },
  { es: "chocolate caliente", en: "hot chocolate", category: "beverages" },
  { es: "limonada", en: "lemonade", category: "beverages" },
  { es: "sidra", en: "cider", category: "beverages" },
  { es: "cóctel", en: "cocktail", category: "beverages" },
  { es: "whisky", en: "whiskey", category: "beverages" },
  { es: "ron", en: "rum", category: "beverages" },
  { es: "vodka", en: "vodka", category: "beverages" },
  { es: "ginebra", en: "gin", category: "beverages" },
  { es: "champán", en: "champagne", category: "beverages" },
  { es: "licuado", en: "smoothie", category: "beverages" },
  { es: "té verde", en: "green tea", category: "beverages" },
  { es: "mate", en: "mate", category: "beverages" },

  // 甜點 desserts (20)
  { es: "pastel", en: "cake", category: "desserts" },
  { es: "tarta", en: "pie", category: "desserts" },
  { es: "galleta", en: "cookie", category: "desserts" },
  { es: "helado", en: "ice cream", category: "desserts" },
  { es: "pudín", en: "pudding", category: "desserts" },
  { es: "flan", en: "flan", category: "desserts" },
  { es: "churro", en: "churro", category: "desserts" },
  { es: "brownie", en: "brownie", category: "desserts" },
  { es: "mousse", en: "mousse", category: "desserts" },
  { es: "caramelo", en: "caramel", category: "desserts" },
  { es: "merengue", en: "meringue", category: "desserts" },
  { es: "natillas", en: "custard", category: "desserts" },
  { es: "bizcocho", en: "sponge cake", category: "desserts" },
  { es: "crepe", en: "crepe", category: "desserts" },
  { es: "gelatina", en: "jelly", category: "desserts" },
  { es: "compota", en: "compote", category: "desserts" },
  { es: "sorbete", en: "sorbet", category: "desserts" },
  { es: "tiramisú", en: "tiramisu", category: "desserts" },
  { es: "magdalena", en: "cupcake", category: "desserts" },
  { es: "arroz con leche", en: "rice pudding", category: "desserts" },

  // 肉類 meats (20)
  { es: "ternera", en: "beef/veal", category: "meats" },
  { es: "cerdo", en: "pork", category: "meats" },
  { es: "cordero", en: "lamb", category: "meats" },
  { es: "pavo", en: "turkey", category: "meats" },
  { es: "jamón", en: "ham", category: "meats" },
  { es: "salchicha", en: "sausage", category: "meats" },
  { es: "tocino", en: "bacon", category: "meats" },
  { es: "lomo", en: "loin", category: "meats" },
  { es: "chuleta", en: "chop", category: "meats" },
  { es: "costilla", en: "rib", category: "meats" },
  { es: "hígado", en: "liver", category: "meats" },
  { es: "embutido", en: "cold cuts", category: "meats" },
  { es: "mortadela", en: "mortadella", category: "meats" },
  { es: "chorizo", en: "chorizo", category: "meats" },
  { es: "salami", en: "salami", category: "meats" },
  { es: "panceta", en: "pork belly", category: "meats" },
  { es: "albóndiga", en: "meatball", category: "meats" },
  { es: "filete", en: "steak/fillet", category: "meats" },
  { es: "asado", en: "roast", category: "meats" },
  { es: "pollo", en: "chicken", category: "meats" },

  // 海鮮 seafood (20)
  { es: "pescado", en: "fish (food)", category: "seafood" },
  { es: "atún", en: "tuna", category: "seafood" },
  { es: "salmón", en: "salmon", category: "seafood" },
  { es: "bacalao", en: "cod", category: "seafood" },
  { es: "merluza", en: "hake", category: "seafood" },
  { es: "sardina", en: "sardine", category: "seafood" },
  { es: "calamar", en: "squid", category: "seafood" },
  { es: "pulpo", en: "octopus", category: "seafood" },
  { es: "gamba", en: "shrimp/prawn", category: "seafood" },
  { es: "langosta", en: "lobster", category: "seafood" },
  { es: "cangrejo", en: "crab", category: "seafood" },
  { es: "mejillón", en: "mussel", category: "seafood" },
  { es: "almeja", en: "clam", category: "seafood" },
  { es: "ostra", en: "oyster", category: "seafood" },
  { es: "vieira", en: "scallop", category: "seafood" },
  { es: "anchoa", en: "anchovy", category: "seafood" },
  { es: "sepia", en: "cuttlefish", category: "seafood" },
  { es: "lubina", en: "sea bass", category: "seafood" },
  { es: "trucha", en: "trout", category: "seafood" },
  { es: "anguila", en: "eel", category: "seafood" },

  // 穀物 grains (20)
  { es: "arroz", en: "rice", category: "grains" },
  { es: "trigo", en: "wheat", category: "grains" },
  { es: "maíz", en: "corn", category: "grains" },
  { es: "avena", en: "oats", category: "grains" },
  { es: "cebada", en: "barley", category: "grains" },
  { es: "centeno", en: "rye", category: "grains" },
  { es: "quinoa", en: "quinoa", category: "grains" },
  { es: "mijo", en: "millet", category: "grains" },
  { es: "sorgo", en: "sorghum", category: "grains" },
  { es: "harina", en: "flour", category: "grains" },
  { es: "cuscús", en: "couscous", category: "grains" },
  { es: "sémola", en: "semolina", category: "grains" },
  { es: "pasta", en: "pasta", category: "grains" },
  { es: "fideo", en: "noodle", category: "grains" },
  { es: "cereal", en: "cereal", category: "grains" },
  { es: "granola", en: "granola", category: "grains" },
  { es: "trigo sarraceno", en: "buckwheat", category: "grains" },
  { es: "bulgur", en: "bulgur", category: "grains" },
  { es: "polenta", en: "polenta", category: "grains" },
  { es: "tapioca", en: "tapioca", category: "grains" },

  // 香料 spices (20)
  { es: "sal", en: "salt", category: "spices" },
  { es: "pimienta", en: "pepper", category: "spices" },
  { es: "pimentón", en: "paprika", category: "spices" },
  { es: "comino", en: "cumin", category: "spices" },
  { es: "cúrcuma", en: "turmeric", category: "spices" },
  { es: "canela", en: "cinnamon", category: "spices" },
  { es: "clavo", en: "clove", category: "spices" },
  { es: "nuez moscada", en: "nutmeg", category: "spices" },
  { es: "jengibre", en: "ginger", category: "spices" },
  { es: "azafrán", en: "saffron", category: "spices" },
  { es: "vainilla", en: "vanilla", category: "spices" },
  { es: "chile", en: "chili", category: "spices" },
  { es: "cayena", en: "cayenne", category: "spices" },
  { es: "curry", en: "curry", category: "spices" },
  { es: "cardamomo", en: "cardamom", category: "spices" },
  { es: "anís", en: "anise", category: "spices" },
  { es: "mostaza", en: "mustard", category: "spices" },
  { es: "laurel", en: "bay leaf", category: "spices" },
  { es: "mezcla de especias", en: "spice mix", category: "spices" },
  { es: "hoja de curry", en: "curry leaf", category: "spices" },

  // 香草 herbs (20)
  { es: "perejil", en: "parsley", category: "herbs" },
  { es: "cilantro", en: "coriander", category: "herbs" },
  { es: "albahaca", en: "basil", category: "herbs" },
  { es: "orégano", en: "oregano", category: "herbs" },
  { es: "tomillo", en: "thyme", category: "herbs" },
  { es: "romero", en: "rosemary", category: "herbs" },
  { es: "menta", en: "mint", category: "herbs" },
  { es: "hierbabuena", en: "spearmint", category: "herbs" },
  { es: "salvia", en: "sage", category: "herbs" },
  { es: "eneldo", en: "dill", category: "herbs" },
  { es: "cebollino", en: "chives", category: "herbs" },
  { es: "estragón", en: "tarragon", category: "herbs" },
  { es: "mejorana", en: "marjoram", category: "herbs" },
  { es: "lavanda", en: "lavender", category: "herbs" },
  { es: "melisa", en: "lemon balm", category: "herbs" },
  { es: "ruda", en: "rue", category: "herbs" },
  { es: "alfalfa", en: "alfalfa", category: "herbs" },
  { es: "hinojo", en: "fennel", category: "herbs" },
  { es: "verbena", en: "vervain", category: "herbs" },
  { es: "ajedrea", en: "savory", category: "herbs" },

  // 早餐 breakfast (20)
  { es: "desayuno", en: "breakfast", category: "breakfast" },
  { es: "tostada", en: "toast", category: "breakfast" },
  { es: "mantequilla", en: "butter", category: "breakfast" },
  { es: "mermelada", en: "jam", category: "breakfast" },
  { es: "huevo", en: "egg", category: "breakfast" },
  { es: "tortilla española", en: "Spanish omelette", category: "breakfast" },
  { es: "gachas", en: "porridge", category: "breakfast" },
  { es: "yogur", en: "yogurt", category: "breakfast" },
  { es: "cruasán", en: "croissant", category: "breakfast" },
  { es: "café con leche", en: "coffee with milk", category: "breakfast" },
  { es: "té con leche", en: "tea with milk", category: "breakfast" },
  { es: "bocadillo", en: "sandwich", category: "breakfast" },
  { es: "fruta", en: "fruit", category: "breakfast" },
  { es: "pan integral", en: "whole wheat bread", category: "breakfast" },
  { es: "zumo de naranja", en: "orange juice", category: "breakfast" },
  { es: "tostada francesa", en: "French toast", category: "breakfast" },
  { es: "gofre", en: "waffle", category: "breakfast" },
  { es: "miel", en: "honey", category: "breakfast" },
  { es: "arepa", en: "arepa", category: "breakfast" },
  { es: "avena", en: "oatmeal", category: "breakfast" },

  // 乳製品 dairy (20)
  { es: "nata", en: "cream", category: "dairy" },
  { es: "yogur", en: "yogurt", category: "dairy" },
  { es: "kéfir", en: "kefir", category: "dairy" },
  { es: "requesón", en: "cottage cheese", category: "dairy" },
  { es: "cuajada", en: "curd", category: "dairy" },
  { es: "queso fresco", en: "fresh cheese", category: "dairy" },
  { es: "mozzarella", en: "mozzarella", category: "dairy" },
  { es: "parmesano", en: "parmesan", category: "dairy" },
  { es: "cheddar", en: "cheddar", category: "dairy" },
  { es: "gouda", en: "gouda", category: "dairy" },
  { es: "brie", en: "brie", category: "dairy" },
  { es: "camembert", en: "camembert", category: "dairy" },
  { es: "suero", en: "whey", category: "dairy" },
  { es: "leche condensada", en: "condensed milk", category: "dairy" },
  { es: "leche en polvo", en: "powdered milk", category: "dairy" },
  { es: "manteca", en: "butterfat", category: "dairy" },
  { es: "ricotta", en: "ricotta", category: "dairy" },
  { es: "provolone", en: "provolone", category: "dairy" },
  { es: "gruyere", en: "gruyere", category: "dairy" },
  { es: "queso azul", en: "blue cheese", category: "dairy" },

  // 糖果 sweets (20)
  { es: "dulce", en: "sweet/candy", category: "sweets" },
  { es: "chicle", en: "gum", category: "sweets" },
  { es: "piruleta", en: "lollipop", category: "sweets" },
  { es: "toffee", en: "toffee", category: "sweets" },
  { es: "turrón", en: "nougat", category: "sweets" },
  { es: "caramelo duro", en: "hard candy", category: "sweets" },
  { es: "gomita", en: "gummy", category: "sweets" },
  { es: "regaliz", en: "licorice", category: "sweets" },
  { es: "malvavisco", en: "marshmallow", category: "sweets" },
  { es: "barrita", en: "candy bar", category: "sweets" },
  { es: "polvorón", en: "shortbread", category: "sweets" },
  { es: "mazapán", en: "marzipan", category: "sweets" },
  { es: "praliné", en: "praline", category: "sweets" },
  { es: "bombón", en: "chocolate truffle", category: "sweets" },
  { es: "fudge", en: "fudge", category: "sweets" },
  { es: "fruta confitada", en: "candied fruit", category: "sweets" },
  { es: "almendra garrapiñada", en: "candied almond", category: "sweets" },
  { es: "caramelo blando", en: "soft caramel", category: "sweets" },
  { es: "nube", en: "marshmallow (cloud)", category: "sweets" },
  { es: "peladilla", en: "sugared almond", category: "sweets" },

  // 辦公用品 office (20)
  { es: "grapadora", en: "stapler", category: "office" },
  { es: "grapa", en: "staple", category: "office" },
  { es: "clip", en: "paper clip", category: "office" },
  { es: "cinta adhesiva", en: "tape", category: "office" },
  { es: "carpeta", en: "folder", category: "office" },
  { es: "archivador", en: "binder", category: "office" },
  { es: "sobres", en: "envelopes", category: "office" },
  { es: "sellos", en: "stamps", category: "office" },
  { es: "tijeras", en: "scissors", category: "office" },
  { es: "cúter", en: "box cutter", category: "office" },
  { es: "regla", en: "ruler", category: "office" },
  { es: "pegamento", en: "glue", category: "office" },
  { es: "marcador", en: "marker", category: "office" },
  { es: "resaltador", en: "highlighter", category: "office" },
  { es: "post-it", en: "sticky note", category: "office" },
  { es: "pizarrón", en: "whiteboard", category: "office" },
  { es: "pizarrín", en: "small board", category: "office" },
  { es: "portaminas", en: "mechanical pencil", category: "office" },
  { es: "tóner", en: "toner", category: "office" },
  { es: "calculadora", en: "calculator", category: "office" },

  // 家具 furniture (20)
  { es: "silla", en: "chair", category: "furniture" },
  { es: "mesa", en: "table", category: "furniture" },
  { es: "sofá", en: "sofa", category: "furniture" },
  { es: "butaca", en: "armchair", category: "furniture" },
  { es: "cama", en: "bed", category: "furniture" },
  { es: "colchón", en: "mattress", category: "furniture" },
  { es: "almohada", en: "pillow", category: "furniture" },
  { es: "armario", en: "wardrobe", category: "furniture" },
  { es: "cómoda", en: "dresser", category: "furniture" },
  { es: "escritorio", en: "desk", category: "furniture" },
  { es: "estantería", en: "shelf", category: "furniture" },
  { es: "librero", en: "bookcase", category: "furniture" },
  { es: "banqueta", en: "stool", category: "furniture" },
  { es: "taburete", en: "barstool", category: "furniture" },
  { es: "aparador", en: "sideboard", category: "furniture" },
  { es: "vitrina", en: "display cabinet", category: "furniture" },
  { es: "perchero", en: "coat rack", category: "furniture" },
  { es: "buró", en: "nightstand", category: "furniture" },
  { es: "cabecero", en: "headboard", category: "furniture" },
  { es: "tocador", en: "vanity", category: "furniture" },

  // 家電 appliances (20)
  { es: "lavadora", en: "washing machine", category: "appliances" },
  { es: "secadora", en: "dryer", category: "appliances" },
  { es: "lavavajillas", en: "dishwasher", category: "appliances" },
  { es: "aspiradora", en: "vacuum cleaner", category: "appliances" },
  { es: "aire acondicionado", en: "air conditioner", category: "appliances" },
  { es: "ventilador", en: "fan", category: "appliances" },
  { es: "calefacción", en: "heating", category: "appliances" },
  { es: "licuadora", en: "blender", category: "appliances" },
  { es: "batidora", en: "mixer", category: "appliances" },
  { es: "tostadora", en: "toaster", category: "appliances" },
  { es: "cafetera", en: "coffee maker", category: "appliances" },
  { es: "hervidor", en: "kettle", category: "appliances" },
  { es: "plancha", en: "iron", category: "appliances" },
  { es: "microondas", en: "microwave", category: "appliances" },
  { es: "horno", en: "oven", category: "appliances" },
  { es: "frigorífico", en: "refrigerator", category: "appliances" },
  { es: "congelador", en: "freezer", category: "appliances" },
  { es: "purificador", en: "air purifier", category: "appliances" },
  { es: "humidificador", en: "humidifier", category: "appliances" },
  { es: "deshumidificador", en: "dehumidifier", category: "appliances" },

  // 電子產品 electronics (20)
  { es: "teléfono", en: "telephone", category: "electronics" },
  { es: "móvil", en: "mobile phone", category: "electronics" },
  { es: "tableta", en: "tablet", category: "electronics" },
  { es: "televisor", en: "television", category: "electronics" },
  { es: "altavoz", en: "speaker", category: "electronics" },
  { es: "auriculares", en: "headphones", category: "electronics" },
  { es: "cámara", en: "camera", category: "electronics" },
  { es: "consola", en: "console", category: "electronics" },
  { es: "router", en: "router", category: "electronics" },
  { es: "monitor", en: "monitor", category: "electronics" },
  { es: "batería", en: "battery", category: "electronics" },
  { es: "cargador", en: "charger", category: "electronics" },
  { es: "memoria", en: "memory", category: "electronics" },
  { es: "tarjeta SD", en: "SD card", category: "electronics" },
  { es: "USB", en: "USB", category: "electronics" },
  { es: "teclado", en: "keyboard", category: "electronics" },
  { es: "ratón", en: "mouse", category: "electronics" },
  { es: "placa base", en: "motherboard", category: "electronics" },
  { es: "procesador", en: "processor", category: "electronics" },
  { es: "tarjeta gráfica", en: "graphics card", category: "electronics" },

  // 樂器 instruments (20)
  { es: "piano", en: "piano", category: "instruments" },
  { es: "guitarra", en: "guitar", category: "instruments" },
  { es: "violín", en: "violin", category: "instruments" },
  { es: "viola", en: "viola", category: "instruments" },
  { es: "violonchelo", en: "cello", category: "instruments" },
  { es: "contrabajo", en: "double bass", category: "instruments" },
  { es: "flauta", en: "flute", category: "instruments" },
  { es: "clarinete", en: "clarinet", category: "instruments" },
  { es: "oboe", en: "oboe", category: "instruments" },
  { es: "trompeta", en: "trumpet", category: "instruments" },
  { es: "trombón", en: "trombone", category: "instruments" },
  { es: "saxofón", en: "saxophone", category: "instruments" },
  { es: "batería", en: "drum set", category: "instruments" },
  { es: "percusión", en: "percussion", category: "instruments" },
  { es: "arpa", en: "harp", category: "instruments" },
  { es: "acordeón", en: "accordion", category: "instruments" },
  { es: "ukelele", en: "ukulele", category: "instruments" },
  { es: "banjo", en: "banjo", category: "instruments" },
  { es: "mandolina", en: "mandolin", category: "instruments" },
  { es: "armónica", en: "harmonica", category: "instruments" },

  // 藝術 art (20)
  { es: "pintura", en: "painting", category: "art" },
  { es: "dibujo", en: "drawing", category: "art" },
  { es: "escultura", en: "sculpture", category: "art" },
  { es: "grabado", en: "engraving", category: "art" },
  { es: "cerámica", en: "ceramics", category: "art" },
  { es: "fotografía", en: "photography", category: "art" },
  { es: "óleo", en: "oil painting", category: "art" },
  { es: "acuarela", en: "watercolor", category: "art" },
  { es: "lienzo", en: "canvas", category: "art" },
  { es: "brocha", en: "brush", category: "art" },
  { es: "pincel", en: "paintbrush", category: "art" },
  { es: "paleta", en: "palette", category: "art" },
  { es: "galería", en: "gallery", category: "art" },
  { es: "exposición", en: "exhibition", category: "art" },
  { es: "boceto", en: "sketch", category: "art" },
  { es: "tinta", en: "ink", category: "art" },
  { es: "marco", en: "frame", category: "art" },
  { es: "caballetE", en: "easel", category: "art" },
  { es: "mural", en: "mural", category: "art" },
  { es: "collage", en: "collage", category: "art" },

  // 文學 literature (20)
  { es: "novela", en: "novel", category: "literature" },
  { es: "cuento", en: "short story", category: "literature" },
  { es: "poesía", en: "poetry", category: "literature" },
  { es: "ensayo", en: "essay", category: "literature" },
  { es: "autor", en: "author", category: "literature" },
  { es: "lector", en: "reader", category: "literature" },
  { es: "editor", en: "editor", category: "literature" },
  { es: "prólogo", en: "prologue", category: "literature" },
  { es: "epílogo", en: "epilogue", category: "literature" },
  { es: "capítulo", en: "chapter", category: "literature" },
  { es: "párrafo", en: "paragraph", category: "literature" },
  { es: "línea", en: "line", category: "literature" },
  { es: "biblioteca", en: "library", category: "literature" },
  { es: "librería", en: "bookstore", category: "literature" },
  { es: "manuscrito", en: "manuscript", category: "literature" },
  { es: "folio", en: "sheet", category: "literature" },
  { es: "margen", en: "margin", category: "literature" },
  { es: "índice", en: "index", category: "literature" },
  { es: "título", en: "title", category: "literature" },
  { es: "portada", en: "cover", category: "literature" },

  // 數學 math (20)
  { es: "número", en: "number", category: "math" },
  { es: "suma", en: "addition", category: "math" },
  { es: "resta", en: "subtraction", category: "math" },
  { es: "multiplicación", en: "multiplication", category: "math" },
  { es: "división", en: "division", category: "math" },
  { es: "fracción", en: "fraction", category: "math" },
  { es: "porcentaje", en: "percentage", category: "math" },
  { es: "decimal", en: "decimal", category: "math" },
  { es: "raíz cuadrada", en: "square root", category: "math" },
  { es: "potencia", en: "power", category: "math" },
  { es: "álgebra", en: "algebra", category: "math" },
  { es: "geometría", en: "geometry", category: "math" },
  { es: "trigonometría", en: "trigonometry", category: "math" },
  { es: "cálculo", en: "calculus", category: "math" },
  { es: "promedio", en: "average", category: "math" },
  { es: "mediana", en: "median", category: "math" },
  { es: "varianza", en: "variance", category: "math" },
  { es: "desviación estándar", en: "standard deviation", category: "math" },
  { es: "matriz", en: "matrix", category: "math" },
  { es: "vector", en: "vector", category: "math" },

  // 科學 science (20)
  { es: "método científico", en: "scientific method", category: "science" },
  { es: "hipótesis", en: "hypothesis", category: "science" },
  { es: "teoría", en: "theory", category: "science" },
  { es: "experimento", en: "experiment", category: "science" },
  { es: "observación", en: "observation", category: "science" },
  { es: "medición", en: "measurement", category: "science" },
  { es: "dato", en: "data", category: "science" },
  { es: "análisis", en: "analysis", category: "science" },
  { es: "resultado", en: "result", category: "science" },
  { es: "conclusión", en: "conclusion", category: "science" },
  { es: "investigación", en: "research", category: "science" },
  { es: "publicación", en: "publication", category: "science" },
  { es: "revisión", en: "review", category: "science" },
  { es: "muestra", en: "sample", category: "science" },
  { es: "control", en: "control", category: "science" },
  { es: "variable", en: "variable", category: "science" },
  { es: "constante", en: "constant", category: "science" },
  { es: "modelo", en: "model", category: "science" },
  { es: "simulación", en: "simulation", category: "science" },
  { es: "reproducibilidad", en: "reproducibility", category: "science" },

  // 化學 chemistry (20)
  { es: "átomo", en: "atom", category: "chemistry" },
  { es: "molécula", en: "molecule", category: "chemistry" },
  { es: "ión", en: "ion", category: "chemistry" },
  { es: "electrón", en: "electron", category: "chemistry" },
  { es: "protón", en: "proton", category: "chemistry" },
  { es: "neutrón", en: "neutron", category: "chemistry" },
  { es: "tabla periódica", en: "periodic table", category: "chemistry" },
  { es: "enlace", en: "bond", category: "chemistry" },
  { es: "ácido", en: "acid", category: "chemistry" },
  { es: "base", en: "base", category: "chemistry" },
  { es: "sal", en: "salt", category: "chemistry" },
  { es: "pH", en: "pH", category: "chemistry" },
  { es: "reacción", en: "reaction", category: "chemistry" },
  { es: "catalizador", en: "catalyst", category: "chemistry" },
  { es: "disolvente", en: "solvent", category: "chemistry" },
  { es: "soluto", en: "solute", category: "chemistry" },
  { es: "solución", en: "solution", category: "chemistry" },
  { es: "oxidación", en: "oxidation", category: "chemistry" },
  { es: "reducción", en: "reduction", category: "chemistry" },
  { es: "equilibrio", en: "equilibrium", category: "chemistry" },

  // 物理 physics (20)
  { es: "fuerza", en: "force", category: "physics" },
  { es: "energía", en: "energy", category: "physics" },
  { es: "trabajo", en: "work (physics)", category: "physics" },
  { es: "potencia", en: "power", category: "physics" },
  { es: "velocidad", en: "velocity", category: "physics" },
  { es: "aceleración", en: "acceleration", category: "physics" },
  { es: "masa", en: "mass", category: "physics" },
  { es: "peso", en: "weight", category: "physics" },
  { es: "gravedad", en: "gravity", category: "physics" },
  { es: "fricción", en: "friction", category: "physics" },
  { es: "presión", en: "pressure", category: "physics" },
  { es: "densidad", en: "density", category: "physics" },
  { es: "temperatura", en: "temperature", category: "physics" },
  { es: "calor", en: "heat", category: "physics" },
  { es: "onda", en: "wave", category: "physics" },
  { es: "frecuencia", en: "frequency", category: "physics" },
  { es: "longitud de onda", en: "wavelength", category: "physics" },
  { es: "circuito", en: "circuit", category: "physics" },
  { es: "voltaje", en: "voltage", category: "physics" },
  { es: "corriente", en: "current", category: "physics" },

  // 醫學 medicine (20)
  { es: "síntoma", en: "symptom", category: "medicine" },
  { es: "diagnóstico", en: "diagnosis", category: "medicine" },
  { es: "tratamiento", en: "treatment", category: "medicine" },
  { es: "medicamento", en: "medicine/drug", category: "medicine" },
  { es: "receta", en: "prescription", category: "medicine" },
  { es: "enfermedad", en: "disease", category: "medicine" },
  { es: "infección", en: "infection", category: "medicine" },
  { es: "vacuna", en: "vaccine", category: "medicine" },
  { es: "cirugía", en: "surgery", category: "medicine" },
  { es: "herida", en: "wound", category: "medicine" },
  { es: "fractura", en: "fracture", category: "medicine" },
  { es: "dolor", en: "pain", category: "medicine" },
  { es: "fiebre", en: "fever", category: "medicine" },
  { es: "tos", en: "cough", category: "medicine" },
  { es: "alergia", en: "allergy", category: "medicine" },
  { es: "asma", en: "asthma", category: "medicine" },
  { es: "diabetes", en: "diabetes", category: "medicine" },
  { es: "hipertensión", en: "hypertension", category: "medicine" },
  { es: "consulta", en: "consultation", category: "medicine" },
  { es: "terapia", en: "therapy", category: "medicine" },

  // 解剖進階 anatomy2 (20)
  { es: "hígado", en: "liver", category: "anatomy2" },
  { es: "riñón", en: "kidney", category: "anatomy2" },
  { es: "pulmón", en: "lung", category: "anatomy2" },
  { es: "cerebro", en: "brain", category: "anatomy2" },
  { es: "hueso", en: "bone", category: "anatomy2" },
  { es: "músculo", en: "muscle", category: "anatomy2" },
  { es: "piel", en: "skin", category: "anatomy2" },
  { es: "sangre", en: "blood", category: "anatomy2" },
  { es: "arteria", en: "artery", category: "anatomy2" },
  { es: "vena", en: "vein", category: "anatomy2" },
  { es: "estómago", en: "stomach", category: "anatomy2" },
  { es: "intestino", en: "intestine", category: "anatomy2" },
  { es: "hígado", en: "liver", category: "anatomy2" },
  { es: "páncreas", en: "pancreas", category: "anatomy2" },
  { es: "bazo", en: "spleen", category: "anatomy2" },
  { es: "tiroides", en: "thyroid", category: "anatomy2" },
  { es: "uréter", en: "ureter", category: "anatomy2" },
  { es: "vejiga", en: "bladder", category: "anatomy2" },
  { es: "útero", en: "uterus", category: "anatomy2" },
  { es: "cervical", en: "cervical", category: "anatomy2" },

  // 植物 plants (20)
  { es: "rosa", en: "rose", category: "plants" },
  { es: "tulipán", en: "tulip", category: "plants" },
  { es: "girasol", en: "sunflower", category: "plants" },
  { es: "orquídea", en: "orchid", category: "plants" },
  { es: "cactus", en: "cactus", category: "plants" },
  { es: "helecho", en: "fern", category: "plants" },
  { es: "bambú", en: "bamboo", category: "plants" },
  { es: "lavanda", en: "lavender", category: "plants" },
  { es: "margarita", en: "daisy", category: "plants" },
  { es: "lirio", en: "lily", category: "plants" },
  { es: "hibisco", en: "hibiscus", category: "plants" },
  { es: "clavel", en: "carnation", category: "plants" },
  { es: "violeta", en: "violet", category: "plants" },
  { es: "jazmín", en: "jasmine", category: "plants" },
  { es: "azalea", en: "azalea", category: "plants" },
  { es: "hortensia", en: "hydrangea", category: "plants" },
  { es: "peonía", en: "peony", category: "plants" },
  { es: "diente de león", en: "dandelion", category: "plants" },
  { es: "palmera", en: "palm tree", category: "plants" },
  { es: "sauce", en: "willow", category: "plants" },

  // 昆蟲 insects (20)
  { es: "hormiga", en: "ant", category: "insects" },
  { es: "abeja", en: "bee", category: "insects" },
  { es: "avispa", en: "wasp", category: "insects" },
  { es: "mosca", en: "fly", category: "insects" },
  { es: "mosquito", en: "mosquito", category: "insects" },
  { es: "mariposa", en: "butterfly", category: "insects" },
  { es: "polilla", en: "moth", category: "insects" },
  { es: "escarabajo", en: "beetle", category: "insects" },
  { es: "libélula", en: "dragonfly", category: "insects" },
  { es: "saltamontes", en: "grasshopper", category: "insects" },
  { es: "grillo", en: "cricket", category: "insects" },
  { es: "cucaracha", en: "cockroach", category: "insects" },
  { es: "chinche", en: "bug/bedbug", category: "insects" },
  { es: "pulga", en: "flea", category: "insects" },
  { es: "garrapata", en: "tick", category: "insects" },
  { es: "mantis", en: "mantis", category: "insects" },
  { es: "oruga", en: "caterpillar", category: "insects" },
  { es: "avispa asiática", en: "asian wasp", category: "insects" },
  { es: "tábano", en: "horsefly", category: "insects" },
  { es: "cigarra", en: "cicada", category: "insects" },

  // 鳥類 birds (20)
  { es: "águila", en: "eagle", category: "birds" },
  { es: "halcón", en: "falcon", category: "birds" },
  { es: "buitre", en: "vulture", category: "birds" },
  { es: "búho", en: "owl", category: "birds" },
  { es: "lechuza", en: "barn owl", category: "birds" },
  { es: "paloma", en: "dove/pigeon", category: "birds" },
  { es: "gorrión", en: "sparrow", category: "birds" },
  { es: "canario", en: "canary", category: "birds" },
  { es: "pavo real", en: "peacock", category: "birds" },
  { es: "pato", en: "duck", category: "birds" },
  { es: "ganso", en: "goose", category: "birds" },
  { es: "cisne", en: "swan", category: "birds" },
  { es: "flamenco", en: "flamingo", category: "birds" },
  { es: "pelícano", en: "pelican", category: "birds" },
  { es: "pingüino", en: "penguin", category: "birds" },
  { es: "avestruz", en: "ostrich", category: "birds" },
  { es: "colibrí", en: "hummingbird", category: "birds" },
  { es: "loro", en: "parrot", category: "birds" },
  { es: "cuervo", en: "crow", category: "birds" },
  { es: "cigüeña", en: "stork", category: "birds" },

  // 爬蟲類 reptiles (20)
  { es: "lagarto", en: "lizard", category: "reptiles" },
  { es: "serpiente", en: "snake", category: "reptiles" },
  { es: "cocodrilo", en: "crocodile", category: "reptiles" },
  { es: "caimán", en: "caiman", category: "reptiles" },
  { es: "iguana", en: "iguana", category: "reptiles" },
  { es: "camaleón", en: "chameleon", category: "reptiles" },
  { es: "geco", en: "gecko", category: "reptiles" },
  { es: "tortuga", en: "turtle", category: "reptiles" },
  { es: "galápago", en: "terrapin", category: "reptiles" },
  { es: "anolis", en: "anole", category: "reptiles" },
  { es: "boa", en: "boa", category: "reptiles" },
  { es: "pitón", en: "python", category: "reptiles" },
  { es: "víbora", en: "viper", category: "reptiles" },
  { es: "tortuga marina", en: "sea turtle", category: "reptiles" },
  { es: "dragón barbudo", en: "bearded dragon", category: "reptiles" },
  { es: "lagartija", en: "small lizard", category: "reptiles" },
  { es: "salamandra", en: "salamander", category: "reptiles" },
  { es: "tritón", en: "newt", category: "reptiles" },
  { es: "cascabel", en: "rattlesnake", category: "reptiles" },
  { es: "anfisbenio", en: "amphisbaena", category: "reptiles" },

  // 海洋動物 sea_animals (20)
  { es: "delfín", en: "dolphin", category: "sea_animals" },
  { es: "ballena", en: "whale", category: "sea_animals" },
  { es: "tiburón", en: "shark", category: "sea_animals" },
  { es: "foca", en: "seal", category: "sea_animals" },
  { es: "morsa", en: "walrus", category: "sea_animals" },
  { es: "orca", en: "orca", category: "sea_animals" },
  { es: "medusa", en: "jellyfish", category: "sea_animals" },
  { es: "estrella de mar", en: "starfish", category: "sea_animals" },
  { es: "erizo de mar", en: "sea urchin", category: "sea_animals" },
  { es: "caballito de mar", en: "seahorse", category: "sea_animals" },
  { es: "manatí", en: "manatee", category: "sea_animals" },
  { es: "narval", en: "narwhal", category: "sea_animals" },
  { es: "pez payaso", en: "clownfish", category: "sea_animals" },
  { es: "pez globo", en: "pufferfish", category: "sea_animals" },
  { es: "rayA", en: "ray", category: "sea_animals" },
  { es: "morena", en: "moray eel", category: "sea_animals" },
  { es: "albatros", en: "albatross", category: "sea_animals" },
  { es: "coral", en: "coral", category: "sea_animals" },
  { es: "plancton", en: "plankton", category: "sea_animals" },
  { es: "krill", en: "krill", category: "sea_animals" },

  // 地理 geography (20)
  { es: "continente", en: "continent", category: "geography" },
  { es: "océano", en: "ocean", category: "geography" },
  { es: "mar", en: "sea", category: "geography" },
  { es: "bahía", en: "bay", category: "geography" },
  { es: "península", en: "peninsula", category: "geography" },
  { es: "isla", en: "island", category: "geography" },
  { es: "estrecho", en: "strait", category: "geography" },
  { es: "canal", en: "canal", category: "geography" },
  { es: "cabo", en: "cape", category: "geography" },
  { es: "cordillera", en: "mountain range", category: "geography" },
  { es: "volcán", en: "volcano", category: "geography" },
  { es: "meseta", en: "plateau", category: "geography" },
  { es: "llanura", en: "plain", category: "geography" },
  { es: "altiplano", en: "high plateau", category: "geography" },
  { es: "delta", en: "delta", category: "geography" },
  { es: "estuario", en: "estuary", category: "geography" },
  { es: "glaciar", en: "glacier", category: "geography" },
  { es: "acantilado", en: "cliff", category: "geography" },
  { es: "cueva", en: "cave", category: "geography" },
  { es: "manantial", en: "spring", category: "geography" },

  // 國家 countries (20)
  { es: "España", en: "Spain", category: "countries" },
  { es: "México", en: "Mexico", category: "countries" },
  { es: "Argentina", en: "Argentina", category: "countries" },
  { es: "Colombia", en: "Colombia", category: "countries" },
  { es: "Chile", en: "Chile", category: "countries" },
  { es: "Perú", en: "Peru", category: "countries" },
  { es: "Venezuela", en: "Venezuela", category: "countries" },
  { es: "Ecuador", en: "Ecuador", category: "countries" },
  { es: "Bolivia", en: "Bolivia", category: "countries" },
  { es: "Paraguay", en: "Paraguay", category: "countries" },
  { es: "Uruguay", en: "Uruguay", category: "countries" },
  { es: "Guatemala", en: "Guatemala", category: "countries" },
  { es: "Honduras", en: "Honduras", category: "countries" },
  { es: "El Salvador", en: "El Salvador", category: "countries" },
  { es: "Nicaragua", en: "Nicaragua", category: "countries" },
  { es: "Costa Rica", en: "Costa Rica", category: "countries" },
  { es: "Panamá", en: "Panama", category: "countries" },
  { es: "Cuba", en: "Cuba", category: "countries" },
  { es: "República Dominicana", en: "Dominican Republic", category: "countries" },
  { es: "Puerto Rico", en: "Puerto Rico", category: "countries" },

  // 語言 languages (20)
  { es: "español", en: "Spanish", category: "languages" },
  { es: "inglés", en: "English", category: "languages" },
  { es: "francés", en: "French", category: "languages" },
  { es: "alemán", en: "German", category: "languages" },
  { es: "italiano", en: "Italian", category: "languages" },
  { es: "portugués", en: "Portuguese", category: "languages" },
  { es: "ruso", en: "Russian", category: "languages" },
  { es: "chino", en: "Chinese", category: "languages" },
  { es: "japonés", en: "Japanese", category: "languages" },
  { es: "coreano", en: "Korean", category: "languages" },
  { es: "árabe", en: "Arabic", category: "languages" },
  { es: "hebreo", en: "Hebrew", category: "languages" },
  { es: "griego", en: "Greek", category: "languages" },
  { es: "latín", en: "Latin", category: "languages" },
  { es: "sueco", en: "Swedish", category: "languages" },
  { es: "noruego", en: "Norwegian", category: "languages" },
  { es: "danés", en: "Danish", category: "languages" },
  { es: "holandés", en: "Dutch", category: "languages" },
  { es: "polaco", en: "Polish", category: "languages" },
  { es: "checo", en: "Czech", category: "languages" },

  // 工具 tools (20)
  { es: "martillo", en: "hammer", category: "tools" },
  { es: "destornillador", en: "screwdriver", category: "tools" },
  { es: "alicate", en: "pliers", category: "tools" },
  { es: "llave inglesa", en: "wrench", category: "tools" },
  { es: "taladro", en: "drill", category: "tools" },
  { es: "sierra", en: "saw", category: "tools" },
  { es: "cincel", en: "chisel", category: "tools" },
  { es: "lija", en: "sandpaper", category: "tools" },
  { es: "metro", en: "measuring tape", category: "tools" },
  { es: "nivel", en: "level", category: "tools" },
  { es: "escuadra", en: "square", category: "tools" },
  { es: "sargento", en: "clamp", category: "tools" },
  { es: "tenaza", en: "pincer", category: "tools" },
  { es: "cutter", en: "utility knife", category: "tools" },
  { es: "puntilla", en: "nail (small)", category: "tools" },
  { es: "tornillo", en: "screw", category: "tools" },
  { es: "tuerca", en: "nut", category: "tools" },
  { es: "arandela", en: "washer", category: "tools" },
  { es: "pistola de calor", en: "heat gun", category: "tools" },
  { es: "remachadora", en: "riveter", category: "tools" },

  // 材料 materials (20)
  { es: "madera", en: "wood", category: "materials" },
  { es: "metal", en: "metal", category: "materials" },
  { es: "acero", en: "steel", category: "materials" },
  { es: "hierro", en: "iron", category: "materials" },
  { es: "cobre", en: "copper", category: "materials" },
  { es: "aluminio", en: "aluminum", category: "materials" },
  { es: "plástico", en: "plastic", category: "materials" },
  { es: "vidrio", en: "glass", category: "materials" },
  { es: "cerámica", en: "ceramic", category: "materials" },
  { es: "hormigón", en: "concrete", category: "materials" },
  { es: "cemento", en: "cement", category: "materials" },
  { es: "ladrillo", en: "brick", category: "materials" },
  { es: "piedra", en: "stone", category: "materials" },
  { es: "mármol", en: "marble", category: "materials" },
  { es: "granito", en: "granite", category: "materials" },
  { es: "cuero", en: "leather", category: "materials" },
  { es: "tela", en: "fabric", category: "materials" },
  { es: "algodón", en: "cotton", category: "materials" },
  { es: "lana", en: "wool", category: "materials" },
  { es: "seda", en: "silk", category: "materials" },

  // 形狀 shapes (20)
  { es: "círculo", en: "circle", category: "shapes" },
  { es: "cuadrado", en: "square", category: "shapes" },
  { es: "triángulo", en: "triangle", category: "shapes" },
  { es: "rectángulo", en: "rectangle", category: "shapes" },
  { es: "pentágono", en: "pentagon", category: "shapes" },
  { es: "hexágono", en: "hexagon", category: "shapes" },
  { es: "heptágono", en: "heptagon", category: "shapes" },
  { es: "octágono", en: "octagon", category: "shapes" },
  { es: "rombo", en: "rhombus", category: "shapes" },
  { es: "trapecio", en: "trapezoid", category: "shapes" },
  { es: "ovalo", en: "oval", category: "shapes" },
  { es: "estrella", en: "star", category: "shapes" },
  { es: "corazón", en: "heart", category: "shapes" },
  { es: "flecha", en: "arrow", category: "shapes" },
  { es: "cruz", en: "cross", category: "shapes" },
  { es: "luna", en: "crescent", category: "shapes" },
  { es: "espiral", en: "spiral", category: "shapes" },
  { es: "paralelogramo", en: "parallelogram", category: "shapes" },
  { es: "semicírculo", en: "semicircle", category: "shapes" },
  { es: "sector", en: "sector", category: "shapes" },
];

const CATEGORIES = [
  { id: "all", name: "全部" },
  { id: "greetings", name: "問候" },
  { id: "food", name: "食物" },
  { id: "colors", name: "顏色" },
  { id: "daily", name: "日常會話" },
  { id: "verbs_common", name: "常用動詞" },
  { id: "animals", name: "動物" },
  { id: "body", name: "身體" },
  { id: "clothing", name: "衣物" },
  { id: "family", name: "家庭" },
  { id: "numbers", name: "數字" },
  { id: "time", name: "時間" },
  { id: "travel", name: "旅遊" },
  { id: "travel_convo", name: "旅遊會話" },
  { id: "transport", name: "交通" },
  { id: "school", name: "學校" },
  { id: "work", name: "工作" },
  { id: "technology", name: "科技" },
  { id: "nature", name: "自然" },
  { id: "weather", name: "天氣" },
  { id: "city", name: "城市" },
  { id: "house", name: "家居" },
  { id: "kitchen", name: "廚房" },
  { id: "bathroom", name: "浴室" },
  { id: "emotions", name: "情緒" },
  { id: "adjectives", name: "形容詞" },
  { id: "adverbs", name: "副詞" },
  { id: "prepositions", name: "介系詞" },
  { id: "professions", name: "職業" },
  { id: "sports", name: "運動" },
  { id: "fruits", name: "水果" },
  // 下面為新增類別
  { id: "vegetables", name: "蔬菜" },
  { id: "beverages", name: "飲品" },
  { id: "desserts", name: "甜點" },
  { id: "meats", name: "肉類" },
  { id: "seafood", name: "海鮮" },
  { id: "grains", name: "穀物" },
  { id: "spices", name: "香料" },
  { id: "herbs", name: "香草" },
  { id: "breakfast", name: "早餐" },
  { id: "dairy", name: "乳製品" },
  { id: "sweets", name: "糖果" },
  { id: "office", name: "辦公用品" },
  { id: "furniture", name: "家具" },
  { id: "appliances", name: "家電" },
  { id: "electronics", name: "電子產品" },
  { id: "instruments", name: "樂器" },
  { id: "art", name: "藝術" },
  { id: "literature", name: "文學" },
  { id: "math", name: "數學" },
  { id: "science", name: "科學" },
  { id: "chemistry", name: "化學" },
  { id: "physics", name: "物理" },
  { id: "medicine", name: "醫學" },
  { id: "anatomy2", name: "解剖進階" },
  { id: "plants", name: "植物" },
  { id: "insects", name: "昆蟲" },
  { id: "birds", name: "鳥類" },
  { id: "reptiles", name: "爬蟲類" },
  { id: "sea_animals", name: "海洋動物" },
  { id: "geography", name: "地理" },
  { id: "countries", name: "國家" },
  { id: "languages", name: "語言" },
  { id: "tools", name: "工具" },
  { id: "materials", name: "材料" },
  { id: "shapes", name: "形狀" },
];

// LocalStorage keys
const STORAGE_KEYS = {
  progress: "mouse-cheese-progress-v1",
  settings: "mouse-cheese-settings-v1",
};

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

// state
let settings = loadSettings();
let progress = loadProgress();

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    if (!raw) return { flipEsToEn: false, theme: prefersLight() ? "light" : "dark" };
    return { flipEsToEn: false, theme: prefersLight() ? "light" : "dark", ...JSON.parse(raw) };
  } catch {
    return { flipEsToEn: false, theme: prefersLight() ? "light" : "dark" };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

function prefersLight() {
  try {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  } catch { return false; }
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  const btn = qs('#theme-toggle');
  if (btn) btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.progress);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
}

function getItemsByCategory(catId) {
  const items = catId === "all" ? VOCABULARY : VOCABULARY.filter((v) => v.category === catId);
  return items;
}

// 語音合成
function speakSpanish(text) {
  try {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "es-ES";
    const voices = speechSynthesis.getVoices();
    const esVoice = voices.find((v) => v.lang.toLowerCase().startsWith("es"));
    if (esVoice) utter.voice = esVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  } catch {}
}

// UI 初始化
function initCategorySelects() {
  const selects = [qs("#category-select"), qs("#game-category"), qs("#progress-category")];
  for (const sel of selects) {
    sel.innerHTML = CATEGORIES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  }
}

function initTabs() {
  const tabs = qsa(".tab");
  const panels = qsa(".panel");
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      t.classList.add("active");
      qs(`#${t.getAttribute("aria-controls")}`).classList.add("active");
    });
  });
}

function initThemeToggle() {
  const btn = qs('#theme-toggle');
  if (!btn) return;
  // 初始狀態
  applyTheme(settings.theme || 'dark');
  btn.addEventListener('click', () => {
    settings.theme = (settings.theme === 'light') ? 'dark' : 'light';
    applyTheme(settings.theme);
    saveSettings();
  });
}

// 卡片模式
let flashOrder = [];
let currentIndex = 0;

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isMastered(es) {
  return progress[es]?.status === "mastered";
}

function markProgress(es, mastered) {
  progress[es] = progress[es] || { attempts: 0, correct: 0, status: "learning" };
  progress[es].attempts += 1;
  if (mastered) progress[es].correct += 1;
  progress[es].status = mastered ? "mastered" : "learning";
  saveProgress();
  updateProgressStats();
}

function updateProgressStats() {
  const total = VOCABULARY.length;
  const mastered = Object.values(progress).filter((p) => p.status === "mastered").length;
  const learning = total - mastered;
  qs("#stat-total").textContent = `${total}`;
  qs("#stat-mastered").textContent = `${mastered}`;
  qs("#stat-learning").textContent = `${learning}`;
}

function buildFlashOrder() {
  const cat = qs("#category-select").value;
  const items = getItemsByCategory(cat);
  // 讓待加強的單字出現更頻繁
  const weighted = items.flatMap((v) => (isMastered(v.es) ? [v] : [v, v]));
  flashOrder = shuffle(weighted);
  currentIndex = 0;
}

function renderFlashcard() {
  if (flashOrder.length === 0) buildFlashOrder();
  const card = flashOrder[currentIndex % flashOrder.length];
  const frontEl = qs("#card-front");
  const backEl = qs("#card-back");
  const esFirst = settings.flipEsToEn;
  frontEl.textContent = esFirst ? card.es : card.en;
  backEl.textContent = esFirst ? card.en : card.es;
}

function flipCard() {
  qs("#flashcard").classList.toggle("flipped");
}

function nextCard() {
  qs("#flashcard").classList.remove("flipped");
  currentIndex = (currentIndex + 1) % flashOrder.length;
  renderFlashcard();
}

// 遊戲模式：老鼠吃芝士
let currentWord = null;
let level = 1;
let streak = 0;
const MAX_POS = 4;
let mousePos = 0;

function resetGamePositions() {
  mousePos = 0;
  qsa(".game-grid .cell").forEach((c) => c.classList.remove("active"));
  qs('.game-grid .cell[data-pos="0"]').classList.add("active");
}

function chooseGameWord() {
  const cat = qs("#game-category").value;
  const items = getItemsByCategory(cat);
  // 優先出現待加強
  const pool = items.flatMap((v) => (isMastered(v.es) ? [v] : [v, v]));
  currentWord = pool[Math.floor(Math.random() * pool.length)];
  qs("#prompt").textContent = `${currentWord.en}`;
  qs("#hint").textContent = "";
  qs("#answer").value = "";
  resetGamePositions();
}

function moveMouse(step = 1) {
  mousePos = Math.min(MAX_POS, mousePos + step);
  qsa(".game-grid .cell").forEach((c) => c.classList.remove("active"));
  qs(`.game-grid .cell[data-pos="${mousePos}"]`).classList.add("active");
}

function onCorrect() {
  streak += 1;
  level = Math.min(10, level + 1);
  markProgress(currentWord.es, true);
  qs("#feedback").textContent = `✅ 正確！${currentWord.es}`;
  moveMouse(MAX_POS - mousePos);
  setTimeout(() => {
    qs("#streak").textContent = `${streak}`;
    qs("#level").textContent = `${level}`;
    chooseGameWord();
  }, 600);
}

function onWrong() {
  streak = 0;
  markProgress(currentWord.es, false);
  qs("#feedback").textContent = `❌ 正確答案：${currentWord.es}`;
  moveMouse(1);
  if (mousePos >= MAX_POS) {
    // 老鼠到芝士，進入下一題
    setTimeout(chooseGameWord, 600);
  }
  qs("#streak").textContent = `${streak}`;
}

function provideHint() {
  if (!currentWord) return;
  const first = currentWord.es.slice(0, 1);
  const hintText = currentWord.hint ? `提示：${currentWord.hint}；首字母 ${first}` : `首字母 ${first}`;
  qs("#hint").textContent = hintText;
}

function renderProgressList() {
  const cat = qs("#progress-category").value;
  const onlyLearning = qs("#only-learning").checked;
  const items = getItemsByCategory(cat);
  const rows = items
    .filter((v) => (onlyLearning ? progress[v.es]?.status !== "mastered" : true))
    .map((v) => {
      const p = progress[v.es]?.status || "learning";
      const label = p === "mastered" ? "已掌握" : "待加強";
      return `<tr><td>${v.es}</td><td>${v.en}</td><td>${label}</td></tr>`;
    })
    .join("");
  qs("#vocab-tbody").innerHTML = rows || `<tr><td colspan="3">尚無資料</td></tr>`;
}

function initFlashcardHandlers() {
  qs("#flashcard").addEventListener("click", flipCard);
  qs("#flashcard").addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.key === " ") { e.preventDefault(); flipCard(); }
  });
  qs("#btn-next").addEventListener("click", nextCard);
  qs("#btn-know").addEventListener("click", () => { markProgress(flashOrder[currentIndex].es, true); nextCard(); });
  qs("#btn-dont-know").addEventListener("click", () => { markProgress(flashOrder[currentIndex].es, false); nextCard(); });
  qs("#flip-direction").checked = settings.flipEsToEn;
  qs("#flip-direction").addEventListener("change", (e) => { settings.flipEsToEn = e.target.checked; saveSettings(); renderFlashcard(); });
  qs("#speak-card").addEventListener("click", () => {
    const card = flashOrder[currentIndex % flashOrder.length];
    speakSpanish(card.es);
  });
  qs("#category-select").addEventListener("change", () => { buildFlashOrder(); renderFlashcard(); });
}

function initGameHandlers() {
  qs("#btn-speak").addEventListener("click", () => { if (currentWord) speakSpanish(currentWord.es); });
  qs("#btn-hint").addEventListener("click", provideHint);
  qs("#btn-skip").addEventListener("click", chooseGameWord);
  qs("#game-category").addEventListener("change", chooseGameWord);
  qs("#answer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentWord) return;
    const value = qs("#answer").value.trim().toLowerCase();
    const target = currentWord.es.toLowerCase();
    if (!value) return;
    if (value === target) onCorrect(); else onWrong();
  });
}

function initProgressHandlers() {
  qs("#progress-category").addEventListener("change", renderProgressList);
  qs("#only-learning").addEventListener("change", renderProgressList);
}

function boot() {
  initCategorySelects();
  initTabs();
  initThemeToggle();
  updateProgressStats();
  buildFlashOrder();
  renderFlashcard();
  initFlashcardHandlers();
  initGameHandlers();
  initProgressHandlers();
  chooseGameWord();

  // 某些瀏覽器需等語音引擎載入
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }
}

document.addEventListener("DOMContentLoaded", boot);



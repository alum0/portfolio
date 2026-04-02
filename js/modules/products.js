export const products = [
    // --- Букет дня (4 items) ---
    { id: 'bd1', name: 'Ранковий Сюрприз', price: 1990, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd1.png', flowers: 'Троянди, альстромерія, зелень', bestFor: 'Будь-який привід, щоденна радість' },
    { id: 'bd2', name: 'Вечірній Акорд', price: 2290, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd2.png', flowers: 'Хризантеми, гербери, евкаліпт', bestFor: 'Подарунок без приводу, офіс' },
    { id: 'bd3', name: 'Полудень у Саду', price: 1750, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd3.png', flowers: 'Польові квіти, лаванда, ромашки', bestFor: 'Дача, природний інтер\'єр' },
    { id: 'bd4', name: 'Денний Шик', price: 2490, category: 'bouquet-dnya', tag: 'БУКЕТ ДНЯ', image: 'assets/img/bd4.png', flowers: 'Піоноподібні троянди, ранункулюс', bestFor: 'День народження, зустріч' },
    // --- Троянди ---
    { id: 'p1', name: 'Багряна Пристрасть', price: 4500, category: 'roses', tag: 'КЛАСИКА', image: 'https://loremflickr.com/800/800/red,rose,bouquet?lock=1', flowers: 'Червоні троянди Freedom, евкаліпт', bestFor: 'Вітальня, романтична вечеря' },
    { id: 'p8', name: 'Нічне Сяйво', price: 4900, category: 'roses', tag: 'ПРЕМІУМ', image: 'https://loremflickr.com/800/800/dark,rose,bouquet?lock=2', flowers: 'Темні троянди, сріблястий бруній', bestFor: 'Чоловічий кабінет, вечірка' },
    { id: 'p11', name: 'Червона Магія', price: 4600, category: 'roses', tag: 'КЛАСИКА', image: 'https://loremflickr.com/800/800/magic,rose,red?lock=3', flowers: 'Троянди Red Naomi, гіперікум', bestFor: 'Ресторан, побачення' },
    { id: 'p18', name: 'Золотий Світанок', price: 6100, category: 'roses', tag: 'ПРЕМІУМ', image: 'https://loremflickr.com/800/800/yellow,rose,bouquet?lock=4', flowers: 'Золотисті троянди, аспарагус', bestFor: 'Урочистий зал, банкет' },
    { id: 'p24', name: 'Вогняні Троянди', price: 4700, category: 'roses', tag: 'ПРИСТРАСТЬ', image: 'https://loremflickr.com/800/800/fire,rose,bouquet?lock=5', flowers: 'Троянди сорту Cherry Love', bestFor: 'Вечір при свічках' },
    { id: 'p29', name: 'Смарагдова Надія', price: 4400, category: 'roses', tag: 'ПРЕМІУМ', image: 'assets/img/tender_bouquet.png', flowers: 'Зелені троянди Jade, салал', bestFor: 'Офіс творчої студії' },
    // --- Тюльпани ---
    { id: 'p2', name: 'Весняний Світанок', price: 3200, category: 'tulips', tag: 'НІЖНІСТЬ', image: 'https://loremflickr.com/800/800/tulips,flowers,bouquet?lock=7', flowers: 'Тюльпани мікс, анемони', bestFor: 'Спальня, світла кухня' },
    { id: 'p13', name: 'Сонячний Промінь', price: 3100, category: 'tulips', tag: 'ВЕСНА', image: 'https://loremflickr.com/800/800/yellow,tulips,bouquet?lock=8', flowers: 'Жовті тюльпани, мімоза', bestFor: 'Сніданкова зона, дитяча' },
    { id: 'p19', name: 'Ранкова Роса', price: 3600, category: 'tulips', tag: 'ВЕСНА', image: 'https://loremflickr.com/800/800/white,tulips,bouquet?lock=9', flowers: 'Білі тюльпани, вероніка', bestFor: 'Підвіконня, весняна кухня' },
    // --- Авторський ---
    { id: 'p3', name: 'Тропічний Рай', price: 5800, category: 'author', tag: 'ЕКЗОТИКА', image: 'https://loremflickr.com/800/800/tropical,flowers,bouquet?lock=10', flowers: 'Протея, орхідеї, стреліція', bestFor: 'Сучасний офіс, лобі' },
    { id: 'p6', name: 'Бузок та Півонії', price: 6500, category: 'author', tag: 'АВТОРСЬКИЙ', image: 'assets/img/author_bouquet.png', flowers: 'Півонії, бузок, фрезія', bestFor: 'Світла вітальня, святковий стіл' },
    { id: 'p12', name: 'Лавандовий Сон', price: 3400, category: 'author', tag: 'РЕЛАКС', image: 'https://loremflickr.com/800/800/lavender,flowers,bouquet?lock=12', flowers: 'Лаванда, мускарі, дельфініум', bestFor: 'Ванна кімната, спальня' },
    { id: 'p17', name: 'Містичний Букет', price: 5900, category: 'author', tag: 'АРТ', image: 'https://loremflickr.com/800/800/exotic,flowers,bouquet?lock=13', flowers: 'Калли, антуріум, монстера', bestFor: 'Мистецька галерея, лофт' },
    { id: 'p25', name: 'Казковий Ліс', price: 5300, category: 'author', tag: 'ЗАОХОЧЕННЯ', image: 'https://loremflickr.com/800/800/forest,flowers,bouquet?lock=14', flowers: 'Папороть, ранункулюси, мох', bestFor: 'Бібліотека, кабінет' },
    { id: 'p28', name: 'Королівський Букет', price: 8200, category: 'author', tag: 'ЕКСКЛЮЗИВ', image: 'https://loremflickr.com/800/800/royal,flowers,bouquet?lock=15', flowers: 'Троянди Ohara, астільба, жасмин', bestFor: 'Головна вітальня замку' },
    // --- Моно/Дуо ---
    { id: 'p4', name: 'Соняшники', price: 2900, category: 'mono', tag: 'ЛІТО', image: 'https://loremflickr.com/800/800/sunflowers,bouquet?lock=16', flowers: 'Соняшники, декоративні злаки', bestFor: 'Тераса, заміський будинок' },
    { id: 'p7', name: 'Біла Симфонія', price: 3800, category: 'mono', tag: 'ЕЛЕГАНТНІСТЬ', image: 'https://loremflickr.com/800/800/white,flowers,bouquet?lock=17', flowers: 'Білі троянди Avalon, лізіантус', bestFor: 'Класичний інтер\'єр, весілля' },
    { id: 'p14', name: 'Оксамитова Осінь', price: 4300, category: 'mono', tag: 'ТЕПЛО', image: 'https://loremflickr.com/800/800/autumn,flowers,bouquet?lock=18', flowers: 'Жоржини, хризантеми, ягоди', bestFor: 'Камінна зона, вітальня' },
    { id: 'p23', name: 'Білосніжна Лілія', price: 3900, category: 'mono', tag: 'ЧИСТОТА', image: 'https://loremflickr.com/800/800/lily,flowers,bouquet?lock=19', flowers: 'Лілії Casa Blanca, гіпсофіла', bestFor: 'Дуже світлий інтер\'єр' },
    { id: 'p26', name: 'Срібний Бриз', price: 4200, category: 'mono', tag: 'СУЧАСНІСТЬ', image: 'https://loremflickr.com/800/800/eucalyptus,flowers,bouquet?lock=20', flowers: 'Евкаліпт Срібний долар, брунія', bestFor: 'Хай-тек інтер\'єр' },
    // --- Квіти в коробці ---
    { id: 'p5', name: 'Рожева Хмара', price: 4100, category: 'box', tag: 'РОМАНТИКА', image: 'assets/img/pink_cloud_bouquet.png', flowers: 'Гортензія, півонієподібні троянди', bestFor: 'Туалетний столик, подарунок' },
    { id: 'p15', name: 'Діамантова Коробка', price: 7500, category: 'box', tag: 'ЛЮКС', image: 'https://loremflickr.com/800/800/luxury,flowers,box?lock=22', flowers: 'Півонії Сара Бернар, кущові троянди', bestFor: 'Ювілей, особлива подія' },
    { id: 'p21', name: 'Червоний Оксамит', price: 4800, category: 'box', tag: 'ЕЛЕГАНТНІСТЬ', image: 'https://loremflickr.com/800/800/red,flowers,box?lock=23', flowers: 'Троянди, гвоздики, стрічки', bestFor: 'Подарунок керівнику' },
    { id: 'p30', name: 'Квітковий Десерт', price: 3500, category: 'box', tag: 'МІНІ', image: 'https://loremflickr.com/800/800/macarons,flowers,box?lock=24', flowers: 'Кущові троянди, макаруни', bestFor: 'Кавовий столик' },
    // --- Кошики ---
    { id: 'p10', name: 'Кошик Щастя', price: 5200, category: 'basket', tag: 'ПОДАРУНОК', image: 'https://loremflickr.com/800/800/flowers,basket,bouquet?lock=25', flowers: 'Альстромерії, хризантеми, гербери', bestFor: 'Передпокій, затишна кухня' },
    { id: 'p22', name: 'Квіткова Карусель', price: 5500, category: 'basket', tag: 'ЯСКРАВІСТЬ', image: 'https://loremflickr.com/800/800/colorful,flowers,basket?lock=26', flowers: 'Різнокольорові гербери, солідаго', bestFor: 'День народження, дитяче свято' },
    // --- Еко ---
    { id: 'p9', name: 'Еко-Гармонія', price: 2700, category: 'eco', tag: 'ЕКО', image: 'https://loremflickr.com/800/800/dried,flowers,bouquet?lock=27', flowers: 'Бавовна, сухоцвіти, евкаліпт', bestFor: 'Скандинавський стиль, робочий стіл' },
    { id: 'p16', name: 'Гірська Свіжість', price: 2800, category: 'eco', tag: 'ЕКО', image: 'https://loremflickr.com/800/800/mountain,flowers?lock=28', flowers: 'Едельвейс, гірські трави', bestFor: 'Дерев\'яний інтер\'єр, балкон' },
    { id: 'p20', name: 'Польова Пісня', price: 2500, category: 'eco', tag: 'НАТУРАЛЬНІСТЬ', image: 'https://loremflickr.com/800/800/field,flowers?lock=29', flowers: 'Ромашки, волошки, маки', bestFor: 'Дача, обідній стіл' },
    { id: 'p27', name: 'Океанський Вітер', price: 3700, category: 'eco', tag: 'СВІЖІСТЬ', image: 'https://loremflickr.com/800/800/sea,flowers,bouquet?lock=30', flowers: 'Ерінгіум, декоративна капуста', bestFor: 'Ванна кімната, хол' }
];

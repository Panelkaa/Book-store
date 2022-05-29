const initialState = {
    goods: [
        {
            id: 0,
            title:"Гарри Поттер и философский камень",
            authorName: "Дж. К. Роулинг",
            price: 820,
            image: "https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/121626-dzhoan-ketlin-rouling-garri-potter-i-filosofskiy-kamen.jpg"
        },
        {
            id: 1,
            title:  "Токийские легенды",
            authorName: "Харуки Мраками",
            price: 1020,
            image:"https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/30479232-haruki-murakami-tokiyskie-legendy.jpg"
        },
        {
            id: 2,
            title:  "Хладнокровное убийство",
            authorName: "Трумен Капоте",
            price: 650,
            image: "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/131578-trumen-kapote-hladnokrovnoe-ubiystvo.jpg"

        },
        {
            id: 3,
            title:  "Страна чудес без тормозов и конец света",
            authorName: "Харуки Мраками",
            price: 900,
            image: "https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/129262-haruki-murakami-strana-chudes-bez-tormozov-i-konec-sveta.jpg"
        },
        {
            id: 4,
            title:  "Ходячий замок",
            authorName: "Диана Уиин Джонс",
            price: 500,
            image: "https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/133804-diana-uinn-dzhons-hodyachiy-zamok.jpg"
        },
        {
            id: 5,
            title:  'Собачье сердце',
            authorName: "Михаил Булгаков",
            price: 499,
            image: "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/133810-mihail-bulgakov-sobache-serdce.jpg"
        },
        {
            id: 6,
            title:  "Кошки. Самая полная иллюстрированная энциклопедия",
            authorName: "Светлана Дудникова, Ольга Есауленко",
            price: 649,
            image: "https://cv6.litres.ru/pub/c/pdf-kniga/cover_415/17181668-svetlana-dudnikova-koshki-samaya-polnaya-illustrirovannaya-enciklopediya-17181668.jpg"
        },
        {
            id: 7,
            title:  "Собиратели ракушек",
            authorName: 'Розамунда Пилчер',
            price: 299,
            image: "https://cv0.litres.ru/pub/c/elektronnaya-kniga/cover_415/176306-rozamunda-pilcher-sobirateli-rakushek.jpg"
        },
        {
            id: 8,
            title:  "Злые игры",
            authorName: "Андрей Васильев",
            price: 999,
            image: "https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/67139023-andrey-vasilev-4-zlye-igry.jpg"
        },
        {
            id: 9,
            title:  "Мода. Цвет. Стиль",
            authorName: "Наталия Найденская, Инесса Трубецкова",
            price: 920,
            image: "https://cv9.litres.ru/pub/c/pdf-kniga/cover_415/2873895-inessa-trubeckova-moda-cvet-stil-2873895.jpg"
        },
        {
            id: 10,
            title:  "Подсознание может всё!",
            authorName: "Джон Кехо",
            price: 1200,
            image: "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/147579-dzhon-keho-podsoznanie-mozhet-vse.jpg"
        },
        {
            id: 11,
            title:  "Выбор. О свободе и внутренней силе человека",
            authorName: "Эдит Ева Эгер",
            price: 700,
            image: "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/48508375-edit-eva-eger-vybor.jpg"
        },
        {
            id: 12,
            title:  "1984",
            authorName: "Джордж Оруэлл",
            price: 1150,
            image: "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/129098--.jpg"
        },
        {
            id: 13,
            title:  "Эффект дедлайна. 9 способов эффективно управлять временными рамками",
            authorName: "Кристофер Кокс",
            price: 560,
            image: "https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_415/66655576-kristofer-koks-effekt-dedlayna-9-sposobov-effektivno-upravlyat-vremennymi.jpg"
        },
        {
            id: 14,
            title:  "Внутри убийцы",
            authorName: "Майк Омер",
            price: 899,
            image: "https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_415/47453330-mayk-omer-vnutri-ubiycy.jpg"
        },
        {
            id: 15,
            title:  "Вторая жизнь Уве",
            authorName: "Фредрик Бакман",
            price: 999,
            image: "https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/20690188-fredrik-bakman-vtoraya-zhizn-uve.jpg"
        },
    ],
    cart: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        // case 'ADD_BOOKS':
        //     const books = action.payload.books;
        //     const addBooks = [...state.cart, books];

        //     return {...state, addBooks};
        case 'ADD_GOOD_TO_CART':
            const good = state.goods.find((item) => item.id === action.payload.id);
            const cart = [...state.cart, good];

            return {...state, cart};
        case 'REMOVE_GOOD_FROM_CART':
            const cartRem = [...state.cart];
            let goodRemIndex = cartRem.map(item => item.id).indexOf(action.payload.id);

            goodRemIndex >= 0 && cartRem.splice(goodRemIndex, 1);
            return {...state, cart: cartRem}
        default:
            return state;
    }
}

export default reducer;
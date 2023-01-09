const productdata = [
    {
        "productName": "Apple iPhone 12 Pro Max(256Gb)",
        "productImg": "https://th.bing.com/th?id=OPA.c6gNVn%2b5AA7WJA474C474&w=272&h=272&o=5&dpr=1.3&pid=21.1",
        "productPrice": "173.00",
        "productRating": 21362,
        "sale": true,
        "productSalePrice": "201.00",
        "id": "1"
    },
    {
        "productName": "Apple Iphone 13 Mini(256Gb, Pink)",
        "productImg": "https://th.bing.com/th?id=OPA.XfCE%2bl8Y%2fcaGDw474C474&w=272&h=272&o=5&dpr=1.3&pid=21.1",
        "productPrice": "234.00",
        "productRating": 22729,
        "sale": false,
        "productSalePrice": "66.00",
        "id": "2"
    },
    {
        "productName": "Apple Macbook Air 2020 (M1, 13.3 Inch, 8GB, 256GB, Macos Big Sur, Space Grey",
        "productImg": "https://th.bing.com/th?id=OPA.drt56BAdIGBkjA474C474&w=272&h=272&o=5&dpr=1.3&pid=21.1",
        "productPrice": "34.00",
        "productRating": 46460,
        "sale": false,
        "productSalePrice": "785.00",
        "id": "3"
    },
    {
        "productName": "Apple iphone 6 16Gb (Refurbished)",
        "productImg": "https://th.bing.com/th?id=OPA.%2b2X60OPBTXBqyA474C474&w=272&h=272&o=5&dpr=1.3&pid=21.1",
        "productPrice": "419.00",
        "productRating": 53485,
        "sale": false,
        "productSalePrice": "144.00",
        "id": "4"
    },
    {
        "productName": "Apple iPhone 6s plus 64Gb",
        "productImg": "https://th.bing.com/th?id=OPA.qzRFCF8ZF5d8wQ474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "501.00",
        "productRating": 20605,
        "sale": true,
        "productSalePrice": "582.00",
        "id": "5"
    },
    {
        "productName": "Apple wireless charger chargin pad",
        "productImg": "https://th.bing.com/th?id=OPA.nwP%2bbldLLFzmGA474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "828.00",
        "productRating": 58463,
        "sale": true,
        "productSalePrice": "675.00",
        "id": "6"
    },
    {
        "productName": "Apple Airpods With Wireless Charging Case",
        "productImg": "https://th.bing.com/th?id=OPA.SDzOLrrQGHEVjA474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "344.00",
        "productRating": 82464,
        "sale": false,
        "productSalePrice": "186.00",
        "id": "7"
    },
    {
        "productName": "2 in 1 Wooden Apple Charging Station",
        "productImg": "https://th.bing.com/th?id=OPA.wbwN%2bWMVLXQk3w474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "199.00",
        "productRating": 81966,
        "sale": true,
        "productSalePrice": "854.00",
        "id": "8"
    },
    {
        "productName": "3 in 1 Apple Charger Night Lamp",
        "productImg": "https://th.bing.com/th?id=OPA.FlvkJA3z9TYO%2bQ474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "15.00",
        "productRating": 42494,
        "sale": false,
        "productSalePrice": "612.00",
        "id": "9"
    },
    {
        "productName": "Electric Automatic Apple Peeler Machine",
        "productImg": "https://th.bing.com/th?id=OPA.QhGjJp8BibjQew474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "698.00",
        "productRating": 24425,
        "sale": false,
        "productSalePrice": "646.00",
        "id": "10"
    },
    {
        "productName": "Apple Lightning Cable Fast Charging",
        "productImg": "https://th.bing.com/th?id=OPA.m6a4ZcIDtYwa7Q474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "78.00",
        "productRating": 42983,
        "sale": false,
        "productSalePrice": "130.00",
        "id": "11"
    },
    {
        "productName": "Apple Watch Series 3 Gps, 42mm - Space Grey Aluminium Case With Black Sport Band",
        "productImg": "https://th.bing.com/th?id=OPA.boeQKuyiy1e87Q474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "192.00",
        "productRating": 47524,
        "sale": true,
        "productSalePrice": "526.00",
        "id": "12"
    },
    {
        "productName": "The Inkey List Apple Cider Vinegar Peel - Kiwla",
        "productImg": "https://th.bing.com/th?id=OPA.FKP%2f51pIpaxayg474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "857.00",
        "productRating": 28463,
        "sale": true,
        "productSalePrice": "902.00",
        "id": "13"
    },
    {
        "productName": "Apple iMac (MJVA3HN/A) M1 Chip Macos Big Sur (8GB RAM, 256GB SSD, Apple 7 Core GPU, 60.96cm (24 Inches), Pink)",
        "productImg": "https://th.bing.com/th?id=OPA.i3B5DHxpvJkRqw474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "269.00",
        "productRating": 36692,
        "sale": false,
        "productSalePrice": "247.00",
        "id": "14"
    },
    {
        "productName": "Apple Watch Series 6 Gps",
        "productImg": "https://th.bing.com/th?id=OPA.WKOZJJkCY2UYhA474C474&w=272&h=272&o=5&pid=21.1",
        "productPrice": "96.00",
        "productRating": 14080,
        "sale": false,
        "productSalePrice": "188.00",
        "id": "15"
    }
];

export default productdata;
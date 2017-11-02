// https://globalassets.starbucks.com/assets/1ba88037116d4234807bce3ee442900e.jpg
// FLAT WHITE
// https://globalassets.starbucks.com/assets/f6c298b781144d9d9042bc05f659dc70.jpg
// LATTE
// https://globalassets.starbucks.com/assets/903b434ac0914483932d006e02baeaa3.jpg
// MOCHA
// https://globalassets.starbucks.com/assets/3f3c928b6db142999b4a8f2b0671afb0.jpg
// CAPPACCUINO
// https://globalassets.starbucks.com/assets/02e313dd98204b7380730e96f8d50c38.jpg
// AMERICANO
// https://globalassets.starbucks.com/assets/5d069b310b7d47dda849e3b8d9a4e13f.jpg
// ESPRESSO
// https://globalassets.starbucks.com/assets/39d21421a80045e482b5484ea0d7db4c.jpg
// Espresso Macchiato
// https://globalassets.starbucks.com/assets/f24b6591ed5049c0b75ce1d0f091f1a1.jpg
// cartado
// https://globalassets.starbucks.com/assets/f1eab53bb2384879800af1d6172fe007.jpg
// Iced Caffè Americano
// https://globalassets.starbucks.com/assets/a1d9561814234844936556543f6961bc.jpg
// Caramel Macchiato
// https://globalassets.starbucks.com/assets/4f31501d7e8f4fc48925cfe1ab464bfe.jpg
// Iced Caramel Macchiato
// https://globalassets.starbucks.com/assets/ff7e47cda2fa406d9a65b36f70778d52.jpg
// Iced Caffè Mocha
// https://globalassets.starbucks.com/assets/1ce1d535bc804dc3b116a8a3b5fef02e.jpg
// Iced White Chocolate Mocha
// https://globalassets.starbucks.com/assets/2694ab61375947a58f50fd01a2734274.png
// Iced Caffè Latte




var products = [{
    type: 'drink',
    name: 'flat white',
    price: 199,
    temperature:'hot',
    imgUrl:'https://globalassets.starbucks.com/assets/1ba88037116d4234807bce3ee442900e.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'drink',
    name: 'latte',
    imgUrl:'https://globalassets.starbucks.com/assets/f6c298b781144d9d9042bc05f659dc70.jpg',
    price: 299,
    temperature:'hot',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'drink',
    name: 'mocha',
    imgUrl:'https://globalassets.starbucks.com/assets/903b434ac0914483932d006e02baeaa3.jpg',
    price: 210,
    temperature:'hot',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'cappuccino',
    price: 319,
    temperature:'hot',
    imgUrl:'https://globalassets.starbucks.com/assets/3f3c928b6db142999b4a8f2b0671afb0.jpg',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'americano',
    price: 299,
    temperature:'hot',
    imgUrl:'https://globalassets.starbucks.com/assets/02e313dd98204b7380730e96f8d50c38.jpg',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'esspresso',
    description: 'smaller latte',
    price: 210,
    temperature:'hot',
    imgUrl:'https://globalassets.starbucks.com/assets/5d069b310b7d47dda849e3b8d9a4e13f.jpg',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'cartado',
    price: 299,
    temperature:'hot',
    imgUrl:'https://globalassets.starbucks.com/assets/f24b6591ed5049c0b75ce1d0f091f1a1.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'drink',
    name: 'Iced Caffè Americano',
    temperature:'cold',
    price: 210,
    inStock: true,
    imgUrl:'https://globalassets.starbucks.com/assets/f1eab53bb2384879800af1d6172fe007.jpg',
    allergens: ['dairy'],
    extras: []
},
{
    type: 'drink',
    name: 'Caramel Macchiato',
    imgUrl:'https://globalassets.starbucks.com/assets/a1d9561814234844936556543f6961bc.jpg',
    price: 299,
    temperature:'cold',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'drink',
    name: 'Iced Caffè Latte',
    price: 210,
    temperature:'cold',
    imgUrl:'https:globalassets.starbucks.com/assets/2694ab61375947a58f50fd01a2734274.png',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'food',
    name: 'Ham & Cheddar Croissant',
    price: 600,
    imgUrl:'https://globalassets.starbucks.com/assets/aa389f141d6e4da6860988c75cf96307.jpg',
    inStock: true,
    temperature:'hot',
    allergens: ['dairy', 'gluten'],
    extras: []
},
{
    type: 'food',
    name: 'All day brealfast',
    price: 600,
    imgUrl:'https://globalassets.starbucks.com/assets/7d09a00d5d0d4c3d9ab0ad7da6af8aea.jpg',
    inStock: true,
    temperature:'hot',
    allergens: ['meat', 'dairy', 'gluten'],
    extras: ['tomato sauce']
},
{
    type: 'food',
    name: 'egg mayo sanwich',
    price: 600,
    imgUrl:'https://globalassets.starbucks.com/assets/df912e3496084d2eb1d1ff39c97b05ce.jpg',
    inStock: true,
    temperature:'cold',
    allergens: ['meat', 'dairy', 'gluten'],
    extras: ['tomato sauce']
}

]


// https://globalassets.starbucks.com/assets/aa389f141d6e4da6860988c75cf96307.jpg
// Ham & Cheddar Croissant
// 
// All Day Breakfast

module.exports = products

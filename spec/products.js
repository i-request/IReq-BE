var products = [{
    type: 'hot drink',
    name: 'small black coffee',
    price: 199,
    temperature:'hot',
    description: 'this is a coffee',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: [],
    extras: ['milk']
},
{
    type: 'hot drink',
    name: 'large black coffee',
    description: 'this is also a coffee',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    price: 299,
    temperature:'hot',
    inStock: true,
    allergens: [],
    extras: ['milk']
},
{
    type: 'drink',
    name: 'standard coke',
    description: 'it is just a coke',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    price: 210,
    temperature:'hot',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'large coke',
    price: 319,
    temperature:'hot',
    description: 'again it is just a coke',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'hot drink',
    name: 'large latte',
    description: 'coffee again but this time with milk',
    price: 299,
    temperature:'hot',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'small latte',
    description: 'smaller latte',
    price: 210,
    temperature:'hot',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'large cappuccino',
    description: 'another drink with coffee',
    price: 299,
    temperature:'hot',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'small cappuccino',
    description: 'the name is hard to spell',
    temperature:'hot',
    price: 210,
    inStock: true,
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'large mocha',
    description: 'coffee with extra choclate and syrup',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    price: 299,
    temperature:'hot',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'small mocha',
    description: 'mocha chai',
    price: 210,
    temperature:'hot',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'large hot chocloate',
    description: 'hot chocloate',
    price: 299,
    temperature:'hot',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',    
    allergens: ['dairy'],
    extras: ['cream']
},
{
    type: 'hot drink',
    name: 'small hot choclate',
    description: 'another choclate based drink',
    price: 210,
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',    
    inStock: true,
    temperature:'hot',
    allergens: ['dairy'],
    extras: ['cream']
},
{
    type: 'drink',
    name: 'esspresso',
    description: 'mini coffee',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    price: 210,
    temperature:'hot',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'Trump Ice Water',
    description: 'mineral water by donald trump',
    price: 490,
    imgUrl:'http://i.dailymail.co.uk/i/pix/2016/07/28/17/36AC085300000578-3713052-image-m-63_1469722689630.jpg',
    inStock: true,
    temperature:'hot',
    allergens: [],
    extras: []
},
{
    type: 'food',
    name: 'ham and cheese toastie',
    description: 'standard ham and cheese sandwich served with chips',
    price: 600,
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    inStock: true,
    temperature:'hot',
    allergens: ['meat', 'dairy', 'gluten'],
    extras: ['tomato sauce']
}

]

module.exports = products

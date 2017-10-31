var products = [{
    type: 'hot drink',
    name: 'small black coffee',
    price: 199,
    description: 'this is a coffee',
    imgUrl:'http://atlantablackstar.com/wp-content/uploads/2012/07/Coffee-Cup-from-printshop_opt-300x250.jpg',
    inStock: true,
    allergens: [],
    extras: ['milk']
},
{
    type: 'hot drink',
    name: 'large black coffee',
    description: 'this is also a coffee',
    imgUrl:'http://atlantablackstar.com/wp-content/uploads/2012/07/Coffee-Cup-from-printshop_opt-300x250.jpg',
    price: 299,
    inStock: true,
    allergens: [],
    extras: ['milk']
},
{
    type: 'drink',
    name: 'standard coke',
    description: 'it is just a coke',
    imgUrl:'https://www.the-sweet-life.co.uk/images/product/full/coke500ml.jpg',
    price: 210,
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'drink',
    name: 'large coke',
    price: 319,
    description: 'again it is just a coke',
    imgUrl:'https://www.the-sweet-life.co.uk/images/product/full/coke500ml.jpg',
    inStock: true,
    allergens: [],
    extras: []
},
{
    type: 'hot drink',
    name: 'large latte',
    description: 'coffee again but this time with milk',
    price: 299,
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
    imgUrl:'https://www.veniacoffee.com/shop/media/wysiwyg/Latte-Art-Championship-Pour-2011-notNeutral_1.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'large cappuccino',
    description: 'another drink with coffee',
    price: 299,
    imgUrl:'https://www.veniacoffee.com/shop/media/wysiwyg/Latte-Art-Championship-Pour-2011-notNeutral_1.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'small cappuccino',
    description: 'the name is hard to spell',
    price: 210,
    inStock: true,
    imgUrl:'https://www.veniacoffee.com/shop/media/wysiwyg/Latte-Art-Championship-Pour-2011-notNeutral_1.jpg',
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'large mocha',
    description: 'coffee with extra choclate and syrup',
    imgUrl:'https://www.peets.com/media/catalog/product/cache/2/image/600x/9df78eab33525d08d6e5fb8d27136e95/1/7/17BRD_BEV_03_CaffeMocha_FA_LARGE.png',
    price: 299,
    inStock: true,
    allergens: ['dairy'],
    extras: []
},
{
    type: 'hot drink',
    name: 'small mocha',
    description: 'mocha chai',
    price: 210,
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
    imgUrl:'https://www.garraways.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/t/a/tassimo-cadburys-hot-chocolate-cup_1.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: ['cream']
},
{
    type: 'hot drink',
    name: 'small hot choclate',
    description: 'another choclate based drink',
    price: 210,
    imgUrl:'https://www.garraways.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/t/a/tassimo-cadburys-hot-chocolate-cup_1.jpg',
    inStock: true,
    allergens: ['dairy'],
    extras: ['cream']
},
{
    type: 'hot drink',
    name: 'esspresso',
    description: 'mini coffee',
    imgUrl:'http://www.delonghi.com/Global/recipes/Coffee/espresso.png',
    price: 210,
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
    allergens: [],
    extras: []
},
{
    type: 'food',
    name: 'ham and cheese toastie',
    description: 'standard ham and cheese sandwich served with chips',
    price: 600,
    imgUrl:'http://img.taste.com.au/0X8XpfY6/taste/2016/11/pan-toasted-ham-and-cheese-sandwich-24421-1.jpeg',
    inStock: true,
    allergens: ['meat', 'dairy', 'gluten'],
    extras: ['tomato sauce']
},
{
    type: 'food',
    name: 'portion of chips',
    description: 'bowl of chips',
    price: 395,
    imgUrl:'http://www.kalabashcamberwell.co.uk/wp-content/uploads/2015/06/chips-940x626.png',
    inStock: true,
    allergens: [],
    extras: ['tomato sauce', 'cheese','salt'],
},
{
    type: 'food',
    name: 'tomato and cheese toastie',
    description: 'standard ham and cheese sandwich served with chips',
    price: 600,
    imgUrl:'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero_pdt_McCafe-Toastie_CheeseTomato.png',
    inStock: true,
    allergens: ['dairy'],
    extras: ['tomato sauce']
},
{
    type: 'food',
    name: 'fresh salad',
    description: 'mixed leaf salad with dressing',
    price: 590,
    inStock: true,
    imgUrl:'https://www.southcatering.co.uk/images/photos/product/large/seasonal-green-leaf-salad.jpg',
    allergens: [],
    extras: ['chicken', 'bacon'],
},
{
    type: 'food',
    name: 'bacon sandwich',
    extras: ['tomato sauce'],
    price: 500,
    description:'well it is a bacon sandwich what do you expect',
    imgUrl:'http://www.licketysplitcatering.co.uk/communities/1/004/006/665/111/images/4622533025.jpg',
    inStock: true,
    allergens: ['meat'],
  },
  {
    type: 'food',
    name: 'chicken burger',
    price: 700,
    description:'just a chicken burger',
    inStock: true,
    imgUrl:'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2060C.Webtiles.500x400.CrispyChickenBurger.png',
    allergens: ['meat'],
    extras: ['cheese', 'bacon']
  },
  {
    type: 'food',
    name: 'super hot dog',
    extras: ['onions'],
    price: 900,
    imgUrl:'https://i0.wp.com/agnetwest.com/wp-content/uploads/2016/07/Hot-Dog-Character-Giving-Thumbs-Up.jpg?fit=752%2C1024',
    description:'super large hot dog in a bun served with chips ',
    inStock: true,
    allergens: ['meat']
  }

]

module.exports = products

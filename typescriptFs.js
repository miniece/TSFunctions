var m = { name: 'Everest', height: 29000 };
var range = [
    { name: 'Everest', height: 29029 },
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(set) {
    var current = 0;
    var highest = 'blank';
    for (var i = 0; i < set.length; i++) {
        if (set[i].height > current) {
            current = set[i].height;
            highest = set[i].name;
        }
    }
    return highest;
}
var theMountain = findNameOfTallestMountain(range);
console.log(theMountain);
var products = [
    { name: 'motor', price: 10 },
    { name: 'sensor', price: 12.5 },
    { name: 'LED', price: 1.0 }
];
function calcAverageProductPrice(currentProducts) {
    var total = 0;
    for (var i = 0; i < currentProducts.length; i++) {
        total += currentProducts[i].price;
    }
    var avg = total / currentProducts.length;
    return avg;
}
var avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
var inventory = [
    { product: products[0], quantity: 10 },
    { product: products[1], quantity: 4 },
    { product: products[2], quantity: 20 }
];
function calcInventoryValue(set) {
    var total = 0;
    for (var i = 0; i < set.length; i++) {
        total += set[i].product.price * set[i].quantity;
    }
    return total;
}
var value = calcInventoryValue(inventory);
console.log(value);

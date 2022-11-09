interface Mountain {
	name: string;
	height: number;
}

let kilimanjaro: Mountain = { name: 'Kilimanjaro', height: 19341 };
let everest: Mountain = { name: 'Everest', height: 29029 };
let denali: Mountain = { name: 'Denali', height: 20310 };

let mountains: Mountain[] = [ kilimanjaro, everest, denali ];

function findNameOfTallestMountain(mountains: Mountain[]): string {
	let tallestName: string = '';
	let tallestHeight: number = 0;

	for (let i: number = 0; i < mountains.length; i++) {
		if (mountains[i].height > tallestHeight === true) {
			tallestHeight = mountains[i].height;
			tallestName = mountains[i].name;
		}
	}

	return tallestName;
}

let result: string = findNameOfTallestMountain(mountains);

console.log(`The tallest mountain is ${result}`);

interface Product {
	name: string;
	price: number;
}

let obo: Product = { name: 'Obo', price: 148 };
let banjo: Product = { name: 'Banjo', price: 168 };
let keyboard: Product = { name: 'Keyboard', price: 265 };
let motor: Product = { name: 'Motor', price: 10 };
let sensor: Product = { name: 'Sensor', price: 12.5 };
let led: Product = { name: 'LED', price: 1 };

let products: Product[] = [ obo, banjo, keyboard ];

function calcAverageProductPrice(products: Product[]): number {
	let sum: number = 0;

	for (let i: number = 0; i < products.length; i++) {
		sum += products[i].price;
	}

	return sum / products.length;
}

let avg: number = calcAverageProductPrice(products);

console.log(`Average price of items is $${avg}`);

interface InventoryItem {
	product: Product;
	quantity: number;
}

let product1: InventoryItem = { product: obo, quantity: 15 };
let product2: InventoryItem = { product: banjo, quantity: 23 };
let product3: InventoryItem = { product: keyboard, quantity: 14 };
let product4: InventoryItem = { product: motor, quantity: 10 };
let product5: InventoryItem = { product: sensor, quantity: 4 };
let product6: InventoryItem = { product: led, quantity: 20 };

let inventoryList: InventoryItem[] = [ product1, product2, product3, product4, product5, product6 ];

function calcInventoryValue(inventoryList: InventoryItem[]): number {
	let sum: number = 0;

	for (let i: number = 0; i < inventoryList.length; i++) {
		let sumProduct: number = inventoryList[i].product.price * inventoryList[i].quantity;
		sum += sumProduct;
	}

	return sum;
}

let sp: number = calcInventoryValue(inventoryList);

console.log(`Total value of the entire inventory is: ${sp}`);

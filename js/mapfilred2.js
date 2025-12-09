// foreach

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];

products.forEach((product)=>{
    console.log(`${product.name}`);
})


// map
const ProductName=products.map((product)=>{
    return product.name;
})

console.log(ProductName)

// filter

const electronics=products.filter((product)=>{
    return product.category==="Electronics"
})

console.log(electronics);
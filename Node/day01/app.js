const fs = require("fs");

const readProducts = () => {
  try {
    const data = fs.readFileSync("products.json", "utf8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const saveProducts = (products) => {
  fs.writeFileSync("products.json", JSON.stringify(products));
};

const command = process.argv[2];

if (command === "add") {
  const products = readProducts();
  const name = process.argv[3];
  const price = process.argv[4];

  const newProduct = {
    id: Date.now(),
    name: name,
    price: price,
  };

  products.push(newProduct);
  saveProducts(products);
  console.log("Product added successfully!");
} else if (command === "list") {
  const products = readProducts();
  console.table(products);
} else if (command === "delete") {
  const id = process.argv[3];
  let products = readProducts();
  products = products.filter((prod) => prod.id.toString() !== id);
  saveProducts(products);
  console.log("Product deleted");
} else if (command === "update") {
  const id = process.argv[3];
  let products = readProducts();

  const productIndex = products.findIndex((p) => p.id.toString() === id);

  if (productIndex !== -1) {
    const args = process.argv.slice(4);

    args.forEach((arg, index) => {
      if (arg === "--name" || arg === "name:") {
        products[productIndex].name = args[index + 1];
      }
      if (arg === "--price" || arg === "price:") {
        products[productIndex].price = args[index + 1];
      }
    });

    if (args.length === 1 && !args[0].startsWith("--")) {
      products[productIndex].name = args[0];
    }

    saveProducts(products);
    console.log("Product updated successfully!");
  } else {
    console.log("Product not found!");
  }
}

/*
function getProductDetails(productId, successCallback, errorCallback) {
    const products = [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Smartphone", price: 800 },
        { id: 3, name: "Tablet", price: 500 }
    ];

    const product = products.find(p => p.id === productId);

    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Product with ID ${productId} not found.`);
    }
}

getProductDetails(
    2,
    product => console.log("Product details:", product),
    error => console.error("Error:", error)     
);

getProductDetails(
    5,
    product => console.log("Product details:", product),
    error => console.error("Error:", error)
);*/


/*
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const upcomingConcerts = Object.entries(concerts) 
    .filter(([city, date]) => date > new Date()) 
    .sort((a, b) => a[1] - b[1]) 
    .map(([city]) => city);

console.log(upcomingConcerts);
*/
/*
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (medicines) => {
    return medicines.map((medicine, index) => {
        const discountedPrice = medicine.price > 300 ? medicine.price * 0.7 : medicine.price; 
        return {
            id: index + 1,
            name: medicine.name,
            price: discountedPrice.toFixed(2),
        };
    });
};

const updatedMedicines = applyDiscount(medicines);
console.log(updatedMedicines); 
*/
/*
function Storage(initialItems) {
    this.items = initialItems || [];
  }
  
  Storage.prototype.getItems = function () {
    return this.items;
  };
  
  Storage.prototype.addItem = function (item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
  };
  
  Storage.prototype.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };
  
  const arr = ["apple", "banana", "mango"];
  const storage = new Storage(arr);
  
  console.log(storage.getItems());
  
  storage.addItem("orange");
  console.log(storage.getItems());
  
  storage.removeItem("banana");
  console.log(storage.getItems());
*/
/*
  const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  
  const tagCount = tweets
    .flatMap(tweet => tweet.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
  
  console.log(tagCount); // { js: 3, nodejs: 3, html: 2, css: 2, react: 2 }
*/  

/*
function checkBrackets(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (const char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      if (brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkBrackets("(someFn())")); // true
console.log(checkBrackets("(someFn(})")); // false*/







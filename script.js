const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        console.log('Bar clicked'); // Debugging
        nav.classList.add('active');
        console.log(nav.classList);
    })
}

if (close){
    close.addEventListener('click', () => {
        console.log('Bar clicked'); // Debugging
        nav.classList.remove('active');
        console.log(nav.classList);
    })
}




/* sproduct.html */
// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Define the products
const products = {
    1: {
        img: "img/products/f1.jpg",
        title: "Men's Fashion T Shirt",
        price: "$139.00",
        details: "This soft, breathable shirt features a delicate pink floral pattern on a crisp white backdrop. With a classic fit and short sleeves, it offers both comfort and style. The lightweight fabric is perfect for warm weather, and the durable stitching ensures lasting quality. Ideal for casual outings or beach days, available in multiple sizes."
    },
    2: {
        img: "img/products/f2.jpg",
        title: "Men's Fashion T Shirt",
        price: "$120.00",
        details: "Make a statement with this vibrant shirt, featuring a bold abstract design in mustard, teal, and red. The premium fabric provides comfort, while the short sleeves and classic fit make it perfect for casual events or vacations. It’s durable, easy to maintain, and available in various sizes."
    },
    3: {
        img: "img/products/f3.jpg",
        title: "Men's Fashion T Shirt",
        price: "$120.00",
        details: "This tropical floral shirt combines vibrant green leaves and white flowers on a soft beige background. Lightweight and breathable, it's ideal for warm days. The classic fit and short sleeves offer casual style, while the durable fabric ensures long-lasting wear. Available in a range of sizes."
    },
    4: {
        img: "img/products/f4.jpg",
        title: "Men's Fashion T Shirt",
        price: "$120.00",
        details: "The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fir preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package."
    },
    // Add more products here
};

// Select elements in the HTML where details should be displayed
var productTitle = document.querySelector(".single-pro-details h4");
var productPrice = document.querySelector(".single-pro-details h2");
var productDetails = document.querySelector(".single-pro-details span");
var smallimg = document.getElementsByClassName("small-img");
var MainImg = document.getElementById("MainImg");

// Load the product details based on the product ID
if (products[productId]) {
    MainImg.src = products[productId].img;
    productTitle.textContent = products[productId].title;
    productPrice.textContent = products[productId].price;
    productDetails.textContent = products[productId].details;
}

for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        MainImg.src = this.src;
        productTitle.textContent = products[i+1].title;
        productPrice.textContent = products[i+1].price;
        productDetails.textContent = products[i+1].details;
    }
}


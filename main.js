
const galleryImages = [
    {
        src: "./sets/gallery/image1.jpg",
        alt: "Img 1"
    },
    {
        src: "./sets/gallery/image2.jpg",
        alt: "Img 2"
    },

    {
        src: "./sets/gallery/image3.jpg",
        alt: "Img 3"
    },

    {
        src: "./sets/gallery/image4.jpg",
        alt: "Img 4"
    }
];

const img = [
    {
        title: "AstroFiction",
        author: "Nikita Klimov",
        price: .49,
        image: "./sets/img/img1.png"
    },
    {
        title: "Cyberpunk Spacecraft",
        author: "Nikita Klimov",
        price: .35,
        image: "./sets/img/img2.png"
    },
    {
        title: "Futuristic Library",
        author: "Nikita Klimov",
        price: 1,
        image: "./sets/img/img3.png"
    },
    {
        title: "Neon Flower Field",
        author: "Nikita Klimov",
        price: 1.25,
        image: "./sets/img/img4.png"
    },
    {
        title: "My Little Robot",
        author: "Nikita Klimov",
        price: .99,
        image: "./sets/img/img5.png"
    },
    {
        title: "Black Dog",
        author: "Nikita Klimov",
        price: 0.01,
        image: "./sets/img/img6.png"
    },
    {
        title: "Retro Sci-Fi Shuttle",
        author: "Nikita Klimov",
        price: .1,
        image: "./sets/img/img7.png"
    }
];

// Menu Section

function menuHandler() {
    document.querySelector("#open-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

    document.querySelector("#close-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}


// Greeting 

function greetingHandler() {
    let greetingText = "Final Website Development Introduction"



}

// Img 

function populateimg(productList) {

    let imgSection = document.querySelector(".img-area");
    imgSection.textContent = "";

    // Run a loop through the img and create an HTML element ("product-item") for each of them
    productList.forEach(function (product, index) {

        // Create the HTML element for the individual product 
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        // Create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // Create the product details 
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, price-title and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;
        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Append the product details
        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        // Add all child HTML elements of the product
        productElm.append(productImage);
        productElm.append(productDetails);

        // Add complete individul product to the product
        imgSection.append(productElm);

    });
}

function imgHandler() {

    let freeimg = img.filter(item => !item.price || item.price <= 0);

    let paidimg = img.filter(item => item.price > 0);

    populateimg(img);

    document.querySelector(".img-filter label[for=all] span.product-amount").textContent = img.length;
    document.querySelector(".img-filter label[for=paid] span.product-amount").textContent = paidimg.length;
    document.querySelector(".img-filter label[for=free] span.product-amount").textContent = freeimg.length;

    let imgFilter = document.querySelector(".img-filter");

    imgFilter.addEventListener("click", function (e) {
        if (e.target.id === "all") {
            populateimg(img);
        } else if (e.target.id === "paid") {
            populateimg(paidimg);
        } else if (e.target.id === "free") {
            populateimg(freeimg);
        }
    });
}

function footerHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `Ⓒ ${currentYear} - All rights reserved`;
}

// Page Load

menuHandler();
greetingHandler();
imgHandler();
footerHandler();


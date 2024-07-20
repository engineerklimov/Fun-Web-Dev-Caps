const img = [
    {
        title: "AstroFiction",
        author: "Nikita Klimov",
        price: 0.49,
        image: "./sets/img/img1.png"
    },
    {
        title: "Cyberpunk Spacecraft",
        author: "Nikita Klimov",
        price: 0.35,
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
        price: 0.99,
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
        price: 0.1,
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

// Img 

function populateImg(productList) {
    const imgSection = document.querySelector(".img-area");
    imgSection.textContent = "";

    productList.forEach(function (product) {
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

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

        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);

        productElm.appendChild(productImage);
        productElm.appendChild(productDetails);

        imgSection.appendChild(productElm);
    });
}

function imgHandler() {
    let paidImg = img.filter(item => item.price > 0);

    populateImg(img);

    document.querySelector(".img-filter label[for=all] span.product-amount").textContent = img.length;
    document.querySelector(".img-filter label[for=paid] span.product-amount").textContent = paidImg.length;
    document.querySelector(".img-filter label[for=free] span.product-amount").textContent = img.length - paidImg.length;

    let imgFilter = document.querySelector(".img-filter");

    imgFilter.addEventListener("click", function (e) {
        if (e.target.id === "all") {
            populateImg(img);
        } else if (e.target.id === "paid") {
            populateImg(paidImg);
        } else if (e.target.id === "free") {
            populateImg(img.filter(item => !item.price || item.price <= 0));
        }
    });
}

function footerHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `Ⓒ ${currentYear} - All rights reserved`;
}

// Page Load

menuHandler();
imgHandler();
footerHandler();

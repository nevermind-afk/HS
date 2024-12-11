// Информация о продуктах
const products = {
    lighting: [
        { name: 'Philips Hue', price: 25000, available: true },
        { name: 'Xiaomi Smart Bulb', price: 12500, available: true },
        { name: 'TP-Link Smart Plug', price: 16000, available: true }
    ],
    security: [
        { name: 'Ring Video Doorbell', price: 50000, available: false },
        { name: 'Arlo Pro 3', price: 100000, available: false }
    ],
    climateControl: [
        { name: 'Nest Thermostat', price: 75000, available: true },
        { name: 'Dyson Air Purifier', price: 125000, available: true }
    ],
    smartSpeakers: [
        { name: 'Amazon Echo', price: 35000, available: false },
        { name: 'Google Nest Hub', price: 47500, available: false }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    // список товаров
    function Tovari() {
        for (let category in products) {
            console.log(`Категория: ${category}`);
            products[category].forEach(product => {
                console.log(`Продукт: ${product.name}, Цена: ${product.price} тг., ${product.available ? "В наличии" : "Нет в наличии"}`);
            });
        }
    }

    //в наличии
    function V_nalichii() {
        console.log("Товары в наличии:");
        for (let category in products) {
            products[category].forEach(product => {
                if (product.available) {
                    console.log(`Продукт: ${product.name}, Категория: ${category}, Цена: ${product.price} тг.`);
                }
            });
        }
    }

    //не в наличии
    function Ne_V_nalichii() {
        console.log("Товары не в наличии:");
        for (let category in products) {
            products[category].forEach(product => {
                if (!product.available) {
                    console.log(`Продукт: ${product.name}, Категория: ${category}, Цена: ${product.price} тг.`);
                }
            });
        }
    }

    //сортировка
    const sortButton = document.getElementById("sortPriceButton");
    if (sortButton) {
        sortButton.addEventListener("click", () => {
            const tableBody = document.querySelector(".products-table table tbody");
            const rows = Array.from(tableBody.querySelectorAll("tr"));
            rows.sort((rowA, rowB) => {
                const priceA = parseInt(rowA.cells[3]?.textContent.replace(/\D/g, "")) || 0;
                const priceB = parseInt(rowB.cells[3]?.textContent.replace(/\D/g, "")) || 0;

                return priceA - priceB;
            });

            rows.forEach(row => tableBody.appendChild(row));
        });
    }

    // нов товар
    const form = document.getElementById("addProductForm");
    const tableBody = document.querySelector(".products-table table tbody");

    if (form && tableBody) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const productName = document.getElementById("productName").value;
            const productCategory = document.getElementById("productCategory").value;
            const productPrice = document.getElementById("productPrice").value;
            const productAvailable = document.getElementById("productAvailable").checked;
            const productImage = document.getElementById("productImage").files[0];

            if (!productImage) {
                alert("Пожалуйста, выберите изображение.");
                return;
            }
            const imURL = URL.createObjectURL(productImage);
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><img src="${imURL}" alt="Фото товара" style="width: 50px; height: 50px; object-fit: cover;"></td>
                <td>${productName}</td>
                <td>${productCategory}</td>
                <td>${productPrice} тг</td>
                <td>${productAvailable ? "В наличии" : "Нет в наличии"}</td>
            `;

            tableBody.appendChild(newRow);

            form.reset();
        });
    }

    //стилм навигации
    function izmennav() {
        const navLinks = document.querySelectorAll("nav ul li a");
        navLinks.forEach(link => {
            link.style.backgroundColor = "#ffa07a";
            link.style.color = "#333";
        });
    }

    //приветствие
    function soobshen() {
        alert("Добро пожаловать на сайт HomeStore!");
    }

    //партнерский сайт
    function perehodnaPartner() {
        if (confirm("Перейти на партнерский сайт?")) {
            window.location.href = "C:\\Users\\artur\\Desktop\\Сайты HTML\\html\\partsite.html";
        }
    }

    // геолокац
    const geoButton = document.getElementById("geobut");
    if (geoButton) {
        geoButton.addEventListener("click", function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const shirota = position.coords.latitude;
                    const dolgota = position.coords.longitude;

                    document.getElementById("shir").textContent = shirota;
                    document.getElementById("dolg").textContent = dolgota;
                });
            }
        });
    }
    

    // Вызовы функций
    Tovari();
    V_nalichii();
    Ne_V_nalichii();
    izmennav();
    soobshen();
    perehodnaPartner();
});

let CARS = [
    {
        id: "p-1",
        title: "Tesla Moldel X",
        brand: "Tesla",
        price: 28_000,
        color: "black",
        hp: 400,
    },
    {
        id: "p-1",
        title: "Bugatti Chiron",
        brand: "Bugatti",
        price: 30_000,
        color: "red",
        hp: 800,
    },
    {
        id: "p-1",
        title: "Ferarri SP-8",
        brand: "Ferarri",
        price: 25_000,
        color: "oq",
        hp: 500,
    },
];

const carTitle = document.querySelector(".car__title");
const carBrand = document.querySelector(".car__brand");
const carPrice = document.querySelector(".car__price");
const carPower = document.querySelector(".car__power");
const carColor = document.querySelector("#color");
const form = document.querySelector(".car-form");
const tbody = document.querySelector(".tbody");
const title = document.querySelector("#sorting__title");
const brand = document.querySelector("#sorting__brand");
const price = document.querySelector("#sorting__price");
const hp = document.querySelector("#sorting__hp");

let count = 4;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newCar = {
        title: carTitle.value,
        brand: carBrand.value,
        price: carPrice.value,
        color: carColor.value,
        hp: carPower.value,
    };
    CARS.push(newCar);

    const item = document.createElement("tr");
    item.className = "item";

    item.innerHTML = `
            <td>${count++}</td>
            <td>${carTitle.value}</td>
            <td>${carBrand.value}</td>
            <td>${carPrice.velue}</td>
            <td>${carPower.value}</td>
            <td>${carColor.value}</td>
    `;
    tbody.appendChild(item);

    carTitle.value = "";
    carBrand.value = "";
    carPrice.value = "";
    carColor.value = "";
    carPower.value = "";
});

function sortingNumber(value, type) {
    if (value === "descending") {
        CARS.sort((a, b) => b[type] - a[type]);
    } else if (value === "ascending") {
        CARS.sort((a, b) => a[type] - b[type]);
    }
    createTableData(CARS);
}

function sortingString(value, type) {
    if (value === "descending") {
        CARS.sort((a, b) => {
            let first = a[type].toLowerCase();
            let second = b[type].toLowerCase();
            if (second > first) return 1;
            if (second < first) return -1;
            return 0;
        });
    } else if (value === "ascending") {
        CARS.sort((a, b) => {
            let first = a[type].toLowerCase();
            let second = b[type].toLowerCase();
            if (second > first) return -1;
            if (second < first) return 1;
            return 0;
        });
    }
    createTableData(CARS);
}

title.addEventListener("change", (e) => {
    sortingString(e.target.value, "title");
});

brand.addEventListener("change", (e) => {
    sortingString(e.target.value, "brand");
});

price.addEventListener("change", (e) => {
    sortingNumber(e.target.value, "price");
});

hp.addEventListener("change", (e) => {
    sortingNumber(e.target.value, "hp");
});

function createTableData(data) {
    while (tbody.firstChild) {
        tbody.firstChild.remove();
    }
    data.forEach((car, index) => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${car.title}</td>
            <td>${car.brand}</td>
            <td>${car.price} so'm</td>
            <td>${car.hp}</td>
            <td>${car.color}</td>
        `;
        tbody.appendChild(tableRow);
    });
}
createTableData(CARS);

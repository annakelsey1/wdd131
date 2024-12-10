    const products = ["Laptop", "Smartphone", "Tablet", "Headphones", "Smartwatch"];
    const selectElement = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        selectElement.appendChild(option);
    });

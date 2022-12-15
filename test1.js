function checkStock(productName, number) {
    if (number >= 4){
        console.log(`${productName} is stocked!`);
    } else if (number >= 1){
        console.log(`${productName} - running LOW`);
    } else {
        console.log(`${productName} - OUT of stock!`);
    }
}
checkStock("coffee", 4);
checkStock("tortillas", 3);
checkStock("cheese", 0);
checkStock("salsa", 1);
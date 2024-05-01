function getShippingCost(country) {
    let price;
    let message;

    switch (country.toLowerCase()) {
        case 'china':
            price = 100;
            break;
        case 'chile':
            price = 250;
            break;
        case 'australia':
            price = 170;
            break;
        case 'jamaica':
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    message = `Shipping to ${country} will cost ${price} credits`;
    return message;
}

// Перевірка роботи функції
console.log(getShippingCost('China')); // Shipping to China will cost 100 credits
console.log(getShippingCost('Russia')); // Sorry, there is no delivery to your country
function getShippingCost(country)
{ 
    let mesNote;
    let chinaCredit = 100;
    let chileCredit = 250;
    let australiaCredit = 170;
    let jamaicaCredit = 120;

    switch (country) { 
        case 'China':
            mesNote = `Shipping to ${country} will cost ${chinaCredit} credits`;    
            break;
        case 'Chile':
            mesNote = `Shipping to ${country} will cost ${chileCredit} credits`;    
            break;
        case 'Australia':
            mesNote = `Shipping to ${country} will cost ${australiaCredit} credits`;    
            break;
        case 'Jamaica':
            mesNote = `Shipping to ${country} will cost ${jamaicaCredit} credits`;    
            break;
        default:
            mesNote = "Sorry, there is no delivery to your country";
    }
    return mesNote;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

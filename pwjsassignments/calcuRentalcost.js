function crc(nod, cname) {
    switch (cname) {
        case "economy":
            let totalCosteEconomy = 4000*nod;
            console.log(totalCosteEconomy);
            break;
        case "midsize":
            let totalCostMidsize = 10000*nod;
            console.log(totalCostMidsize);
            break;
            case "luxury":
                let totalCostLuxury = 20000*nod;
                console.log(totalCostLuxury);
                break;
        default:
            console.log("Please enter valid car name");
            break;
    }
}

crc(8,"luxry");
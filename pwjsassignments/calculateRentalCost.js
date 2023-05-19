function clculate(day,cname) {
    // let cname = ["economy", "midsize", "luxury"];
    switch (cname) {
        case 'economy':
            console.log(day*4000);
            break;
        case 'midsize':
                console.log(day*10000);
                break;
        case 'luxury':
            console.log(day*20000);
            break;
        default:
            console.log("enter valid car name");
            break;
    }
}
clculate(85,"luxury");

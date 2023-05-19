let userData = { name: "Amar", balance:2800 };
function updateUserData(transactions, userData, amount){
    switch (transactions){
        case "deposit":
            userData.balance += amount;
            break;
        case "withdrawal":
            userData.balance -= amount;
            break;   
        default:
            return "Invalid data";
    }
    return userData;
}
console.table(updateUserData("deposit",userData,2200));
console.table(updateUserData("withdrawal",userData,2880));
console.table(updateUserData("deposit",userData,2220));
 // node buildaBankingApplication.js
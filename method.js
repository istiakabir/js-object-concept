let student = {
    name: 'Kolimuddi Kha',
    id: 25,
    subject: 'Math',
    money: 10000,
    location: {
        para: 'bazar para',
        zila: 'chuadanga',
    },
    treat: function (bill) {
        const newMoney = this.money - bill;
        return newMoney;
    },
};


let friendTreat = student.treat(500);
console.log(friendTreat);
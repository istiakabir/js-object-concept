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
        console.log(newMoney);
        return newMoney;
    },
};

let bottle = {
    name: 'yellow bottle',
    price: '50 TK',
    color: 'yellow',
    money: 2000,
    isCleaned: true,
};

const bottleTreat = student.treat.bind(bottle);
bottleTreat(500);
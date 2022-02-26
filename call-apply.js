let student = {
    name: 'Kolimuddi Kha',
    id: 25,
    subject: 'Math',
    money: 10000,
    location: {
        para: 'bazar para',
        zila: 'chuadanga',
    },
    treat: function (bill, tax) {
        const newMoney = this.money - bill - tax;
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

student.treat.call(bottle, 500, 20);
student.treat.apply(bottle, [500, 20]);

let bottle = {
    name: 'yellow bottle',
    price: '50 TK',
    color: 'yellow',
    isCleaned: true,
};

for (const product in bottle) {
    // console.log(product);
}

for (const product of Object.keys(bottle)) {
    // console.log(product);
}

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
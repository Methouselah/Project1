"use strict";

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough({ shops, height, moneyPer1m3, budget }) {
  let totalAreaMall = 0,
    totalVolumeMall = 0,
    paymentPrice = 0;

  for (let i = 0; i < shops.length; i++) {
    totalAreaMall += shops[i].width * shops[i].length;
  }

  totalVolumeMall = totalAreaMall * height;
  paymentPrice = totalVolumeMall * 30;

  return budget >= paymentPrice ? "Бюджета достаточно" : "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));

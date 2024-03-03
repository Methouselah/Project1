"use strict";

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan,
      { languages } = plan.skills;
    return `Мне ${age} и я владею языками: ${languages
      .join(" ")
      .toUpperCase()}`;
  },
};

function showExperience(plan) {
  return `${plan.skills.exp}`;
}

function showProgrammingLangs(plan) {
  const { programmingLangs } = plan.skills;
  let result = "";
  for (let key in programmingLangs) {
    result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

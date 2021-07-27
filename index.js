const languages = {
  en: {
    deposit: "DEPOSIT",
    betting: "BETTING RULES",
    faq: "FAQ",
  },
  ko: {
    deposit: "충전",
    betting: "스포츠 배팅룰",
    faq: "FAQ",
  },
};

const languageUsed = document.documentElement.lang;
for (const [key, value] of Object.entries(languages[languageUsed])) {
  document.querySelector(`.${key}-text`).textContent = value;
}

document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector(".wrapper").classList.toggle("open-arrow");
});

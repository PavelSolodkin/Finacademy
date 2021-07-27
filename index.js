let rus = {
  header: [
    "Физическим лицам",
    "Предприятиям",
    "Инвестиции",
    "Блог",
    "О компании",
  ],

  menu: [
    "Физическим лицам",
    "Предприятиям",
    "Инвестиции",
    "Блог",
    "О компании",
  ],

  title: ["Финакадемия"],
  description: [
    "Консалтинговая компания, специализирующаяся на предоставлении организациям и частным лицам финансовых услуг в качестве агрегатора.",
  ],
  short_description: ["Генератор оптимальных финансовых решений"],

  social_media: [
    "instagram",
    "facebook",
    "+74951282028",
    "info@finakademiya.ru",
    "ООО Финакадемия",
  ],

  newsSubtitle: [
    "Facebook и Instagram вложат более $1 млрд в создателей контента",
    "Karma - краудлендинговая платформа",
    'Пресс релиз "Регионы - устойчивое развитие " ',
  ],
  newsText: [
    "Первая программа будет поощрять авторов контента в сервисе коротких видео Reels в Instagram.",
    "Платформа, на которой можно приунможить свой капитал и привлечь инвестиции",
    "Всероссийский конкурс по программе господдержки",
  ],

  titles: ["Наши партнеры", "Продукты", "Новости"],

  productsSubtitle: ["Участие в IPO", "Кредит для бизнеса 6% годовых"],
  productsText: [
    "Без статуса квалифицированного инвестора",
    "от 50 млн. рублей сроком до 15 лет",
  ],

  partnersSubtitle: ["Freedom Finance", "Альфа-банк", "Севергазбанк"],
  partnersText: [
    "Депозиты, кредитование <br> Инвестирование, валютные операции",
    "Кредитование бизнеса под льготный процент",
    "Банковские гарантии",
  ],

  teamSubtitle: ["Наша команда"],
  teamText: [
    'В команде ООО "ФИНАКАДЕМИЯ" собрались как профессионалы с многолетним опытом работы на банковском и финансовом рынке, так и молодые перспективные специалисты',
  ],
  teamButton: ["Познакомиться с нами"],

  ourSubtitle: ["Наша миссия", "Наши принципы", "Наши ценности"],
  ourText: [
    "Обеспечить простой и удобный доступ всем желающим к любому финансовому продукту на любом рынке",
    "<ul><li>Открытость</li><li>Отвественность</li><li>Индивидуальный подход</li></ul>",
    "Важнейшая ценность для нас - это наши клиенты. Их интересы, потребности, их развитие и рост — залог нашего успеха",
  ],
};

let eng = {
  header: ["Private", "Business", "Investments", "Blog", "About"],
  menu: ["Private", "Business", "Investments", "Blog", "About"],
  title: ["Finakademiya"],
  description: [
    "Consulting company specializing in providing organizations and individuals with financial services as an aggregator.",
  ],
  short_description: ["Optimal Financial Solutions Generator"],
  social_media: [
    "instagram",
    "facebook",
    "+74951282028",
    "info@finakademiya.ru",
    "Finakademiya LLC",
  ],
  newsSubtitle: [
    "Facebook and Instagram will invest more than $1 billion in content creators",
    "Karma - crowdsourcing platform",
    'Press release "Regiony - Ustoychivoe Razvitie" ',
  ],
  newsText: [
    "The first program will reward content creators on Instagram's short video service Reels",
    "A platform on which you can raise capital and investment",
    "All-Russian competition on the program of state support",
  ],
  titles: ["Partners", "Products", "News"],
  productsSubtitle: ["IPO participation", "Loan for business 6% per annum"],
  productsText: [
    "Without qualified investor status",
    "from 50 million rubles for up to 15 years",
  ],
  partnersSubtitle: ["Freedom Finance", "Alfa Bank", "Severgazbank"],
  partnersText: [
    "Deposits, crediting <br> Investing, currency operations",
    "Lending to businesses at preferential interest rates",
    "Bank guarantees",
  ],
  teamSubtitle: ["Our team"],
  teamText: [
    "The FINAKADEMIA LLC team includes professionals with many years of experience in the banking and financial market, as well as young promising specialists.",
  ],
  teamButton: ["Meet us"],
  ourSubtitle: ["Our mission", "Our princeples", "Our values"],
  ourText: [
    "Provide easy and convenient access for everyone to any financial product in any market",
    "<ul><li>Openness</li><li>Responsibility</li><li>Individual approach</li></ul>",
    "Most important value for us is our customers. Their interests, their needs, their development and growth are the key to our success",
  ],
};

changeLagnuage();

function changeLagnuage() {
  let language = lang.checked ? eng : rus;
  document.querySelectorAll(".header__link").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".menu__link").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".lead__title").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".lead__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".lead__shortsubtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".our__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".our__text").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".team__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".team__text").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".team__button").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".titles").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".partners__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".partners__text").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".products__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".products__text").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".news__subtitle").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
  document.querySelectorAll(".news__text").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });

  document.querySelectorAll(".footer-links").forEach((el, i) => {
    el.innerHTML = language[el.getAttribute("text")][i];
  });
}

const burger = document.querySelector(".header__burger");
const popup = document.querySelector(".menu");
const close = document.querySelector(".menu__close");

burger.addEventListener("click", () => {
  popup.classList.add("menu_is-opened");
});
close.addEventListener("click", () => {
  popup.classList.remove("menu_is-opened");
});

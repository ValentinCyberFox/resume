
export const mainInfo = {
  nameRu: 'Валентин',
  nameEng: 'Valentin',
  lastNameRu: 'Лесков',
  lastNameEng: 'Leskov',
  jobTitle: 'FRONTEND DEVELOPER',
  infoTextEng: 'Frontend developer with a desire to develop and improve the quality of his work. Team player. Always aiming for the best results. I admit my mistakes and immediately correct them. Ready for the challenge! ',
  infoTextRu: ' Фронтенд разработчик с желанием развиваться и повышать качество своей работы. Командный игрок. Всегда нацелен на результат в лучшем виде. Признаю свои ошибки и тут же исправляю их. Готов к трудностям!',

  experienceWorkRu: 'Опыт работы',
  experienceWorkEng: 'Exterience',
  experienceJobTitleRu: 'Фрилансер, самозанятый веб-разработчик',
  experienceJobTitleEng: 'Freelancer, self-employed web developer',
  experienceCompanyRu: 'Интернет',
  experienceCompanyEng: 'Internet',
  contactBlockRu: 'Контакты',
  contactBlockEng: 'Contact',
  educationBlockRu: 'Образование',
  educationBlockEng: 'Education',
  skillsRu: 'Навыки',
  skillsEng: 'Skills',
  hobbiesTitleRu: 'Хобби',
  hobbiesTitleEng: 'Hobbies',
  hobbiesItemRu: 'Люблю посмотреть душевное кино, почитать интересную книгу. Но в основном мое хобби - это кодинг! Поэтому стараюсь по возможности "набивать руку" на различных пет-проектах.',
  hobbiesItemEng: 'I like to watch a heartfelt movie, read an interesting book. But mostly my hobby is coding! Therefore, I try, if possible, to "fill my hand" on various pet projects.',
}

export const workExperience = {
  year: 2019 - 2022,
  placeRu: 'Интернет',
  jobTitleRu: 'Фрилансер, самозанятый веб-разработчик',
  placeEng: 'Internet',
  jobTitleEng: 'Freelancer, self-employed web developer',

  works: [
    {
      itemTitleRu: 'Оформление, верстка + написнаие дополнений для форума GoldRushGuide',
      itemTitleEng: 'Design, layout + writing additions for the GoldRushGuide forum',
      infoTextRu: 'Являюсь сооснователем проекта <a href="https://www.goldrushguide.ru/"> GoldRushGuide. </a> Написан стиль полностью с нуля. Написаны дополнения такие как hdrezka mirror и "покупка в-баксов". Работа продолжается. ',
      infoTextEng: `I am a co-founder of the GoldRushGuide project. The style was written completely from scratch. Additions such as hdrezka mirror and “purchase of v-bucks” have been written. Work continues.`,
    },
    {
      itemTitleRu: 'Страница магазина "Мой Маркет"',
      itemTitleEng: 'Store page "My Market"',
      infoTextRu: 'Работа была сделана в двух вариантах: сверстанная страница по макету с помощью HTML + CSS и проект на React (+ хуки + Redux). Примеры того, что было сделано, а так же увидеть стек можно на <a href="https://github.com/ValentinCyberFox/product-page-demo-react"> моей странице в гитхабе.</a> Ссылка в контактах.',
      infoTextEng: `The work was done in two versions: a layout page using HTML + CSS and a React project (+ hooks + Redux).
                    Examples of what was done, as well as see the stack, can be found on <a href="https://github.com/ValentinCyberFox/product-page-demo-react"> my github page. </a> Link in contacts.`,
    },
    {
      itemTitleRu: `Парсер 2Гис, Twitter`,
      itemTitleEng: `Parser 2GIS, Twitter`,
      infoTextRu: `Парсеры были написаны с помощью прикладного по (BrowserAutomationStudio) в основе которого лежит js код. В случае с 2Гис софт собирал всевозможные данные по запросу. Реализация была сделана с помощью API 2Гис (без использования прокси и отпечатков браузера). Скрипт работал в многопотоке, был не требователен к машине пользователя и сохранял данные в БД (Mongo DB).
      В парсере Твиттера собирались посты пользователей, доступные по-открытому API. Моментальная скорость работы. Так же сохранение в БД.`,

      infoTextEng: `Parsers were written using application software (BrowserAutomationStudio) based on js code. In the case of 2GIS software
      collected all sorts of data on request. The implementation was made using the 2GIS API (without the use of proxies and browser fingerprints). The script worked in multithread, was not demanding
      to the user's machine and stored the data in the database (Mongo DB).
      The Twitter parser collected user posts available via an open API. Instant speed. Also save to database.`,
    },

    {
      itemTitleRu: `Программа для массового скачивания видео из Тик-Тока без водянного знака с возможностью редактирования видео в "два клика"`,
      itemTitleEng: `A program for mass downloading videos from Tik-Tok without a watermark with the ability to edit video in "two clicks"`,
      infoTextRu: `Одна из моих любимых работ. В многопоточном режиме скачивались видео по нужному запросу. Через сторонний сервис с помощью API удалялся водяной знак и так же через еще один сторонний сервис по API можно было редактировать видео (удалять звук, накладывать свой водяной знак и тд). На выходе пользователь получал готовые видео, разложенные по папкам.`,
      infoTextEng: `One of my favorite works. In multi-threaded mode, videos were downloaded on the required request. Through a third-party service, using the API, the watermark was removed and the same
      through another third-party API service, it was possible to edit the video (remove sound, apply your own watermark, etc.). At the output, the user received ready-made videos, divided into folders.`,
    },

    {
      itemTitleRu: `Прочий софт и скрипты`,
      itemTitleEng: `Other software and scripts`,
      infoTextRu: `Были и другие проекты. Подробнее о них могу рассказать в реальной беседе. Были и автопубликаторы, и конвертеры и тд. Все писалось на BAS, но в  основе каждого проекта лежало умение работать с разметкой, запросами и js-кодом`,
      infoTextEng: `There were other projects as well. I can tell more about them in a real conversation. There were auto-publishers, and converters, and so on. Everything was written in BAS, but in The basis of each project was the ability to work with markup, requests and js code`,
    },
  ],
}

export const educationBlock = [
  {
    year: 2022,
    specialityRu: 'Основы Frontend-разработки',
    specialityEng: 'FRONTEND DEVELOPMENT BASICS',
    universityRu: 'АНО ВО "Университет Иннополис"',
    universityEng: 'ANO VO "Innopolis University',
  },

  {
    year: 2022,
    specialityRu: 'Web-программист: с нуля до первых проектов (сетевая)',
    specialityEng: 'Web programmer: from scratch to the first projects (network)',
    universityRu: '"Национальный исследовательский Томский государственный университет"',
    universityEng: 'National Research Tomsk State University',
  },

  {
    year: '2009 - 2015',
    specialityRu: 'Управление качеством',
    specialityEng: 'Quality Management',
    universityRu: 'Федеральное государственное бюджетное образовательное учреждение высшего профессионального образования "Тихоокеанский государственный университет"',
    universityEng: 'Federal State Budgetary Educational Institution of Higher Professional Education "Pacific State University"',
  },
]
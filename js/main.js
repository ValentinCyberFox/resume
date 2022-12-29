import * as data from './data.js'

let toogleBtnActive = document.querySelector('.footer__button_active') // находим активную кнопку переключения
let toogleBtns = [...document.querySelectorAll('.footer__button')] // это общие кнопки выбора языка

let mainName = document.querySelector('.titles__block-main-title'); // имя
let mainSubtitle = document.querySelector('.titles__block-subtitle'); // фамилия
let mainJobTitle = document.querySelector('.titles__block-job-title'); // название должности
let mainAbout = document.querySelector('.titles__block-about'); // краткое пояснение

let experienceWork = document.querySelector('.experience h3'); // опыт работы
let experienceJobTitle = document.querySelector('.experience__jobtitle') // фрилансер
let experienceCompany = document.querySelector('.experience__company') // место работы (интернет)

let experience = [...document.querySelectorAll('.experience__item .titles__block-about')]

let contactBlock = document.querySelector('.content__contact-block h3') // контакты
let educationBlock = document.querySelector('.content__education-block h3') // образование

let educationContent = [...document.querySelectorAll('.content__education-info')]
console.log(educationContent)


let skillsTitle = document.querySelector('.content__skill-block h3') // навыки
let hobbiesTitle = document.querySelector('.content__hobbies-block h3') // хобби

let hobbiesItem = document.querySelector('.content__hobbies-item') // содержимое хобби

let lang = document.querySelector('.footer__button_active')
experience.map((item, index) => {
  lang.innerText !== 'ENG' ? item.querySelector('span').innerText = data.workExperience.works[index].itemTitleRu : item.querySelector('span').innerText = data.workExperience.works[index].itemTitleEng
  lang.innerText !== 'ENG' ? item.querySelector('p').innerText = data.workExperience.works[index].infoTextRu : item.querySelector('p').innerText = data.workExperience.works[index].infoTextEng
})

let toogleLang = () => {
  toogleBtns.map(item => {
    item.addEventListener('click', handleChangeLang)   // на каждую кнопку вешаем обрботчик
  })
}

const handleChangeLang = (e) => {
  const lang = e.target
  console.log(e.target)
  for (let i = 0; i < toogleBtns.length; i++) {
    if (!(lang == toogleBtns[i] && toogleBtns[i].classList.contains('footer__button_active'))) {
      toogleBtns[i].classList.add('footer__button_active')
    }
    if (lang !== toogleBtns[i] && toogleBtns[i].classList.contains('footer__button_active')) {
      toogleBtns[i].classList.remove('footer__button_active')
    }
  }

  lang.innerText !== 'ENG' ? mainName.innerText = data.mainInfo.nameRu : mainName.innerText = data.mainInfo.nameEng
  lang.innerText !== 'ENG' ? mainSubtitle.innerText = data.mainInfo.lastNameRu : mainSubtitle.innerText = data.mainInfo.lastNameEng
  lang.innerText !== 'ENG' ? mainAbout.innerText = data.mainInfo.infoTextRu : mainAbout.innerText = data.mainInfo.infoTextEng
  lang.innerText !== 'ENG' ? experienceWork.innerText = data.mainInfo.experienceWorkRu : experienceWork.innerText = data.mainInfo.experienceWorkEng
  lang.innerText !== 'ENG' ? experienceJobTitle.innerText = data.mainInfo.experienceJobTitleRu : experienceJobTitle.innerText = data.mainInfo.experienceJobTitleEng
  lang.innerText !== 'ENG' ? contactBlock.innerText = data.mainInfo.contactBlockRu : contactBlock.innerText = data.mainInfo.contactBlockEng
  lang.innerText !== 'ENG' ? educationBlock.innerText = data.mainInfo.educationBlockRu : educationBlock.innerText = data.mainInfo.educationBlockEng
  lang.innerText !== 'ENG' ? skillsTitle.innerText = data.mainInfo.skillsRu : skillsTitle.innerText = data.mainInfo.skillsEng
  lang.innerText !== 'ENG' ? hobbiesTitle.innerText = data.mainInfo.hobbiesTitleRu : hobbiesTitle.innerText = data.mainInfo.hobbiesTitleEng
  lang.innerText !== 'ENG' ? hobbiesItem.innerText = data.mainInfo.hobbiesItemRu : hobbiesItem.innerText = data.mainInfo.hobbiesItemEng
  lang.innerText !== 'ENG' ? experienceCompany.innerText = data.mainInfo.experienceCompanyRu : experienceCompany.innerText = data.mainInfo.experienceCompanyEng

  experience.map((item, index) => {
    lang.innerText !== 'ENG' ? item.querySelector('span').innerText = data.workExperience.works[index].itemTitleRu : item.querySelector('span').innerText = data.workExperience.works[index].itemTitleEng
    lang.innerText !== 'ENG' ? item.querySelector('p').innerText = data.workExperience.works[index].infoTextRu : item.querySelector('p').innerText = data.workExperience.works[index].infoTextEng
  })

  educationContent.map((item, index) => {
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-speciality').innerText = data.educationBlock[index].specialityRu : item.querySelector('.content__education-speciality').innerText = data.educationBlock[index].specialityEng
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-year').innerText = data.educationBlock[index].year : item.querySelector('.content__education-year').innerText = data.educationBlock[index].year
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-university').innerText = data.educationBlock[index].universityRu : item.querySelector('.content__education-university').innerText = data.educationBlock[index].universityEng
  })
}





toogleLang()
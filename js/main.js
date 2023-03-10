import * as data from './data.js'

let browserLang = window.navigator.language
let experience = [...document.querySelectorAll('.experience__item .titles__block-about')]
let educationContent = [...document.querySelectorAll('.content__education-info')]
let toogleBtns = [...document.querySelectorAll('.footer__button')]

let toogleBtnsStyle = [...document.querySelectorAll('.footer__button-style')]

console.log(toogleBtnsStyle)

toogleBtns.map((item, index) => {
  browserLang.includes('en') & item.innerText === 'ENG' ? item.classList.add('footer__button_active') : ''
  browserLang.includes('ru') & item.innerText === 'RUS' ? item.classList.add('footer__button_active') : ''
})

let toogleStyle = () => {
  toogleBtnsStyle.map(item => {
    item.addEventListener('click', handleChangeStyle);
  })
}

let toogleLang = () => {
  toogleBtns.map(item => {
    item.addEventListener('click', handleChangeLang)   // на каждую кнопку вешаем обрботчик
  })
}

let handleSetLanguage = () => {
  let lang = document.querySelector('.footer__button_active')
  lang.innerText !== 'ENG' ? document.querySelector('.titles__block-main-title').innerHTML = data.mainInfo.nameRu : document.querySelector('.titles__block-main-title').innerText = data.mainInfo.nameEng
  lang.innerText !== 'ENG' ? document.querySelector('.titles__block-subtitle').innerText = data.mainInfo.lastNameRu : document.querySelector('.titles__block-subtitle').innerText = data.mainInfo.lastNameEng
  lang.innerText !== 'ENG' ? document.querySelector('.titles__block-about').innerHTML = data.mainInfo.infoTextRu : document.querySelector('.titles__block-about').innerHTML = data.mainInfo.infoTextEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__title').innerText = data.mainInfo.experienceWorkRu : document.querySelector('.content__title').innerText = data.mainInfo.experienceWorkEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__contact-block .content-title').innerText = data.mainInfo.contactBlockRu : document.querySelector('.content__contact-block .content-title').innerText = data.mainInfo.contactBlockEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__education-block .content__title').innerText = data.mainInfo.educationBlockRu : document.querySelector('.content__education-block .content__title').innerText = data.mainInfo.educationBlockEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__skill-block .content__title').innerText = data.mainInfo.skillsRu : document.querySelector('.content__skill-block .content__title').innerText = data.mainInfo.skillsEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__hobbies-block .content__title').innerText = data.mainInfo.hobbiesTitleRu : document.querySelector('.content__hobbies-block .content__title').innerText = data.mainInfo.hobbiesTitleEng
  lang.innerText !== 'ENG' ? document.querySelector('.content__hobbies-item').innerText = data.mainInfo.hobbiesItemRu : document.querySelector('.content__hobbies-item').innerText = data.mainInfo.hobbiesItemEng
  lang.innerText !== 'ENG' ? document.querySelector('.experience__company').innerText = data.mainInfo.experienceCompanyRu : document.querySelector('.experience__company').innerText = data.mainInfo.experienceCompanyEng
  lang.innerText !== 'ENG' ? document.querySelector('.experience__jobtitle').innerText = data.mainInfo.experienceJobTitleRu : document.querySelector('.experience__jobtitle').innerText = data.mainInfo.experienceJobTitleEng
  experience.map((item, index) => {
    lang.innerText !== 'ENG' ? item.querySelector('span').innerHTML = data.workExperience.works[index].itemTitleRu : item.querySelector('span').innerHTML = data.workExperience.works[index].itemTitleEng
    lang.innerText !== 'ENG' ? item.querySelector('p').innerHTML = data.workExperience.works[index].infoTextRu : item.querySelector('p').innerHTML = data.workExperience.works[index].infoTextEng
  })

  educationContent.map((item, index) => {
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-speciality').innerText = data.educationBlock[index].specialityRu : item.querySelector('.content__education-speciality').innerText = data.educationBlock[index].specialityEng
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-year').innerText = data.educationBlock[index].year : item.querySelector('.content__education-year').innerText = data.educationBlock[index].year
    lang.innerText !== 'ENG' ? item.querySelector('.content__education-university').innerText = data.educationBlock[index].universityRu : item.querySelector('.content__education-university').innerText = data.educationBlock[index].universityEng
  })
}

const handleChangeLang = (e) => {
  let lang = document.querySelector('.footer__button_active')
  const btnStyle = e.target
  if (btnStyle.classList.contains('footer__button_active') && lang.classList.contains('footer__button_active')) {
  } else {
    toogleBtns.map((item, index) => {
      item.classList.contains('footer__button_active') ? item.classList.remove('footer__button_active') : item.classList.add('footer__button_active')
    })
  }

  handleSetLanguage()

}


const handleChangeStyle = (e) => {
  console.log('нажал кнопку')
  document.documentElement.classList.toggle('dark')
  
    console.log('светлый стиль')
    document.querySelector('.footer__button-style').classList.toggle('footer__button-style_light')
  

  /*     if(document.documentElement.hasAttribute('theme')){
        document.documentElement.removeAttribute('theme');
      }
      else{
        document.documentElement.setAttribute('theme', 'dark');
      }; */
}

document.addEventListener("DOMContentLoaded", () => {
  handleSetLanguage()
  toogleLang()
  toogleStyle()
})

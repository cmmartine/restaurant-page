import { homePage } from "./modules/home_page";
import { menuPage } from "./modules/menu_page";
import './style.css';
import Crab from './assets/images/crab.png';

(function() {

  const contentDiv = document.getElementById('content');

  (function createHeaderBar() {
    const headerBar = document.getElementById('header');
    const headerTitle = document.createElement('h1');
    const headerImg = new Image();
    const headerLeft = document.createElement('div');
    const headerBtnDiv = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');

    homeBtn.addEventListener('click', changeToHome);
    headerTitle.addEventListener('click', changeToHome);
    menuBtn.addEventListener('click', changeToMenu);

    headerTitle.innerText = 'Shipwreck Bar and Grill';
    headerImg.src = Crab;
    headerImg.alt = 'Crab icon'
    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';

    headerLeft.classList.add('header-left');
    headerTitle.classList.add('header-title');
    headerTitle.classList.add('button');
    headerImg.classList.add('header-icon');
    headerBtnDiv.classList.add('button-div');
    homeBtn.classList.add('button');
    menuBtn.classList.add('button');

    contentDiv.parentNode.insertBefore(headerBar, contentDiv);
    
    headerLeft.append(headerImg, headerTitle);
    headerBtnDiv.append(homeBtn, menuBtn);
    headerBar.append(headerLeft, headerBtnDiv);
  })();

  const createFooter = function() {
    const footerContainer = document.createElement('div');
    const footerLeft = document.createElement('div');
    const footerRight = document.createElement('div');
    const contactTitle = document.createElement('h3');
    const contactInfo = document.createElement('p');
    const imageCredit = document.createElement('p');

    contactTitle.innerText = 'Contact Us';
    contactInfo.innerText = "Email: shipwreck_bar_grill@email.com \n Phone: (555) 555-5555";
    imageCredit.innerText = "Images by: \n freepik.com, \n Hoodh Ahmed";

    footerContainer.classList.add('footer-container');
    footerRight.classList.add('footer-right');
    footerLeft.classList.add('footer-left');

    contentDiv.append(footerContainer);
    footerContainer.append(footerLeft, footerRight);
    footerLeft.append(contactTitle, contactInfo);
    footerRight.append(imageCredit);
  }

  function clearContent() {
    contentDiv.innerText = '';
  }

  function changeToHome() {
    clearContent();
    homePage.assembleContent();
    createFooter();
  }

  function changeToMenu() {
    clearContent();
    menuPage.assembleContent();
    createFooter();
  }

  homePage.assembleContent();
  createFooter();

}());
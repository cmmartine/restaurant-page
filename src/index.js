import { homePage } from "../modules/home_page";
import { menuPage } from "../modules/menu_page";

(function() {

  const contentDiv = document.getElementById('content');

  homePage.assembleContent();

  (function createHeaderBar() {
    const headerTitle = document.createElement('h3');
    const headerBar = document.createElement('div');
    const headerBtnDiv = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');

    homeBtn.addEventListener('click', changeToHome);
    headerTitle.addEventListener('click', changeToHome);
    menuBtn.addEventListener('click', changeToMenu);

    headerTitle.innerText = 'Shipwreck Bar and Grill';
    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';

    contentDiv.parentNode.insertBefore(headerBar, contentDiv);
    headerBar.append(headerTitle, headerBtnDiv);
    headerBtnDiv.append(homeBtn, menuBtn);
  })();

  (function createFooter() {
    const footerContainer = document.createElement('div');
    const contactTitle = document.createElement('h3');
    const contactInfo = document.createElement('p');

    contactTitle.innerText = 'Contact Us';
    contactInfo.innerText = 'shipwreck_bar_grill@email.com';

    insertAfter(contentDiv, footerContainer);
    footerContainer.append(contactTitle, contactInfo);
  })();

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function clearContent() {
    contentDiv.innerText = '';
  }

  function changeToHome() {
    clearContent();
    homePage.assembleContent();
  }

  function changeToMenu() {
    clearContent();
    menuPage.assembleContent();
  }

}());
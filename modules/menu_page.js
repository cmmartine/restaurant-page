export { menuPage };
import SharkAttack from '../src/assets/images/shark-attack.jpg';

const menuPage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    insertImage();
    createTitle();
    createMenuItems();
  }

  function insertImage() {
    const img = new Image();
    const imgContainer = document.createElement('div');
    img.src = SharkAttack;
    img.alt = 'Shark attach drink';
    imgContainer.classList.add('img-container');
    contentDiv.append(imgContainer);
    imgContainer.append(img);
  }

  function createTitle() {
    const menuTitleDiv = document.createElement('div');
    const menuTitle = document.createElement('h1');

    menuTitle.innerText = 'Menu';

    menuTitleDiv.classList.add('content-inner-div');
    menuTitleDiv.classList.add('title');

    contentDiv.append(menuTitleDiv);
    menuTitleDiv.append(menuTitle);
  }

  function createMenuItems() {
    createAppetizers();
    createBoils();
    createDrinks();
  }

  function createAppetizers() {
    const appetizerDiv = document.createElement('div');
    const appetizerTitle = document.createElement('h2');
    const appetizerItemOneTitle = document.createElement('h3');
    const appetizerItemOne = document.createElement('p');
    const appetizerItemTwoTitle = document.createElement('h3');
    const appetizerItemTwo = document.createElement('p');

    appetizerTitle.innerText = 'Appetizers';
    appetizerItemOneTitle.innerText = 'Steamed Oysters';
    appetizerItemOne.innerText = 'Your choice from original cajun, garlic butter, or the Shipwreck special blend';
    appetizerItemTwoTitle.innerText = 'Garlic Bread';
    appetizerItemTwo.innerText = 'Our homemade garlic bread topped with cheese';

    appetizerDiv.classList.add('content-inner-div');

    contentDiv.append(appetizerDiv);
    appetizerDiv.append(appetizerTitle, appetizerItemOneTitle, appetizerItemOne, appetizerItemTwoTitle, appetizerItemTwo);
  }

  function createBoils() {
    const boilsDiv = document.createElement('div');
    const boilsTitle = document.createElement('h2');
    const boilsItemOneTitle = document.createElement('h3');
    const boilsItemTwoTitle = document.createElement('h3');
    const boilsItemThreeTitle = document.createElement('h3');
    const boilsItemOne = document.createElement('p');
    const boilsItemTwo = document.createElement('p');
    const boilsItemThree = document.createElement('p');

    boilsTitle.innerText = 'Seafood Boils';
    boilsItemOneTitle.innerText = 'Cajun Boil';
    boilsItemTwoTitle.innerText = 'Lobster Boil';
    boilsItemThreeTitle.innerText = 'Crab Boil';
    boilsItemOne.innerText = 'Crawfish, Black Mussels, plus Lobster Tail or Shrimp';
    boilsItemTwo.innerText = 'Lobster, Black Mussels, Shrimp';
    boilsItemThree.innerText = 'Snow Crab Legs, Black Mussels, plus Lobster Tail or Shrimp';

    boilsDiv.classList.add('content-inner-div');

    contentDiv.append(boilsDiv);
    boilsDiv.append(boilsTitle, boilsItemOneTitle, boilsItemOne, boilsItemTwoTitle, boilsItemTwo, boilsItemThreeTitle, boilsItemThree)
  }

  function createDrinks() {
    const drinksDiv = document.createElement('div');
    const drinksTitle = document.createElement('h2');
    const drinksItemOneTitle = document.createElement('h3');
    const drinksItemOne = document.createElement('p');
    const drinksItemTwoTitle = document.createElement('h3');
    const drinksItemTwo = document.createElement('p');

    drinksTitle.innerText = 'Drinks';
    drinksItemOneTitle.innerText = 'Shark Attack';
    drinksItemOne.innerText = 'Coconut rum, vodka, blue curacao, lemonade, grenadine, wooden shark';
    drinksItemTwoTitle.innerText = 'Mock Shark Attack';
    drinksItemTwo.innerText = 'Blue Lemonade, grenadine, wooden shark';

    drinksDiv.classList.add('content-inner-div');

    contentDiv.append(drinksDiv);
    drinksDiv.append(drinksTitle, drinksItemOneTitle, drinksItemOne, drinksItemTwoTitle, drinksItemTwo);
  }

  return { assembleContent: assembleContent }
})();
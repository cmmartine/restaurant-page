export { menuPage };
import SharkAttack from '../assets/images/shark-attack.jpg';

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
    appetizerTitle.innerText = 'Appetizers';
    appetizerDiv.append(appetizerTitle);
    appetizerDiv.classList.add('content-inner-div');
    
    const appetizers = [
      {
        'name': 'Steamed Oysters',
        'description': 'Your choice from original cajun, garlic butter, or the Shipwreck special blend'
      },
      {
        'name': 'Crab Cakes',
        'description': 'Jumbo lump crab meat delicately seasoned and broiled or fried'
      },
      {
        'name': 'Garlic Bread',
        'description': 'Our homemade garlic bread topped with cheese'
      }
    ];

    appetizers.forEach(function (app) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = app.name;
      desc.innerText = app.description;
      appetizerDiv.append(name, desc);
    })

    contentDiv.append(appetizerDiv);
  }

  function createBoils() {
    const boilsDiv = document.createElement('div');
    const boilsTitle = document.createElement('h2');
    boilsTitle.innerText = 'Seafood Boils';
    boilsDiv.append(boilsTitle);
    boilsDiv.classList.add('content-inner-div')

    const boils = [
      {
        'name': 'Cajun Boil',
        'description': 'Crawfish, Black Mussels, plus Lobster Tail or Shrimp'
      },
      {
        'name': 'Lobster Boil',
        'description': 'Lobster, Black Mussels, Shrimp'
      },
      {
        'name': 'Crab Boil',
        'description': 'Snow Crab Legs, Black Mussels, plus Lobster Tail or Shrimp'
      }
    ];

    boils.forEach(function (boil) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = boil.name;
      desc.innerText = boil.description;
      boilsDiv.append(name, desc);
    })

    contentDiv.append(boilsDiv);
  }

  function createDrinks() {
    const drinksDiv = document.createElement('div');
    const drinksTitle = document.createElement('h2');
    drinksTitle.innerText = 'Drinks';
    drinksDiv.append(drinksTitle);
    drinksDiv.classList.add('content-inner-div')

    const drinks = [
      {
        'name': 'Shark Attack',
        'description': 'Coconut rum, vodka, blue curacao, lemonade, grenadine, wooden shark'
      },
      {
        'name': 'Mock Shark Attack',
        'description': 'Blue Lemonade, grenadine, wooden shark'
      },
    ];

    drinks.forEach(function (drink) {
      const name = document.createElement('h3');
      const desc = document.createElement('p');
      name.innerText = drink.name;
      desc.innerText = drink.description;
      drinksDiv.append(name, desc);
    })

    contentDiv.append(drinksDiv);
  }

  return { assembleContent: assembleContent }
})();
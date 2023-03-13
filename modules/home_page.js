export { homePage };

const homePage = (function() {

  const contentDiv = document.getElementById('content');

  function assembleContent() {
    createTitle();
    createDescription();
    createHours();
    createLocation();
  }

  function createTitle() {
    const homeTitlediv = document.createElement('div');
    const homeTitle = document.createElement('h1');

    homeTitle.innerText = 'Shipwreck Bar and Grill';

    contentDiv.append(homeTitlediv);
    homeTitlediv.append(homeTitle);
  }

  function createDescription() {
    const descriptionContainer = document.createElement('div');
    const descriptionTitle = document.createElement('h2');
    const homeDescription = document.createElement('p');

    descriptionTitle.innerText = 'About Shipwreck';
    homeDescription.innerText = "Here at Shipwreck we take pride in every meal and drink we create, making sure each meal is packed with flavor and each drink mixed to your liking. Stop by today to try out our specialty seafood boils and ocean inspired cocktails. We look forward to seeing you!"

    contentDiv.append(descriptionContainer);
    descriptionContainer.append(descriptionTitle, homeDescription);
  }

  function createHours() {
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    const hoursDescription = document.createElement('p');

    hoursTitle.innerText = 'Hours';
    hoursDescription.innerText = "Sunday - Thursday: 12pm - 9pm \n\n Friday - Saturday: 12pm - 11pm";

    contentDiv.append(hoursContainer);
    hoursContainer.append(hoursTitle, hoursDescription);
  }

  function createLocation() {
    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h2');
    const locationDescription = document.createElement('p');

    locationTitle.innerText = 'Location';
    locationDescription.innerText = '19 Bay Street, Hammerhead City, NJ'

    contentDiv.append(locationContainer);
    locationContainer.append(locationTitle, locationDescription);
  }

  return { assembleContent: assembleContent }
})();
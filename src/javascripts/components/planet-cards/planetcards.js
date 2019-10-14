import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetcards.scss';
import planetInfoPage from '../planetInfoPage/planetInfoPage';

const planetArray = planets.getPlanets();

const mouseOverEvent = () => {
  $('.planetCard').mouseenter((eventObj) => {
    const hoveredCard = eventObj.target.id;
    for (let j = 0; j < planetArray.length; j += 1) {
      if (hoveredCard === planetArray[j].name) {
        $(`#img${planetArray[j].name}`).show();
      } else if (hoveredCard !== planetArray[j].name) {
        $(`#img${planetArray[j].name}`).hide();
      }
    }
  });
};

const planetNameCard = () => {
  let domString = '<div class="row justify-content-center">';
  for (let i = 0; i < planetArray.length; i += 1) {
    domString += `<div class="col-3 planetCard" id="${planetArray[i].name}"><p>${planetArray[i].name}</p>
    <img src="${planetArray[i].imageUrl}" id="img${planetArray[i].name}"></div>`;
  }
  domString += '</div>';
  utilities.printToDom('planetContainer', domString);
  $('img').hide();
  mouseOverEvent();
};

const closeInfo = () => {
  $(document).click((e) => {
    const clickTarget = e.target.dir;
    if (clickTarget === 'x') {
      planetNameCard();
      planetInfoPage.selectPlanet();
    }
  });
};


export default { planetNameCard, closeInfo };

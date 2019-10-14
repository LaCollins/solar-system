import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetInfoPage.scss';
import closepage from '../closepage/closepage';

const planetArray = planets.getPlanets();


const planetaryInfo = (selectedPlanet) => {
  let domString = '<div id="infoCard">';
  for (let i = 0; i < planetArray.length; i += 1) {
    if (selectedPlanet === `img${planetArray[i].name}`) {
      domString += '<div id="x">X</div>';
      domString += `<h1>${planetArray[i].name}</h1>`;
      domString += `<img src="${planetArray[i].imageUrl}">`;
      domString += `<p>${planetArray[i].description}</p>`;
      if (planetArray[i].isGasPlanet === true) {
        domString += '<h3>Gas Planet</h3>';
      } else {
        domString += '<h3>Rock Planet</h3>';
      }
      domString += `<h3>Number of Moons: ${planetArray[i].numberOfMoons}</h3>`;
      domString += `<h3>Largest Moon: ${planetArray[i].nameOfLargestMoon}</h3>`;
    }
  }
  domString += '</div>';
  utilities.printToDom('planetContainer', domString);
  closepage.closeInfo();
};

const selectPlanet = () => {
  $('.planetCard').click((eventObj) => {
    const selectedPlanet = eventObj.target.id;
    planetaryInfo(selectedPlanet);
  });
};

export default { selectPlanet };

import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './planetcards.scss';


const planetNameCard = () => {
  const planetArray = planets.getPlanets();
  let domString = '<div class="row justify-content-center">';
  for (let i = 0; i < planetArray.length; i += 1) {
    domString += `<div class="col-3 planetCard" id="${planetArray[i].name}"><p>${planetArray[i].name}</p></div>`;
  }
  domString += '</div>';
  utilities.printToDom('planetContainer', domString);
};

export default { planetNameCard };

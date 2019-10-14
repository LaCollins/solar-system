import $ from 'jquery';
import planetcards from '../planet-cards/planetcards';
import planetInfoPage from '../planetInfoPage/planetInfoPage';

const closeInfo = () => {
  $(document).click((e) => {
    const clickTarget = e.target.id;
    if (clickTarget === 'x') {
      planetcards.planetNameCard();
      planetInfoPage.selectPlanet();
    }
  });
};

export default { closeInfo };

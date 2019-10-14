import 'bootstrap';
import '../styles/main.scss';
import planetcards from './components/planet-cards/planetcards';
import planetInfoPage from './components/planetInfoPage/planetInfoPage';

// import planetimages from './components/planet-images/planetimages';

const init = () => {
  planetcards.planetNameCard();
  //   planetimages.mouseOverEvent();
  planetInfoPage.selectPlanet();
};

init();

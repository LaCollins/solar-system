import 'bootstrap';
import '../styles/main.scss';
import planetcards from './components/planet-cards/planetcards';
import planetInfoPage from './components/planetInfoPage/planetInfoPage';
import closepage from './components/closepage/closepage';
import search from './components/search/search';

const init = () => {
  planetcards.planetNameCard();
  planetInfoPage.selectPlanet();
  closepage.closeInfo();
  search.printSearch();
  search.search();
};

init();

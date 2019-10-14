import $ from 'jquery';
import planetcards from '../planet-cards/planetcards';

const closeInfo = () => {
  $('#x').click(() => {
    planetcards.planetNameCard();
  });
};

export default { closeInfo };

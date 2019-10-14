import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import planets from '../../helpers/data/planets';
import './search.scss';

// const planetArray = planets.getPlanets();

const printSearch = () => {
  const domString = '<input id="myInput" type="text" placeholder="Search..">';

  utilities.printToDom('search', domString);
};

const search = () => {
  $(document).ready(() => {
    $('#myInput').keyup(() => {
      const value = $('#myInput').val();
      $('.planetCard').hide();
      $(`.planetCard:contains("${value}")`).closest('.planetCard').show();
      console.log(value);
    });
    if ($('#myInput').val() === 'Search..') {
      $('.planetCard').show();
    }
  });
};

export default { printSearch, search };

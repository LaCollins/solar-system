import $ from 'jquery';
import utilities from '../../helpers/utilities';
import planets from '../../helpers/data/planets';
import './search.scss';

const planetArray = planets.getPlanets();

const printSearch = () => {
  const domString = '<input type="text" placeholder="Search"><button type="submit">Search</button>';

  utilities.printToDom('search', domString);
};

const search = () => {
  $('button').click(() => {
    const searchValue = $('input[type=text]').val();
    console.log($.inArray(searchValue, planetArray));
  });
};

export default { printSearch, search };

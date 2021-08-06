const fetchData = async (query, direction) => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
     if (query) {
                url = url + `?pokemon=${query}&direction=${direction}`;
            } else if (type) {
                url = url +
            }
    let response = await fetch(url);
    let {results} = await response.json();
    console.log(results);
    return results;

}; 
export default fetchData


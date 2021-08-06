const fetchData = async (query) => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
     if (query) {
                url = url + `?pokemon=${query}`;
            }
    let response = await fetch(url);
    let {results} = await response.json();
    console.log(results);
    return results;

}; 
export default fetchData


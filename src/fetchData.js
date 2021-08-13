const fetchData = async (query, direction, type, page) => {

    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    let params = new URLSearchParams();
     if (query) {
                params.set('pokemon', query)
            } 
            if (type) {
                params.set('type_1', type)
            }
            if (direction) {
                params.set('direction', direction)
                params.set('sort', 'pokemon')
            }
            if (page) {
                params.set('page', page)
            }
            url = `${url}?${params.toString()}`
            // else if (type) {
            //     url = url +
            // }
    let response = await fetch(url);
    let results = await response.json();
    console.log(results);
    return results;

}; 
export default fetchData


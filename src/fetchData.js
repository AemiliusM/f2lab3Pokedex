const fetchData = async () => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    console.log(url);
     if (this.state.query) {
            url = url + `?search=${this.state.query}`;
        }
    let response = await fetch(url);
    let {results} = await response.json();
    
    return results;
}; 
export default fetchData
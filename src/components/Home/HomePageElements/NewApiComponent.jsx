import React from 'react'
import { useEffect } from 'react'

const apiInfo = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars',
  params: { limit: '10', page: '0' },
  headers: {
    'X-RapidAPI-Key': '1a04c9bf10mshc0ee6b403e14ab8p1e0a98jsnf29149217dba',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
};

const apiInfoString = JSON.stringify(apiInfo);

axios.request(JSON.parse(apiInfoString)).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
              
const NewApiComponent = () => {

    const searchCars = async(model) => {
        const response = await fetch(`${apiInfo}?make=${carMake}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchCars('Toyota')
    }, []);

    return (
        <h1>Test</h1>
    );
}

export default NewApiComponent
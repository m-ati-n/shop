import axios from 'axios'

const BASE_URL = "https://fakestoreapi.com";

const getProducts = async() => {
    let products;
    await axios.get(`${BASE_URL}/products`)
                .then(response => {
                    products = response.data
                })
                .catch(error => {products = ""})
                return products;
                
}
export {getProducts}
import axios from 'axios';

const Products = axios.create({    
    baseURL: "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
    headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    }
});

const clients = {
    Products: Products    
}

export default clients;
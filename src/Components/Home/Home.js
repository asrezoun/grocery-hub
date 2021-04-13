import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-dawn-84884.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

   // console.log("pr ",products);
    return (
        <div className="container py-5">
            <div className="row">
                {
                     products.length===0 && 
                    <span className="spinner"><CircularProgress /></span>
                }
                 {products.map(product => <Products pd={product} key={product._id}></Products>)} 
            </div>
        </div>
    );
};

export default Home;
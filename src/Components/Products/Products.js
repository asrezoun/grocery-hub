import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';
const Products = (props) => {
    console.log(props);

    const { _id, productName, price, weight, image } = props.pd;
    const history = useHistory();
    const handleLoadProduct = (id)=>{
        history.push(`/checkout/${id}`);
    }
    //console.log(productName)

    return (
        <div className="col-md-4 py-2">
            <div className="card" style={{ width: '16rem', height: '18rem' }}>
                <div className="card-body">
                    <img src={image} className="img" alt="" />
                    <h5 className="card-title">{productName + " " + weight}</h5>

                </div>
                <div className="d-flex justify-content-between card-footer footer">
                    <h5 className="pt-2"><strong>${price}</strong></h5>
                    <button className="btn btn-primary" onClick={() =>handleLoadProduct(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css';
const Checkout = () => {

    const { id } = useParams();
    console.log("id is",id);

    const [singleData, setSingleData] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch(`http://localhost:8000/singleProduct/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setSingleData(data)});
    // },[])
    useEffect(() =>{
        fetch(`https://frozen-dawn-84884.herokuapp.com/singleProduct/${id}`)
        .then(res => res.json())
        .then(data=>{
            setSingleData(data);
        })
    },[])

    console.log(singleData.productName);
    const {productName,weight,price}=singleData;
    console.log(productName);

    const handleCheckOut = ()=>{
        const orderDetails = {
            email: loggedInUser.email,
            productName: productName,
            weight,
            price,
            orderDate: new Date()

        }
        const url = 'https://frozen-dawn-84884.herokuapp.com/placeOrder';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        }).then(res=>{
            console.log("checkout response", res);
            alert("Dear valued Customer, your order is placed!");});
        
        console.log(orderDetails);
        //alert("Dear valued Customer, your order is placed!")
    }
    return (
        <div className="container singleProduct">
            
            <Table className="table" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                        <td><button onClick={handleCheckOut}class="btn btn-primary">Checkout</button></td>
                    </tr>
                    
                </tbody>
            </Table>
        </div>
    );
};

export default Checkout;
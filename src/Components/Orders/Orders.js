import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [orderData, setOrderData] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://frozen-dawn-84884.herokuapp.com/orderList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrderData(data));
    }, [])

    console.log(orderData);
    return (
        <div className="container">
            <div className="d-flex justify-content-center py-5">
                <div>
                    <h3>Dear Valued Customer <span style={{color: 'blue'}}>{loggedInUser.name}</span></h3>
                    <h4 className="d-flex justify-content-center">Your Order List</h4>
                </div>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Date of Order</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map( product => <ProductTable pd={product} key={product._id}></ProductTable>)} */}
                    {orderData.map(order => <OrderList pd={order} key={order._id}></OrderList>)}

                </tbody>
            </Table>
        </div>
    );
};

export default Orders;
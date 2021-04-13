import React from 'react';

const OrderList = (props) => {

    const {productName, weight, price, orderDate} = props.pd;
    return (
        <tr>
        <td>{productName}</td>
        <td>{weight}</td>
        <td>$ {price}</td>
        <td>{new Date(orderDate).toDateString('dd/MM/yyyy')}</td>
    </tr>
    );
};

export default OrderList;
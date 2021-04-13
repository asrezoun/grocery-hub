import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';

const ProductTable = (props) => {

    const {productName, price, weight, _id} = props.pd;

    const handleDelete = (id,event) => {
        console.log("event",event.target.parentNode.parentNode.parentNode.parentNode);
        fetch(`https://frozen-dawn-84884.herokuapp.com/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(response =>response.json())
        .then(result=>{
            console.log("deleted successfully",result);
            event.target.parentNode.parentNode.style.display = 'none';
        });
    }
    return (
            <tr>
                <td>{productName}</td>
                <td>{weight}</td>
                <td>$ {price}</td>
                <td><button className="btn btn-dark" onClick={(event) =>{handleDelete(_id,event)}}>Delete</button></td>
            </tr>
        
    );
};

export default ProductTable;
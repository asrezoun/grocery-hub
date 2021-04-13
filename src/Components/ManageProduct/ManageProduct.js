import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductTable from '../ProductTable/ProductTable';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
const ManageProduct = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://frozen-dawn-84884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className="container">
            <div className="row p-5">

                <div className="col-md-3 leftBlock">
                    <div className="routeList">
                        <Link to="/manageProducts">
                            <h6 className="manage"> <AddBoxIcon/> Manage Products</h6>
                        </Link>
                        <Link to="/admin">
                            <h6 className="manage"><SettingsApplicationsIcon/> Add Products</h6>
                        </Link>
                    </div>
                </div>


                <div className="col-md-8">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(product => <ProductTable pd={product} key={product._id}></ProductTable>)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
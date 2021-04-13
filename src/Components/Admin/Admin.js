import React from 'react';
import './Admin.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../grocery.jpg';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
const Admin = () => {

    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const productData = {
            productName: data.productName,
            price: data.price,
            weight: data.weight,
            image: imageUrl
        }

        const url = `https://frozen-dawn-84884.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        }).then(res => {
            console.log("server response", res);
            alert("Product added successfully!");
        })
        console.log(productData);
    }

    const handleUploadImage = (event) => {
        console.log("image:: ", event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '4162808f7121f692d2f8c33176126b9d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                console.log(setImageUrl(response.data.data.display_url));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="bg" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${image}')` }}>
        <div className="container">
            <div className="row py-5">
            <div className="col-md-3 leftBlock">
                <div className="routeList py-5">
                    <Link to="/manageProducts">
                        <h6 className="manage"> <SettingsApplicationsIcon/> Manage Products</h6>
                    </Link>
                    <Link to="/admin">
                        <h6 className="manage"> <AddBoxIcon/>  Add Products</h6>
                    </Link>
                </div>
            </div>
            <div className="col-md-8">
                <div className="form p-5 m-5">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label" htmlFor="productName">Product Name: </label>
                        <input className="form-control" name="productName" placeholder="Name of Product" ref={register({ required: true })} />
                        {errors.pickFrom && <span className="error">This field is required</span>}

                        <label className="form-label" htmlFor="price">Price: </label>
                        <input className="form-control" name="price" placeholder="Add price" ref={register({ required: true })} />
                        {errors.pickTo && <span className="error">This field is required</span>}

                        <label className="form-label" htmlFor="weight">Weight: </label>
                        <input className="form-control" name="weight" placeholder="weight" ref={register({ required: true })} />
                        {errors.pickTo && <span className="error">This field is required</span>}

                        <input className="form-control" type="file" onChange={handleUploadImage} name="" id="" />

                        <input className="form-control btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Admin;
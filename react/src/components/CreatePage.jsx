import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CreatePage.css";
export const Forms = () => {
    const [formData,setFormData] = useState({
        name:"",
        city:"",
        adress:"",
        capacity:"",
        cost:"",
        verified:"",
        rating:"",
        image:""


    });

    const handleChange = (e) =>{
        // console.log(e.target.value);
        
        const {id,value} = e.target;
        setFormData({
            ...formData,
            [id] : value
        }) 


    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        axios.post("http://localhost:8080/create",formData).then(()=>{
            alert("user created");
            setFormData({
                name:"",
                    city:"",
                    adress:"",
                    capacity:"",
                    cost:"",
                    verified:"",
                    rating:"",
                    image:""
            })
        });
    };

    return (
        <form className="table">
            <input value={formData.name} id="name" type="text" onChange={handleChange} placeholder="enter name"/>
            <input value={formData.city} id="city" type="text" onChange={handleChange} placeholder="enter city"/>
            <input value={formData.adress} id="adress" type="text" onChange={handleChange} placeholder="enter Address"/>
            <input value={formData.capacity} id="capacity" type="text" onChange={handleChange} placeholder="enter capacity"/>
            <input value={formData.cost} id="cost" type="text" onChange={handleChange} placeholder="enter cost per day"/>
            <input value={formData.verified} id="verified" type="text" onChange={handleChange} placeholder="enter verified"/>
            <input value={formData.rating} id="rating" type="text" onChange={handleChange} placeholder="enter Rating"/>
            <input value={formData.image} id="image" type="text" onChange={handleChange} placeholder="enter image url"/>
            <input  id="" onClick={handleSubmit} type="submit"/>
        </form>
    )
}





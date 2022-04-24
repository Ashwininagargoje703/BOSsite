import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SortButtons } from "./SortingButtons";
import "./ListPage.css";



export const List = () =>{
    const [list,setList] = useState([]);
    const [create,setCreate] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/create").then(({data})=>{
        setList(data);
        })
    },[])
    const {id} = useParams();

    const handleSort = (parameter, value) => {
        setCreate({ parameter, value });
        };

    return(
        <div>
            
            <SortButtons
     handleSort={handleSort}
     />
    

            <table className="table" border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>city</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Cost per day</th>
            <th>Verified</th>
            <th>Rating</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {list.map((pethouse, index) => {
            return (
              <tr key={pethouse.id} className="pethouseDetails">
                <td className="pethouseId">{pethouse.id}</td>
                <td className="petownersName">{pethouse.name} </td>
                <td className="Petcity">{pethouse.city}</td>
                <td className="address">{pethouse.adress}</td>
                <td className="petCapacity">{pethouse.capacity}</td>
                <td className="petCost">{pethouse.cost}</td>
                <td className="verified">{pethouse.verified}</td>
                <td className="rating">{pethouse.rating}</td>
                <td className="Image">
                  <img src={pethouse.image} alt="dogImage" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


        </div>
    )
}


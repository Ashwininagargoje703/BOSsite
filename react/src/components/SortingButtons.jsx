import "./SortingButtons.css";
export const SortButtons = ({handleSort})=>{
    
    return (
    <div>
        <button className="aax1" onClick={()=>{handleSort("city",1)}}>city(A-Z)</button>
     <button  className="aax2" onClick={()=>{handleSort("city",-1)}}>city(Z-A)</button>
     <button   className="aax3" onClick={()=>{handleSort("verified",1)}}>verified(A-Z)</button>
     <button   className="aax4" onClick={()=>{handleSort("verified",-1)}}>verified(Z-A)</button>
     <button  className="aax5" onClick={()=>{handleSort("cost",1)}}>cost(A-Z)</button>
     <button  className="aax6"  onClick={()=>{handleSort("cost",-1)}}>cost(Z-A)</button>
    </div>
    )
}
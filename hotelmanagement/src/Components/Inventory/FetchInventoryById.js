import React from 'react';
import { useSelector } from 'react-redux';
import { getInventoryId } from '../../store/actions/InventoryActions';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import image1 from '../../images/inventory.jpg'
import { deleteInventoryById } from '../../store/actions/InventoryActions';
import { useNavigate } from 'react-router-dom';
function FetchInventoryById()
{
const inventory=useSelector(state =>state.inventoryReducer.inventory)
const{id}=useParams();
const dispatch=useDispatch();
const navigate = useNavigate();

const fetchInventoryById=() =>{
    dispatch(getInventoryId(id));
}
useEffect(fetchInventoryById,[id]);

const deleteInventoryDetails =() =>{
    let action =window.confirm("Are you sure! you want to delete this inventory ?")
    if(action)
    {
    dispatch(deleteInventoryById(id));
    alert("Inventory delete successfully");
    navigate(-1)
    }
}
return(
    <div>
        {
            inventory!==null&&
            <div className="row">
                <div className="col">
                <img src={image1} alt="Card image" style={{height:"350px"}}/>
                </div>
                
                <div className="col">
                    <h2>Inventory Details</h2>
                    <p>ID:{inventory.inventoryId}</p>
                    <p>Type:{inventory.inventoryType}</p>
                    <p>Name:{inventory.inventoryName}</p>
                    <p>Stock:{inventory.inventoryStock}</p>
                    <Link to={`/inventory/update/${inventory.inventoryId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                    <button onClick={deleteInventoryDetails} style={{ float: "middle" }} className="btn btn-danger">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
        }
        <br></br><br></br><div>
                <Link to="/inventory/all" className="btn btn-secondary">Back to list of inventories</Link>
            </div>
    </div>
)
}

export default FetchInventoryById;
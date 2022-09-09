import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeInventory } from "../../store/actions/InventoryActions";
function UpdateInventory()
{
const inventory=useSelector(state => state.inventoryReducer.inventory)
const navigate=useNavigate();
const dispatch=useDispatch();
const [formErrors, setFormErrors] = useState({})
const [iId, setIId]=useState(inventory.inventoryId);
const [iType, setIType]=useState(inventory.inventoryType);
const [iName, setIName]=useState(inventory.inventoryName);
const [iStock, setIStock]=useState(inventory.inventoryStock);
const updateInventory=useSelector(state => state.inventoryReducer.updateInventory)
const handleSubmit=() =>{
    let error={};
    if(!iType)
    {
        error['iTypeError']=" Please enter Inventory type"
    }
    if(!iName)
    {
        error['iNameError']=" Please enter Inventory Name"
    }
    if(!iStock)
    {
        error['iStockError']=" Please enter Stock"
    }
    setFormErrors(error);
        const noError = Object.keys(error).length === 0;
        if(noError)
        {
            const payload ={
                inventoryName:iName,
                inventoryType:iType,
                inventoryStock:iStock
            }
            dispatch(changeInventory(payload));
           
            
        }
}
return(
    <div className='inventoryUpdate' align="center">
    <div className='updateInventoryContainer col-sm-4 row-top-vertical'>
    <h2>Edit your Inventory details here!!!</h2><br></br>
    
                <div className="form-group">
                    <label htmlFor='iId'>Inventory Id</label>
                    <input type="text" className="form-control" name="iId" value={iId} disabled />

                </div>
   
    <div className="form-group">
    <label htmlFor='iType'>Inventory Type</label>
            {
                formErrors.iTypeError &&
                <div style={{ color: 'red' }}>{formErrors.iTypeError}</div>
            }
            <input type="text" className="form-control" name="iType" required value={iType} onChange={v => setIType(v.target.value)} />
    </div>
    <div className="form-group">
    <label htmlFor='iName'>Inventory Name</label>
            {
                formErrors.iNameError &&
                <div style={{ color: 'red' }}>{formErrors.iNameError}</div>
            }
            <input type="text" className="form-control" name="iName" required value={iName} onChange={v => setIName(v.target.value)} />
    </div>
    <div className="form-group">
    <label htmlFor='iStock'>Inventory Stock</label>
            {
                formErrors.iStockError &&
                <div style={{ color: 'red' }}>{formErrors.iStockError}</div>
            }
            <input type="text" className="form-control" name="iStock" required value={iStock} onChange={v => setIStock(v.target.value)} />
    </div>
    <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>
                <div style={{ float: "right" }}>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Go back</button>
                </div>
    </div>
    </div>
)
}
export default UpdateInventory;
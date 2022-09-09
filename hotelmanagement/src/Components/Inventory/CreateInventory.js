import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInventory } from '../../store/actions/InventoryActions';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function CreateInventory()
{
 const[iType, setIType]=useState("");
 const[iName, setIName]=useState("");
 const[iStock, setIStock]=useState("");
 const [formErrors, setFormErrors] = useState({})
 const newInventory=useSelector(state => state.inventoryReducer.newInventory)
 const dispatch=useDispatch();

 const handleSubmit =() => {
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
            dispatch(addInventory(payload));
            if(newInventory!==null)
            {
                alert("inventory added")
            }
        }
 }
 return(
    <div className='inventoryAdd' align="center">
    <div className='addRoomContainer col-sm-4 row-top-vertical'>
    <h2> Inventory Form</h2>
    {/* {
        newInventory!==null &&
        swal("Inventory saved")
    } */}
   
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
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
                <br></br><br></br><div>
                <Link to="/inventory/all" className="btn btn-secondary">Back to list of Inventories</Link>
            </div>
    </div>
    </div>
 )

}
export default CreateInventory;
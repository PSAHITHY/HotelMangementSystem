import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventories } from "../../store/actions/InventoryActions";
import img1 from '../../images/inventory.jpg'
import { Link } from "react-router-dom";

function FetchAllInventories()
{
    const inventories=useSelector(state => state.inventoryReducer.inventories)
    const dispatch=useDispatch();
    const myFunction =() =>{
        dispatch(getAllInventories())
    };
    useEffect(() => {
        myFunction();
    },[])

    return(
        <div className="app-container">
            <div class="row">
                {
                    inventories.length > 0 &&
                    inventories.map((i, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/inventory/find/${i.inventoryId}`}>
                                <div className="card h-100" style={{ width: "150px", height: "150px" }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{i.inventoryName}</h4>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    )

                }
                </div>
        </div>
    )
}
export default FetchAllInventories;
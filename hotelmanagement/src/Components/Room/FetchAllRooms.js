import React ,{useEffect}from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllRooms } from "../../store/actions/RoomActions";
import room from '../../images/room.jpg'
import { Link } from "react-router-dom";
function FetchAllRooms()
{
const rooms= useSelector(state => state.roomReducer.rooms)
const dispatch = useDispatch();
    const myFunction = () => {
        dispatch(getAllRooms())
    };
    useEffect(() => {
        myFunction();
    }, [])

    return(
       <div className="getAllRooms">
        <div class="row">
                {
                    rooms.length > 0 &&
                    rooms.map((r, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/room/find/${r.roomId}`}>
                                <div className="card h-100" style={{ width: "150px", height: "150px" }}>
                                    <img className="card-img-top" src={room} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{r.roomNo}</h4>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    )

                }
                
            </div> <br></br><br></br><div>
                <Link to="/manager/dashboard" className="btn btn-secondary">Back</Link>
                </div>
       </div>
    )

}
export default FetchAllRooms;
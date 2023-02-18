import React from "react";
import { useDispatch} from "react-redux";
import { useLocation} from "react-router-dom";
import './product_car_admin.css'


const ProductCarAdmin = ({props})=> {


    const { id, name, brand, price, image} = props



const dispatch = useDispatch()
const location = useLocation()

let defaultImage = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

const stopProduct= (id) => {
id
}


return (
    <div  className= "table table-responsive table-sm mx-auto">
          <table className="table table-sm table-hover">
                <tbody>
                  <tr>
                  <th scope="row" className="col-1 text-center small fw-bold">{id}</th>
                    <td scope="row" className="col-2 small fw-bold"><img className="imgDashboard" src={image || defaultImage} alt= {`${id} ${brand} ${name}`}/></td>
                    <td scope="row" className="col-2 small fw-bold">{name}</td>
                    <td scope="row" className="col-2 small fw-bold">{brand}</td>
                    <td scope="row" className="col-1 small fw-bold">${price}</td>
                    <td scope="row" className="col-3 small fw-bold">
                        <button onClick={()=> {stopProduct}} className="btn btn-danger small">STOP</button>
                        <button className="btn btn-info small">EDIT</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
)
}


export default ProductCarAdmin;

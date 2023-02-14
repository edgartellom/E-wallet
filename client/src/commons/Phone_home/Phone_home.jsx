import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";
import Product_Card from "../../components/Product_Card/Product_Card";

const Phones_home= ()=>{
const dispatch = useDispatch()
let loading = useSelector((store) => store.product.status);
const currentPage = useSelector(store => store.paginated.currentPage)
let list= useSelector((store)=>store.product.list)
let phones= [...list]

useEffect(()=> {
   if(!list.length) dispatch(getProductList())}
, [])

const phonesPerPage = 3;
  const indexLastPhone = currentPage * phonesPerPage;
  const indexFirstPhone = indexLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexFirstPhone, indexLastPhone);


return(

<div>

<div>
      
      <div>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {loading === "loading" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              alt="Loading..."
            />
          ) : currentPhones && currentPhones.length > 0 ? (
            currentPhones.map((phone) => {
              return <Product_Card key={phone.id} props={phone} />;
            })
          ) : (
            <p className="text-center">No se hallaron coincidencias</p>
          )}
        </div>
      </div>
      
    </div>

</div>




)




}



export default Phones_home




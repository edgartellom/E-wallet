import {React, useState,useEffect } from "react";
import Product_Card from "../product_card/product_card";
import NotFound from "../not_found/not_found";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productList.slice";
import { Paginated } from "../paginated/paginated";


function Products_List() {
  const dispatch = useDispatch();
  let loading = useSelector((store) => store.product.status);


  const currentPage = useSelector(store => store.paginated.currentPage)
  let list = useSelector((store) => store.product.list);
  let phones = [...list];
  console.log(phones);
  console.log(currentPage)

  const [phonesPerPage, changeCurrentPage]  = useState(2);
  const indexLastPhone = currentPage * phonesPerPage;
  const indexFirstPhone = indexLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexFirstPhone, indexLastPhone);
  console.log(currentPhones)

  const paginated = (pageNumber) => {
   changeCurrentPage (pageNumber);
  };




  useEffect(() => {
    if (!phones.length) dispatch(getProductList());
  }, []);

  
  return (
    <div>
      
      {<Paginated 
      phones={phones.length}
       phonesPerPage={phonesPerPage}
       paginado={paginated} 
       setCurrentPage={changeCurrentPage}/>}
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
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products_List;

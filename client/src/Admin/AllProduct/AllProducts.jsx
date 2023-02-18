import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";
import { Paginated } from "../../components/Paginated/Paginated";
import changeCurrentPage from "../../redux/slices/paginationSlice";
import ProductCarAdmin from "./ProductCarAdmin";


const AllProducts = () => {
  const dispatch = useDispatch()
  let loading = useSelector((store) => store.product.status)

 
  


  const currentPage = useSelector(store => store.paginated.currentPage)
  let products = useSelector((state) => state.product.allProducts);
  let phones = [...products];

  

  const phonesPerPage = 20;
  const indexLastPhone = currentPage * phonesPerPage;
  const indexFirstPhone = indexLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexFirstPhone, indexLastPhone);

  const paginated = (pageNumber) => {
    changeCurrentPage(pageNumber);
  };




  React.useEffect(() => {
    if (!phones.length) dispatch(getProductList());
  }, []);

  //console.log("phones", phones.length)

  

return (
  <div className="d-block text-center">
      <h2 className="bg-light fw-bold mb-5 p-3"> ALL PRODUCTS</h2>
      <div  className= "table table-responsive table-sm mx-auto">
          <table className="table table-sm table-hover bg-light">
                <thead>
                <tr>
                <th scope="col" className="col-1 text-center small fw-bold">ID</th>
                  <th scope="col" className="col-2  fw-bold">Imagen</th>
                  <th scope="col" className="col-2  fw-bold">Name</th>
                  <th scope="col" className="col-2  fw-bold">Brand</th>
                  <th scope="col" className="col-1  fw-bold">Price</th>
                  <th scope="col" className="col-3  fw-bold">Action</th>
                </tr>
                </thead>
          </table>
      </div>
      <div>
        <div className="row row-cols-lg-12 justify-content-center">
          {loading === "loading" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              alt="Loading..."
            />
          ) : currentPhones && currentPhones.length > 0 ? ( 
            currentPhones.map((phone) => {
              return (<div>
                <ProductCarAdmin key={phone.id} props={phone}/>
                </div>)
            })
          ) : (
            <p className="text-center">No se hallaron coincidencias</p>
          )}
        </div>
      </div>
      {<Paginated phones={phones.length} phonesPerPage={phonesPerPage} />}
    </div>
  );
}


export default AllProducts;


/*
<Product_Card  key={phone.id} props={phone} />

*/


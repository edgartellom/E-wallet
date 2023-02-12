import Products_List from "../../components/Products_List/Products_List";
import { useDispatch,useSelector } from "react-redux";
import { getProductList } from "../../redux/slices/productListSlice";


const ProductsPage =()=>{
    const dispatch=useDispatch();
    let search = useSelector(store=>store.product.searchWords)

    // if (search.length === 0){
    //     dispatch(getProductList())
    // }

    return (
        <>
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <Products_List />
        </div>
        </section>
        </>
    )
}

export default ProductsPage;
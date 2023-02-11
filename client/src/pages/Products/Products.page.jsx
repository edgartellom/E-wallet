import Products_List from "../../components/products_list/products_list";
import { useDispatch,useSelector } from "react-redux";
import { getProductList } from "../../redux/Slices/ProductList.slice";


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
            <Products_List></Products_List>
        </div>
        </section>
        </>
    )
}

export default ProductsPage;
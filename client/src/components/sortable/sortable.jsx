
import { useDispatch, useSelector } from "react-redux";
import { sortList, getProductList, filterByCategory, resetCategories, updateSearchWords } from "../../redux/slices/productListSlice";
import { fetchCategories } from "../../redux/slices/CategoryListSlice";
import { useEffect, useState } from "react";

const Sortable = () => {

    const dispatch = useDispatch();
    const search = useSelector(store => store.product.searchWords);
    const result = useSelector(store => store.product.list);
    const categories= useSelector(store => store.categories.list);
    const [select, setSelect]=useState('');
    const [catSelect,setCatSelect]=useState('');

    useEffect(() => {
        dispatch(fetchCategories());
    },[])

    const sortHandle = (e) => {
        dispatch(sortList(e.target.value));
        setSelect(e.target.value);

    }

    const catHandle = (e) => {
        let idcat=e.target.value;
        let category = categories.find(i=>i.id==idcat);
        setCatSelect(idcat);
        if(category) {
            dispatch(filterByCategory(category.name));
        }else{
            dispatch(resetCategories())
        }

        setSelect('');
    }

    const sortRefresh = () => {
        dispatch(getProductList());
        dispatch(updateSearchWords(''));
        setSelect('');
        setCatSelect('')
    }

    return (<>
        <section className="container">
            <div className="row p-2">
                <div className="col">
                    <h4>{search}</h4>
                    <p className="text-muted">results: <span>{result.length}</span></p>

                </div>
                <div className="col">

                    <div className="input-group input-group-sm mb-1">
                        <button onClick={sortRefresh} className="btn btn-secondary"
                        alt="Refresh"
                        data-bs-toggle="tooltip" 
                        title="Refresh"
                        >
                            <i className="bi bi-arrow-repeat"></i>
                        </button>
                        <span className="input-group-text">
                            Order by:
                        </span>
                        <select className="form-control text-center" onChange={(sortHandle)} value={select} >
                            <option value="">--</option>
                            <option value="lp">Lower price</option>
                            <option value="hp">Higher price</option>
                        </select>
                        <span className="input-group-text">
                            Categories:
                        </span>
                        <select className="form-control text-center" onChange={catHandle} value={catSelect}>
                            <option value="">--</option>
                            {
                               categories && categories.length>0 ?( categories.map((i)=>{
                                    return (
                                        <option  key={i.id} value={i.id} >
                                            {i.name}
                                        </option>
                                    )
                                })
                               ):(<></>)
                            }
                        </select>
                    </div>

                </div>
            </div>
        </section>

    </>)
}

export default Sortable;
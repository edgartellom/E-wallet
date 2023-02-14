import { useDispatch, useSelector } from "react-redux";
import { sortList } from "../../redux/slices/productListSlice";
import { useState } from "react";

const Sortable = () => {

    const dispatch = useDispatch();
    const search = useSelector(store => store.product.searchWords);
    const result = useSelector(store => store.product.list);


    const sortHandle=(e)=>{
        dispatch(sortList(e.target.value));
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
                        <span className="input-group-text">
                            Order by:
                        </span>
                        <select className="form-control" default value = "" onChange={(e)=>sortHandle(e)} >
                            <option value="" disabled>Select a sort</option>
                            <option value="lp">Lower price</option>
                            <option value="hp">Higher price</option>
                        </select>
                    </div>

                </div>
            </div>
        </section>

    </>)
}

export default Sortable;
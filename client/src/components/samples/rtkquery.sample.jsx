import { useGetCartsQuery } from "../../services/cart.query"


const CartSample = ()=>{
    const userid= '5AVwG4DKkvgdaA8taqkLlVEQYPS2'

    const {data: Cart, isLoading, isError, error} = useGetCartsQuery(userid);

    
     if(isLoading) return <div > Loading ..</div>
    else if(isError) return <div>Error: {error.message}</div>
    return (
        <ul>
            {Cart.map((i)=>(
                <li key={i.id}>
                    {i.totalPrice}
                </li>
            ))}
        </ul>
    )

}

export default CartSample;
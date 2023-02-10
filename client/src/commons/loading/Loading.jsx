import React from "react";
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../../FireBase/Firebase";

 const handleOnClick= async ()=>{
const googleProvider= new GoogleAuthProvider()
await singInWithGoogle(googleProvider)

}
async function singInWithGoogle(googleProvider){
    try{
        const res= await signInWithPopup (auth , googleProvider)
    }
    catch(error){
        console.log(error)
    }
}


const Loading=()=>{
     return(
       <div>
        <button onClick={handleOnClick} > loading</button>
       </div>
     )
}


export default Loading





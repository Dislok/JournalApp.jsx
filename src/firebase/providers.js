import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const provider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{
    try{
        const result = await signInWithPopup(FirebaseAuth, provider)
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        console.log({credentials});
    }
    catch (error){

    }
}
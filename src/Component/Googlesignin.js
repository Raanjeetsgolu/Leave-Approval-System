import React from 'react'
import { firebase } from './firebase'

const Googlesignin = () => {
    const singhin=()=>{
        var google_provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{  console.log(re) })
        .catch((err)=>{
            console.log(err);

        })
    }
    return (
        <div>
            <button onClick={singhin}>Sign in With Google</button>
        </div>
    )
}

export default Googlesignin

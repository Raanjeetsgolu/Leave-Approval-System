import React,{useState} from 'react'
import { getAuth ,RecaptchaVerifier,signInWithPhoneNumber} from '@firebase/auth';

const Phoneauth = () => {
    
    const [phoneNumber, setphoneNumber] = useState()
    


        const auth = getAuth();
        const onSignInSubmit=()=>{

        
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log('captcha resolve')
        onSignInSubmit();
    }
    }, auth);

    const appVerifier = window.recaptchaVerifier;

    
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let code=prompt("type the code");
      confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      console.log(`not the right number${error}` )
    });
}
    return (
        <div>
            <from onsubmit={onSignInSubmit}>
                <input type="number" onChange={(e)=>setphoneNumber(e.target.value)}/>
                <button type="submit"> Submit</button>
            </from>
        </div>
    )
}


export default Phoneauth

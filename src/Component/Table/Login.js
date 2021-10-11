// import React,{useState}from 'react'
// import './Login.css'
// import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
// import { auth } from '../firebase';

// const Login=()=>{
//    const [phone, setphone] = useState()

   

// window.recaptchaVerifier = new RecaptchaVerifier('recaptch-conatiner', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     console.log("User Login")
    
//     onSignInSubmit();
//   }
// }, auth);

    
//     const onSignInSubmit= (e)=>{
//       e.preventDefault();
//     const phoneNumber = +911234567890;
// const appVerifier = window.recaptchaVerifier;


// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       const code=prompt("put the confimantion code");
     
//       // eslint-disable-next-line
//        confirmationResult.confirm(code)
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       console.log(error)
//       console.log("Sms sent")
//     });
//   }
//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <div id="recaptcha-container"></div>
//             <form onSubmit={onSignInSubmit}>
//                 <div className=""></div>
//                 <label >Mobile Number
//             <input type="number" id="mobile_number" placeholder="Type your phone number"  value={phone} onChange={(e)=>setphone(e.target.value)} />
//             </label> <label>Password
//             <input type="password" placeholder="type your password" id="password" /></label>
//             <button type="submit">submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login;

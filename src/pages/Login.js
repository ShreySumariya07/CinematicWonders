import React,{useState} from 'react';
import '../assets/css/login.css';
import { useHistory } from 'react-router';
import {FaUser,FaLock,FaGithub,FaLinkedin,FaInstagram,MdEmail} from 'react-icons/all';

const Login = () =>{

    //for history purpose
    const history = useHistory();

    // useState for slider
    const [changeToSignUp,setChangeToSignUp] = useState(false);


    // useState for sign-in purpose
    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const [isInvalidLoginEmail,setIsInvalidLoginEmail] = useState(false);
    const [isInvalidLoginPassword,setIsInvalidLoginPassword] = useState(false);

    // useStates for sign-up purpose
    const[registerEmail,setRegisterEmail] = useState('');
    const[registerFirstName,setRegisterFirstName] = useState('');
    const[registerLastName,setRegisterLastName] = useState('');
    const[registerPassword,setRegisterPassword] = useState('');
    const[registerConfirmPassword,setRegisterConfirmPassword] = useState('');
    const[registerAccount,setRegisterAccount] = useState(0);
    const[isInvalidRegisterEmail,setIsInvalidRegisterEmail] = useState(false);
    const[isInvalidRegisterFirstName,setIsInvalidRegisterFirstName] = useState(false);
    const[isInvalidRegisterLastName,setIsInvalidRegisterLastName] = useState(false);
    const[isInvalidRegisterPassword,setIsInvalidRegisterPassword] = useState(false);
    const[isInvalidRegisterAccount,setIsInvalidRegisterAccount] = useState(false);
    const[isInvalidRegisterConfirmPassword,setIsInvalidRegisterConfirmPassword] =  useState(false);

    // form for sign-in purpose
    async function submitLoginForm(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(mailformat.test(loginEmail) === true && loginPassword.length>=6){
            setIsInvalidLoginPassword(false)
            setIsInvalidLoginEmail(false)
            const data = {
                email:loginEmail,
                password:loginPassword,
            }
            try{
                const response  = await fetch("https://one-stop-for-student.herokuapp.com/user/login",{
                    method: "POST",
                    body : JSON.stringify(data),
                    headers:{
                        "Content-Type": "application/json",
                        'Accept': 'application/json',
                    },
                })
                const result = await response.json();
                console.log(result.token);
                alert("login successful");
                history.push("/");
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            if(mailformat.test(loginEmail) === false){
                setIsInvalidLoginEmail(true);
            }
            if(loginPassword.length<6 || loginPassword.trim===""){
                setIsInvalidLoginPassword(true);
            }
        }
    }


    // form for registration purpose
    async function submitRegisterForm(){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (registerPassword.length<6 && registerConfirmPassword.length<6 && registerPassword !== registerConfirmPassword){
            setIsInvalidRegisterPassword(false);
        }
        else if(registerFirstName.length>0 && registerFirstName.trim!=="" && registerLastName.length>0 && registerLastName.trim!=="" && registerPassword.length>=6 && registerPassword!=="" && registerConfirmPassword.length>=6 && registerConfirmPassword!=="" && mailformat.test(registerEmail)===true ){
            console.log(mailformat.test(registerEmail))
            const data ={
                firstName:registerFirstName,
                lastName:registerLastName,
                email:registerEmail,
                password:registerPassword,
                accountType:registerAccount,
            }
            try{
               
                const response = await fetch("https://one-stop-for-student.herokuapp.com/user/signup",{
                    method: "POST",
                    body : JSON.stringify(data),
                    headers:{
                        "Content-Type": "application/json",
                        'Accept': 'application/json',
                    },
                })
                console.log(response);
                const result = await response.json();
                console.log(result);
                alert("signin successful");
                history.push("/");
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            if(registerFirstName.length<0 || registerFirstName.trim===""){
                setIsInvalidRegisterFirstName(true);
            }
            if(registerLastName.length<0 || registerLastName.trim===""){
                setIsInvalidRegisterLastName(true);
            }
            if(mailformat.test(registerEmail)===false){
                console.log(mailformat.test(setRegisterEmail))
                setIsInvalidRegisterEmail(true);
            }
            if(registerPassword !== registerConfirmPassword){
                setIsInvalidRegisterPassword(true);
            }
            if(registerPassword === registerConfirmPassword){
                if(registerPassword.length<6 || registerPassword.trim==="" || registerConfirmPassword.length<6 || registerConfirmPassword.trim===""){
                    setIsInvalidRegisterPassword(true);
                }
            }
            if(registerAccount === -1){
                setIsInvalidRegisterAccount(true);
            }
        }
    };

    function validateWhileFocus(e){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       switch(e.target.name){
           case "email":
               console.log('hello');
                if (mailformat.test(e.target.value) === true) {
                  setIsInvalidRegisterEmail(false);
                }
                else {
                  setIsInvalidRegisterEmail(true);
                }
                break;
            case "firstName":
                if(e.target.value.length>0&&e.target.value!==" "){
                 setIsInvalidRegisterFirstName(false);
                }
                else{
                    setIsInvalidRegisterFirstName(true);
                }
               break;
            case "lastName":
                if(e.target.value.length>0&&e.target.value!==" "){
                    setIsInvalidRegisterLastName(false);
                }
                else{
                    setIsInvalidRegisterLastName(true);
                }
               break;
            case "password":
                if(e.target.value.length>=6&&e.target.value!==" "){
                  setIsInvalidRegisterPassword(false);
                }
                else{
                   setIsInvalidRegisterPassword(true);
                }
               break;
            case "confirmPassword":
                if(e.target.value.length>=6 && e.target.value!==" "){
                    setIsInvalidRegisterConfirmPassword(false)
                }
                else{
                    setIsInvalidRegisterConfirmPassword(true)
                }
              break;
            default:
                console.log('Error');
                break;
            }
       }

    return(
        <div className={`cont m-0 ${!changeToSignUp ? "" : "sign-up-mode" }`}>
                <div className="forms-cont">
                    <div className="signin-signup">
                        
                        {/* sign-in form */}

                        <div className="form sign-in-form">
                            <h2 className="title">Sign In</h2>
                            <div className="input-field">
                                <i><MdEmail /></i>
                                <input  name="email" type="text" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value)}} value={loginEmail} />
                                {/* use for checking email */}
                                <div></div>
                                {isInvalidLoginEmail?<div style={{color:'red'}}>Invalid email</div>:null}  
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input name="" type="password" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value)}} value={loginPassword} />
                                {/* use for checking password */}
                                <div></div>
                                {isInvalidLoginPassword?<div style={{color:'red',display:'block'}}>Password too small</div>:null}
                            </div>
                            <input type="submit" value="Login" className="btn solid" onClick={submitLoginForm}/>
                            <p className="social-text">Follow us on</p>
                            <div className="social-media">
                                <a href="www.google.com" className="social-icon" target="__blank"><FaInstagram /></a>
                                <a href="www.google.com" className="social-icon" target="__blank"><FaGithub /></a>
                                <a href="www.google.com" className="social-icon" target="__blank"><FaLinkedin /></a>
                            </div>
                        </div>
                        
                        {/* sign-up form */}
                        <div className="form sign-up-form">
                            <h2 className="title">Sign Up</h2>
                            <div className="input-field">
                                <i><MdEmail  /></i>
                                <input type="email" placeholder="Email" name="email" onChange={(e) => {setRegisterEmail(e.target.value);validateWhileFocus(e)}} value={registerEmail}/>
                                <div></div>
                                {isInvalidRegisterEmail?<label style={{color:'red',display:'block'}}>Invalid Email</label>:null}
                            </div>
                            <div className="input-field">
                                <i><FaUser /></i>
                                <input type="text" placeholder="First Name" name="firstName" onChange={(e) => {setRegisterFirstName(e.target.value);validateWhileFocus(e)}} value={registerFirstName}/>
                                <div></div>
                                {isInvalidRegisterFirstName?<div style={{color:'red',display:'block'}}>Cannot leave this field empty</div>:null}
                            </div>
                            <div className="input-field">
                                <i><FaUser /></i>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={(e) => {setRegisterLastName(e.target.value);validateWhileFocus(e)}} value={registerLastName}/>
                                <div></div>
                                {isInvalidRegisterLastName?<div style={{color:'red',display:'block'}}>Cannot leave this field empty</div>:null}
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input  type="password" placeholder="Password" name="password" onChange={(e) => {setRegisterPassword(e.target.value);validateWhileFocus(e)}} value={registerPassword}/>
                                <div></div>
                                {isInvalidRegisterPassword?<div style={{color:'red',display:'block'}}> Password too small</div>:null}
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input type="password" placeholder="Re-enter Password" name="confirmPassword" onChange={(e) => {setRegisterConfirmPassword(e.target.value);validateWhileFocus(e)}} value={registerConfirmPassword}/>
                                <div></div>
                                {isInvalidRegisterConfirmPassword?<label style={{color:'red',display:'block'}}>Password do not match</label>:null }
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{padding:' 0rem 1rem'}}>
                                <label style={{fontSize:"20",fontWeight:"1000"}}><input type="radio" name="account" onClick={() => {setRegisterAccount(1);}}/>Student</label>
                                </div>
                                <div style={{padding:'0rem 1rem'}}>
                                <label style={{fontSize:"20",fontWeight:"1000"}}><input type="radio" name="account" onClick={() => {setRegisterAccount(2);}}/>Teacher</label>
                                </div>
                                {isInvalidRegisterAccount?<div style={{color:'red',display:"block"}}>Please select correct option</div>:null}
                            </div>
                            <input type="submit" className="btn" value="Sign up" onClick={submitRegisterForm}/>
                            {/* <p className="social-text">Follow us on</p>
                            <div className="social-media">
                                <a href="#" className="social-icon"><FaInstagram /></a>
                                <a href="#" className="social-icon"><FaGithub /></a>
                                <a href="#" className="social-icon"><FaLinkedin /></a>
                            </div> */}
                        </div>
                    </div>

                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={() => setChangeToSignUp(true)}>Sign up</button>
                        </div>
                        <img src="#" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={() => setChangeToSignUp(false)}>Sign in</button>
                        </div>
                        <img src="#" className="image" alt="" />
                    </div>
                </div>
        </div>
    );
}

export default Login;
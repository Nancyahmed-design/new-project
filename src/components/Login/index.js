import {useState} from 'react';
const Login = () => {
    // const [is_user_valid,setIsUserValid]=useState({
    //     is_user_valid:false,
    // })

let re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [registerForm,setRegisterForm] = useState({
        email:"",
        password:"",
    });
    const [registerErrors,setRegisterErrors] = useState({
        emailErrors:null,
        passwordErrors:null,
    });
    const handleFormChange =(e)=>{
        console.log(e.target.name,e.target.value);
        // setRegisterForm({
        //     email :e.target.name === 'email'?e.target.value :registerForm.email,
        //     password:e.target.name === 'password'?e.target.value :registerForm.password,
        // });
        if(e.target.name === 'email'){
            setRegisterForm({
               ...registerForm,
               email:e.target.value
            });
            setRegisterErrors({
                ...registerErrors,
                emailErrors:
                e.target.value.length === 0  
                ? "this field is mandatory": 
                (!re.test(e.target.value))
                 ? "You have entered an invalid email address!" 
                 :null,
            });
        }else{
            setRegisterForm({
                ...registerForm,
                password:e.target.value
        });
        setRegisterErrors({
            ...registerErrors,
            passwordErrors:
            e.target.value.length ===0 
            ?"this field is mandatory":
            e.target.value.length <8 ? 
            "password must be greater than 8 "
            : null ,
        });
    }
    }
    const handleSubmit =()=>{
        console.log(registerForm);
        const {email,password}=registerForm;
        setRegisterErrors({
            emailErrors:email.length >0 ? null :"this field is mandatory",
            passwordErrors:password .length>0 ? null :"this field is mandatory",
        })
    }
    
    return (
    <div className="container">
    <label for="email">Enter your email:</label>
    <input 
        type="email"  
        name="email" 
        className={`form-control mt-2
         ${registerErrors.emailErrors ? "border-danger" : ""}`} 
        value={registerForm.email}
        onChange={handleFormChange}
        />
        <small className="text-danger mt-2">{registerErrors.emailErrors}</small>
        <br></br>
    <label for="password">Enter your password:</label>
    <input
         type="password"  
         name="password" 
         className={`form-control mt-2 ${registerErrors.passwordErrors ? "border-danger" : ""}`}
         value={registerForm.password}
         onChange={handleFormChange}
         />
         <small className="text-danger mt-2">{registerErrors.passwordErrors}</small>
         <br></br>
         <button 
         className=" btn-btn-primary mt-3"
          onClick={handleSubmit} 
          >login</button>
         {/* <button className=" btn-btn-primary mt-3"
         onClick={()=>
            setIsUserValid({
            is_user_valid: !this.state.is_user_valid
         })
        }
        >
         welcome
         </button>
         {is_user_valid.is_user_valid ?(
            <p>`welcome ${e.target.value}`</p>):(<p>log in first</p>)
          */}
         
         
    </div>
    );
};
export default Login;


// <Child />

// <Child data={​​state}​​ />

// <Child data={​​state}​​ onAy7aga={​​esmFunction3ande}​​ />

// Child code: ...props.onAy7aga(newValue)

// Parent code: ....function esmFunction3ande(val) {​​   setState(val)}​​


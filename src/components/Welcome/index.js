import  {useState }from 'react';
const Welcome = () =>{
    const [state,setstate]=useState({
        email:"",
    })
    return(
        <p>welcome{state. email}</p>
      
    )
}
export default Welcome;
// onClick={() =>
//     setstate({
//         email:
//     })
// }
import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from  '../../store/actions/Products';
import Card from 'react-bootstrap/Card';

 const Product = () => {
  const products =useSelector (state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);

  console.log(Object.values(products).length);
      
  return (
    <div className="container">  
    <div className="row">  
     {products?(Object.values(products).map(product => (  
     <div>  
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={product.image !== undefined ? product.image : ''}   />
     <Card.Body>
       <Card.Title>{product.title}</Card.Title>
       <Card.Text>
       price : EGP{product.price}
       </Card.Text>    
     </Card.Body>
   </Card>
     </div>  
 ))):(<h1>Loading</h1>)}  
</div> 
   
</div>  
 
  );
}

export default Product;


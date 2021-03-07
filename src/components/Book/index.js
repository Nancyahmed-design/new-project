import React, {  useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Card} from "react-bootstrap"
// import {Card, CardImg, CardText, CardBody,CardTitle,Col} from 'reactstrap';
const Book = () => {
  const [books, setbooks] = useState([]);
  const [search, setSearch] = useState();
  const [error, setError] = useState([]);


  const handleSearch = (e) => {
        console.log(e.target.value, e.target.name)
        setSearch(e.target.value); 
    };
  const handleSubmit = () => {
        console.log(search);

        axios.get('https://www.googleapis.com/books/v1/volumes?',
        {params:{
                    q:search
                },}
        )
        .then(function (response) {
            console.log(response);
            setbooks(response.data.items);
        })
        .catch(function (erroror) {
                console.log(erroror);
                setError("Book not found");
            });
};

  
return (
  <>
            <div>
                <h1>Book Finder App</h1>
                <input
                        onChange={handleSearch}
                        placeholder="Enter Book name"
                        name="Search"
                        className=" mt-4 mr-4"
                        value={search}
                    />
    
    <button className="btn btn-info" onClick={handleSubmit} >
                        Search
          </button>
          <br />
          <br />
                {books?(books.map((book, index) => 
               
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} />
                  <Card.Body>
                    <Card.Title>{book.volumeInfo.title}</Card.Title>  
                  </Card.Body>
                </Card>
                )):(<h2>Not Found</h2>)}
                <p>{error}</p> 
           </div>
           </>
            
        )
    
    
    }
export default Book;



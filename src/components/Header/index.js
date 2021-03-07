
import {BrowserRouter as Router ,Route  ,Switch ,Link} from 'react-router-dom';

const Header =() =>{
    return(
        <>
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
           {/*<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>*/}
           <a class="nav-link" href="#"><Link to="/home">Home</Link> <span class="sr-only">(current)</span></a>
           </li>
         {/* <li class="nav-item">
            <a class="nav-link" href="#">About </a>
          </li>*/}
          <li class="nav-item">
           {/*<a class="nav-link" href="#">To-do </a>*/}
           <a class="nav-link" href="#"><Link to="/todo">To-Do</Link> </a>

          </li>
          <li class="nav-item">
          {/*<a class="nav-link" href="#">books </a>*/}
          <a class="nav-link" href="#"><Link to="/Book">Books</Link> </a>
          </li>
          
          <li class="nav-item">
          {/*<a class="nav-link" href="#">books </a>*/}
          <a class="nav-link" href="#"><Link to="/Counter">Counter</Link> </a>
          </li>

          

          <li class="nav-item">
          {/*<a class="nav-link" href="#">books </a>*/}
          <a class="nav-link" href="#"><Link to="/Product">Product</Link> </a>
          </li>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          {/*<button class="btn btn-outline- my-2 my-sm-0" type="submit">login</button>*/}
          <Link to="/">Login</Link>

          </form>
      </div>
    </nav>
    </div>
     </>
    )
    }
     export default Header;
    
    
    
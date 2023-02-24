import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return(
        <>
          <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png " class="rounded-bottom  bg-dark" alt="..." width={50}></img>
  <div class="container-fluid ">
    <a class="navbar-brand text-light" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item text-light" href="#">Action</a></li>
            <li><a class="dropdown-item text-light " href="#">Another action</a></li>
            <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
           <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           References
          </a>
        </li>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item text-light" href="#">Action</a></li>
            <li><a class="dropdown-item text-light " href="#">Another action</a></li>
            <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
          </ul>
        <li class="nav-item">
        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Exercises
          </a>
        </li>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item text-light" href="#">Action</a></li>
            <li><a class="dropdown-item text-light " href="#">Another action</a></li>
            <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
          </ul>
        <li class="nav-item dropdown">
        <a class="nav-link text-light" href="#">Sigup</a>
          
        </li>
      </ul>
      
    </div>
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-5 ">
  <button class="btn btn-info me-md-3 text-light" type="button">Pro</button>
  <button class="btn btn-secondary  me-md-3 text-light" type="button">GetCertified</button>
  <button class="btn btn-warning  me-md-3 text-light" type="button">CreateWedsite</button>
  <button class="btn btn-success  me-md-3 text-light" type="button">Login</button>
  </div>
</nav>
    </body>
  
        
        </>
    )
}

export default Navbar
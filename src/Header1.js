import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header1.css'
import img from './img/photo11.png'
import img1 from './img/photo12.png'
import img2 from './img/photo14.png'
import img3 from './img/photo15.png'
import img4 from './img/photo16.png'
import img5 from './img/photo17.png'
import img6 from './img/photo19.png'
    const Header1 = () =>{
        const mystyle={
            height:"1100px" 
        }
        return(
        <>
        <div class="bg " >
            <div class="ho ">
            <h1 className="fo ">
            W3Schools Spaces
            </h1>
            </div>
           
            <h6 className="text-light text">
            If you want to create your own website, check out W3Schools Spaces.<br>
            </br>
            <br></br>
            It is free to use, and does not require any setup:
            </h6>
            <div className="go ">
            <img src="https://www.w3schools.com/spaces/dynamicspaces.gif"/>
            <img src={img} class="mt-5"/>
            <button class="cat btn-primary mt-4" type="button">Learn More</button>
            </div>
           <div >
           
           </div>
        </div>
        <div class="bg1" >
            <div className="ko">
            <h1 className="fo1 ">My Learning</h1>
            </div>
           <div>
            <h4 class="text1">Track your progress with our free "My Learning" program.</h4>
           </div>
            <div>
                <h4  class="text2">Log in to your account, and start earning points!</h4>
            </div>
            <div className="img50">
                <img src={img1} />
                <button class="cat1 btn-primary mt-4" type="button">Sign Up for Free</button>
            </div>
        </div>

        <div className="bg2">
            <div class ="df">
                <div >
                <h6 className="text3">
                Become a PRO User
                </h6>
                </div>
               <div>
               <h4 className="text4">
                And unlock powerful features:
            
                </h4>
               </div>
                
                <div className="img1">
               <img src={img2}/>
               <button class="cat1 btn-primary mt-4" type="button">Learn More</button>
               </div>
            
            </div>

        </div>
        <div class="bg3">
            <div >
            <h1 className="text5"> Color Picker</h1>
            </div>
            <div>
                <h6 className="text6">W3Schools' famous color picker:</h6>
            </div>
            <div className="img2">
                 <img src={img3}/>
            </div>
        </div>
        <div class="bg4">
            <div>
            <h1 className="text7 ">Code Game</h1>
            </div>
            <div>
                <h6 className="text8">Help the Lynx collect pine cones!</h6>
            </div>
            <div className="img3">
                <img src={img4}/>
                <button class="cat2 btn-primary mt-4" type="button">Play Game</button>
            </div>
        </div>
        <div class="bg5">
            <div >
                <h1 className="text9">Exercises and Quizzes</h1>
                <h6 className="text10">
                Test your skills!
                </h6>
            </div>
            <div className="bg6">
                <div className="Box55">
                    <div class="col">
                        <p>Exercises</p>
                    </div>
                    
                </div>
               <div className="Box56">
                    <div class="col66">
                        <p>Quizzes</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="bg7">
            <div>
                <h1  className="text12">Web Templates</h1>
            </div>
            <div>
                <h6 className="text13">Browse our selection of free responsive HTML Templates</h6>
            </div>
            <div className="img4">
                <img src={img5} />
                <button class="cat3 btn-primary mt-4" type="button">Browse Templates</button>
            </div>
        </div>
        <div className="bg8">
            <div>
                <h1  className="text14">
                Kickstart your career
                </h1>
                <h6  className="text15">
                Get certified by completing a course
                </h6>
                <div>
                <button  class="cat4 btn-primary " type="button">Get started</button>
                </div>
                
            </div>
           
        </div>
        <div className="bg9">
            <div >
                <h1  className="text12 text-light">How To Section</h1>
            </div>
            <div>
                <h6 className="text13 text-light">Code snippets for HTML, CSS and JavaScript</h6>
            </div>
            <div>
                <h6 className="text13 text-light mb-4">For example, how to create a slideshow:</h6>
            </div>
            {/**หน้าสไล */}
          <div class="center">
            <div className="mb-6">
                <img src={img6}/>
            </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" classname="center">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <center>
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" class="d-block w-50 " alt="..."/>
        </center>
      
    </div>
    <div class="carousel-item">
        <center>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" class="d-block w-50 h-50" alt="..."/>
        </center>
    
    </div>  
    <div class="carousel-item">
        <center>
        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" class="d-block w-50" alt="..."/>
        </center>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div> 
      
<button  class="cat5 btn-primary " type="button">Get started</button>
          </div>
     
        </div>
       
        </>
        )
    }
    export default Header1

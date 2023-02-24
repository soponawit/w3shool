import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import img from './img/photo.png'
import img1 from './img/photo1.png'
import img2 from './img/photo2.png'
import img3 from './img/photo3.png'
import img4 from './img/photo4.png'
import img5 from './img/photo5.png'
import img6 from './img/photo6.png'
const Header = ()=>{
    const mystyle={
        height:"500px" 
    }
    
    return(
        <>
        <div className="back p-5" style={mystyle}>
            <div className="pt-5">
                <center>
                <h1 className='text-light font mt-5'  > Learn to Code <span class="badge bg-secondary" ></span></h1><br></br>
                <h5 className='text mb-2 mb-4' > With the world's largest web developer site. <span class="badge bg-secondary"></span></h5>
                </center>
            </div>
            <div className='text-center '>
                <div className="container  pt-1 ">
                <center>
                <form class="d-flex g " role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </center>
                </div>
            </div>
        </div>
        <div>
            <img src={img2} className="img"/>
        </div>
         {/**หน้าที่ 1  */}
         <div className="mode" style={mystyle}>
            <div class="  d-grid gap-2 col-1 ">
                <center className="center1">
                <h1 className="got ">HTML</h1>
                <h6 className="text-dark">The language for styling web pages</h6>
                <button class=" git  mt-4" type="button">Learn HTML</button>
                <button class="box mt-3" type="button">Video Tutorial</button>
                <button class="t  mt-3" type="button">HTML Reference</button>
                <button class="m mt-3" type="button">Get Certified</button>
                </center>
               
                
                
                
               
            </div>
            <div class="Box mt-5">
            <h3 >HTML Example:</h3>
           <div >
            <img src={img}  />
           </div>
           <button class="mox btn-primary mt-3 " type="button">Try it Yourself</button>
            </div>
            
        </div>
         {/**หน้าที่ 2 */}
        <div className="mode1" style={mystyle}>
            <div class="  d-grid gap-2 col-1 ">
                <center className="center2">
                <h1 className="font1 ">CSS</h1>
                <h6 className="text-dark">The language for styling web pages</h6>
                <button class=" git  mt-4" type="button">Learn CSS</button>
                <button class="t  mt-3" type="button">CSS Reference</button>
                <button class="m mt-3" type="button">Get Certified</button>
                
                </center>
               
                
                
               
            </div>
            <div class="Boxx2 mt-5">
            <h3 >CSS Example:       </h3>
            <img src={img1} />
            <button class="mox btn-primary mt-3 " type="button">Try it Yourself</button>
            </div>
            
        </div>
        {/** หน้าที่ 3*/}
        <div className="mode2" style={mystyle}>
            <div class="  d-grid gap-2 col-1  ">
                <center className="center3">
                <h1 className="font1 text-light ">JavaScript</h1>
                <h6 className="text-light">The language for programming web pages</h6>
                <button class=" git  mt-4" type="button">Learn JavaScript</button>
                <button class="tt  mt-3" type="button">JavaScript Reference</button>
                <button class="m mt-3" type="button">Get Certified</button>
                </center>
               
                
                
                
               
            </div>
            <div class="Boxx mt-5">
            <h3 >JavaScript Example:</h3>
           <img src={img3}/>
           <button class="mox  btn-primary mt-3 " type="button">Try it Yourself</button>
            </div>
            
        </div>
         {/** หน้าที่ 4*/}
        <div className="mode3" style={mystyle}>
            <div class="  d-grid gap-2 col-1  ">
                <center className="center4">
                <h1 className="font " >Python</h1>
                <h6>A popular programming language</h6>
                <button class=" git  mt-4" type="button">Learn Python</button>
                <button class="t  mt-3" type="button">Python Reference</button>
                <button class="m mt-3" type="button">Get Certified</button>

                </center>
               
                
                
                
               
            </div>
            <div class="Boxx mt-5">
            <h3>HTML Example:</h3>
            <img src={img4}/>
            <button class="mox  btn-primary mt-3 " type="button">Try it Yourself</button>
            </div>
            
        </div>
        {/**หน้าที่ 5  */}
        <div className="mode4" style={mystyle}>
            <div class="  d-grid gap-2 col-1 ">
                <center className="center5">
                <h1 className="font ">SQL</h1>
                <h6>A language for accessing databases</h6>
                <button class=" git  mt-4" type="button">Learn SQL</button>
                <button class="t  mt-3" type="button">SQL Reference</button>
                <button class="m mt-3" type="button">Get Certified</button>
                
                </center>
                
                
                
               
            </div>
            <div class="Boxx1 mt-5">
            <h3>HTML Example:</h3>
            <img src={img5}/>
            <button class="mox  btn-primary mt-3 " type="button">Try it Yourself</button>
            </div>
            
        </div>
        {/** หน้าที่ไหม่1  */}
        <div class="nero">
    <div class=" Box1 ">
    <div class="col ">
        <div className="sem">
        <h1 >PHP</h1>
        </div>
        <div className="sem1">
        <h6>A web server programming language</h6>
        <button class="c btn-primary mt-4 " type="button">Learn PHP</button>
        </div>
       
      
        

   


    </div>

  </div>
  <div className="nero1">
    <div className=" Box2">
    <div class="col ">
    <div className="sem">
        <h1>jQuery</h1>
        </div>
        <div className="sem1">
        <h6>A JS library for developing web pages</h6>
        <button class="c btn-primary mt-4" type="button">Learn jQuery</button>
        </div>
       
    </div>
    </div>
  

  </div>
 
        
</div>
 {/**หน้าที่ 2 */}
 <div class="nero2">
    <div class=" Box3 ">
    <div class="col ">
    <div className="sem">
        <h1 className="">Java</h1>
        </div>
        <div className="sem1">
        <h6>A programming language</h6>
        <button class="c btn-primary mt-4" type="button">Learn Java</button>
        </div>
       
    </div>

  </div>
  <div className="nero3">
    <div className=" Box4">
    <div class="col ">
    <div className="sem">
        <h1>C++</h1>
        </div>
        <div className="sem1">
        <h6>A programming language</h6>
        <button class="c btn-primary mt-4" type="button">Learn C++</button>
        </div>
       
    </div>
    </div>
  

  </div>
 
        
</div>
{/**หน้าที่ 3 */}
<div class="nero4">
    <div class=" Box5 ">
    <div class="col ">
    <div className="sem">
        <h1>W3.CSS</h1>
        </div>
        <div className="sem1">
        <h6>A CSS framework for faster and better responsive web pages</h6>
        <button class="c btn-primary mt-4" type="button">Learn W3.CSS</button>
        </div>
       
    </div>

  </div>
  <div className="nero5">
    <div className=" Box6">
    <div class="col ">
    <div className="sem">
        <h1>Bootstrap</h1>
        </div>
        <div className="sem1">
        <h6>A CSS framework for designing better web pages</h6>
        <button class="c btn-primary mt-4" type="button">Learn Bootstrap</button>
        </div>
       
    </div>
    </div>
  

  </div>
 
        
</div>
{/**หน้าไหม2 */}
<div class="nero6">
    <div class=" Box7 ">
    <div class="col1 ">
     <p>C</p>
      
       
    </div>

  </div>
  <div >
    <div className=" Box8">
    <div class="col2 ">
   <p>C#</p>
    </div>
    </div>
  

  </div>
 
        
</div>
{/**หน้าไหม่3.0 */}
<div class="nero7">
    <div class=" Box9">
        <div class="col1">
    <p >R</p>
        </div>

    </div>
    <div class=" Box10">
        <div class="col1">
        <p>Kotlin</p>
        </div>

    </div>
    <div class="Box11">
        <div class="col1">
        <p>Node.js</p>
        </div>

    </div>
    <div class=" Box12">
        <div class="col1">
        <p>React</p>
        </div>

    </div>
</div>
{/**หน้าที่ 3.1 */}
<div class="nero7">
    <div class=" Box13">
        <div class="col1">
        <p>JSON</p>
        </div>

    </div>
    <div class=" Box14">
        <div class="col1">
        <p>AngularJS</p>
        </div>

    </div>
    <div class=" Box15">
        <div class="col1">
        <p>MySQL</p>
        </div>

    </div>
    <div class=" Box16">
        <div class="col1">
        <p>XML</p>
        </div>

    </div>
</div>
{/**หน้าที่ 3.2 */}
<div class="nero7">
    <div class=" Box17">
        <div class="col1">
        <p> Sass</p>
        </div>

    </div>
    <div class=" Box18">
        <div class="col1">
        <p>Icons</p>
        </div>

    </div>
    <div class=" Box19">
        <div class="col1">
        <p>RWD</p>
        </div>

    </div>
    <div class=" Box20">
        <div class="col1">
        <p>Graphics</p>
        </div>

    </div>
</div>
{/**หน้าที่ 3.3 */}
<div class="nero7">
    <div class=" Box21">
        <div class="col1">
        <p>SVG</p>
        </div>

    </div>
    <div class=" Box22">
        <div class="col1">
        <p>Canvas</p>
        </div>

    </div>
    <div class=" Box23">
        <div class="col1">
        <p>Raspberry Pi</p>
        </div>

    </div>
    <div class=" Box24">
        <div class="col1">
        <p>Cyber</p>
        </div>

    </div>
</div>
{/**หน้าที่ 3.3 */}
<div class="nero7">
    <div class=" Box25">
        <div class="col1">
        <p>Colors</p>
        </div>

    </div>
    <div class=" Box26">
        <div class="col1">
        <p>Git</p>
        </div>

    </div>
    <div class=" Box27">
        <div class="col1">
        <p>Matplotlib</p>
        </div>

    </div>
    <div class=" Box28">
        <div class="col1">
        <p>NumPy</p>
        </div>

    </div>
</div> 
{/**หน้าที่ 3.4 */}
<div class="nero7">
    <div class=" Box29">
        <div class="col1">
        <p>Pandas</p>
        </div>

    </div>
    <div class=" Box30">
        <div class="col1">
        <p>Scipy</p>
        </div>

    </div>
    <div class=" Box31">
        <div class="col1">
        <p>ASP</p>
        </div>

    </div>
    <div class=" Box32">
        <div class="col1">
        <p>Accessidility</p>
        </div>

    </div>
</div>   
{/**หน้าที่ 3.5 */}
<div class="nero7">
    <div class=" Box33">
        <div class="col1">
        <p>AppML</p>
        </div>

    </div>
    <div class=" Box34">
        <div class="col1">
        <p>GO</p>
        </div>

    </div>
    <div class=" Box35">
        <div class="col1">
        <p>TypeScript</p>
        </div>
       
    </div>
    <div class=" Box36">
        <div class="col1">
        <p>Django</p>
        </div>

    </div>
</div>
{/**หน้าที่ 3.6 */}
<div class="nero7">
    <div class=" Box37">
        <div class="col1">
        <p>MongoDB</p>
        </div>

    </div>
    <div class=" Box38">
        <div class="col1">
        <p>Statistics</p>
        </div>

    </div>
    <div class=" Box39">
        <div class="col1">
        <p>Data Science</p>
        </div>

    </div>
    <div class=" Box40">
        <div class="col1">
        <p>Typing Speed</p>
        </div>

    </div>
</div>  
{/**หน้าไหม่  */}
<div class="nero6">
    <div class=" Box41 ">
    <div class="col1 ">
     <p>Excel</p>
      
       
    </div>

  </div>
  <div >
    <div className=" Box42">
    <div class="col2 ">
   <p>Googlesheets</p>
    </div>
    </div>
  

  </div>
 
        
</div> 
<div class="nero6">
    <div class=" Box43 ">
    <div class="col1 ">
     <p>Machine Learning</p>
      
       
    </div>

  </div>
  <div >
    <div className=" Box44">
    <div class="col2 ">
   <p>Artificial Intelligence</p>
    </div>
    </div>
  

  </div>
 
        
</div> 
{/**หน้าไหม่ */} 
<div className="back1 p-5"  >
     <h1 class="fontt text-light">Code Editor</h1>
     <h6 className="text-light hit mt-4">With our online code editor, you can edit code and view the result in your browser</h6>
    <div class="center mt-3">
        <img src={img6}/>
        <img src="https://www.w3schools.com/codeeditor.gif" />
        
    </div>
    <div>
    <button class="cc btn-primary mt-4" type="button">Try Frontend Editor (HTML/CSS/JS)</button>
    <button class="cc1 btn-primary mt-4" type="button">Try Backend Editor (Python/PHP/Java/C..)</button>
    </div>
</div> 
        </> 
    )
}
export default Header

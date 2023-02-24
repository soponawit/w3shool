import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
import img from './img/photo7.png'
import img1 from './img/photo8.png'
import img2 from './img/photo9.png'
import img3 from './img/photo10.png'
    const Footer = ( ) =>{
        const mystyle={
            height:"350px" 
        }
        return(
            <>
            <div className="foot" style={mystyle}>
            <div className="mt" >
            <button class="btn1 btn-outline-success " type="submit">Quizzes</button>
            <button class="btn2 btn-outline-success" type="submit">EXERCISES</button>
            <button class="btn3 btn-outline-success " type="submit">CERTIFICATES</button>
            <button class="btn4 btn-outline-success" type="submit">UPGRADE</button>
            <button class="btn5 btn-outline-success " type="submit">SPACES</button>
            <button class="btn6 btn-outline-success" type="submit">SUPPORT</button>
            <button class="btn7 btn-outline-success " type="submit">NEWSLETTER</button> 
            
            <p className="text-light text11">FORUM | ABOUT</p>
               
            </div>
            <div >
                <img src={img} className="icon mt-4"/>
                <img src={img1} className="icon1 "/>
                <img src={img2} className="icon2"/>
                <img src={img3} className="icon3 "/>
            </div>
               <div>
               <p className="text-light ht ">W3Schools is optimized for learning, testing, and training. Examples might be simplified toimprove reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. <br/>
               While using this site, your agree to have read and accepted our terms of use, cookie and privacy policy
                .Copyright 1999-2023 by Refsnes Data. All Rights Reserved.</p>
               
               </div>
            </div>
            </>
        )
    }
    export default Footer


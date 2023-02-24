import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import  Navbar from'./Navbar'
import Header from './Header';
import Header1 from './Header1';
import Footer from './Footer';
function App() {
  return (
   <div >
    <Navbar/>
    <Header/>
    <Header1/>
    <Footer/>
   </div>
  );
}

export default App;

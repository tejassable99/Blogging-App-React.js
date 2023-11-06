import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AddBlog from "./AddBlog";
import Contacts from "./Contacts";
import Home from "./Home";
import About from "./About";

const Routing=()=>{
    return(
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/AddBlog" element={<AddBlog/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
    </Routes>
    )
}
export default Routing
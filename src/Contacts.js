import { Link } from 'react-router-dom'
import { Image,Form,Menu,Button} from 'semantic-ui-react'
const Contacts=()=>{
    return(
        <>
               <Form>
   <div class="ui secondary massive menu" >
    
   <Link to="/Home">
    <a  class="item">Home</a>
    </Link>
    <Link to="/About">
    <a class="item">About</a>
    </Link>
   <Link to="/Contacts">
    <a class="item">Contacts</a>  
    </Link>
   
   <div class="right menu"><div class="item"><div class="ui icon input"></div></div>
 
   <Menu.Item>
    <Link to="/AddBlog">
    <Image src='avt.jpg' avatar />
    </Link>
    <span>tejas</span>
  </Menu.Item>
           <Menu.Item>
          <Link to="/"> <Button color='red'>Logout</Button></Link> 
          </Menu.Item></div></div>
          </Form>
          
        <Image src="../Cont.jpg" fluid/>
        
        
        </>
    )
}
export default Contacts
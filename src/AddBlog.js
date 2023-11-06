import React from 'react'
import { Button, Header, Menu,Image, Form, Input } from 'semantic-ui-react'
import { Grid, Segment } from 'semantic-ui-react'
import "./App.css"
import "./blog.css"
import { Link } from 'react-router-dom'
import SingleCard from './SingleCard'
import {  Icon, Modal } from 'semantic-ui-react'
import { useState } from "react"
import { TextArea } from 'semantic-ui-react'
import Detail from './Detail'
const AddBlog=()=>{
  let[search,setSearch]=useState()
   let[searchit,setSearchit]=useState([])
  
  let[title,SetTitle]=useState()
  let[content,Setcontent]=useState()
  let[detail,Setdetail]=useState([])
  let[tejas,SetTejas] = useState([
    {
      title: "The Girl from Ipanema",
      content: "In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today. While technology has undoubtedly brought about numerous benefits, it has also posed challenges and raised ethical concerns. With the constant connectivity offered by smartphones and social media, issues like privacy, cyberbullying, and addiction have become prominent. Additionally, the rise of automation and artificial intelligence has the potential to disrupt job markets and raise questions about job security. Striking a balance between harnessing the power of technology for progress and addressing its potential downsides is a critical challenge for modern society. It's clear that as technology continues to evolve, our ability to adapt and find solutions to these challenges will shape the future of our world.",
      pic:"../ipan.webp"
    },
    {
      title: "The Mexico Diary, Day 1: Oaxaca",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic:"../mexico.webp"
    },
    {
      title: "Mykonos with Mr. & Mrs. Smith",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic:"../mr.webp"
    },
    {
      title: "Top 5 Beaches in Corfu, Greece",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic:"../greece.webp"
    },
    {
      title: "Essential Spa & Body Treatments",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../spa.webp"
    },
    {
      title: "Silky Sands, Turquoise Surf",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../sand.webp"
    },

    {
      title: "Summer Days recipes",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../recipes.webp"
    },
    {
      title: "What’s Cooking Mexico?",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../cm.webp"
    },
    {
      title: "Dark and Beautiful - The Magic of Acai",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../acai.webp"
    },
    {
      title: "East of Eden - The Best of Thailand’s Markets",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../thai.webp"
    },
    {
      title: "How not to eat a pizza",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../piz.webp"
    },
    {
      title: "How to make a Swedish breakfast",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../swed.webp"
    },
    {
      title: "Morning in Paris",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../paris.webp"
    },
    {
      title: "10 winter drinks",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../drink.webp"
    },
    {
      title: "The perfect chocolate macarons",
      content:"In the last few decades, we have witnessed an unprecedented transformation in the way we live, work, and communicate, all thanks to the rapid advancement of technology. This era, often referred to as the digital revolution, has left no aspect of modern society untouched. From the way we access information to how we conduct business and maintain relationships, technology has become an integral part of our daily lives. It has not only enhanced convenience but has also opened up new possibilities that were once unimaginable. The digital age has brought about profound changes, shaping the world we live in today.",
      pic: "../macarons.webp"
    },
    
    
  ]);


  const handleSearch=(e)=>{
    setSearch(e.target.value)
    
    setSearchit(tejas.filter((temp)=>temp.title.toLowerCase().includes(search)))
   }

  const All=()=>{
    Setdetail("")
  }

  const handleDetail=(t)=>{
    
    let k=tejas.filter((temp)=>temp.title==t);
    Setdetail(k)
  }

  const handleAdd=()=>{
      let data={title,content,pic:"../q.jpg"};
      SetTejas([data,...tejas])
      setOpen(false)
  }

  const handleDelete=(nm)=>{
      let d=tejas.filter((temp)=>temp.title!=nm);
      SetTejas(d);
  }

  const handleUpdate=(title,content,tl,cont)=>
 {

 SetTejas(tejas.filter((temp)=>
 { 
     if(temp.title==title && temp.content==content)
     {  
        temp.content=cont;
        temp.title=tl;
      return temp;

     }
     else{
      return temp;
     }

 }
 )
 )
}
  
  
  const [open, setOpen] = React.useState(false)
  return(<div  >
    
  
      
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
   <Menu.Menu position='right'>
            {/* <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              onChange={handleSearch}
              />
            </Menu.Item> */}
          </Menu.Menu>
   <Menu.Item>
    <Link to="/AddBlog">
    <Image src='avt.jpg' avatar onClick={All} />
    </Link>
    <span>tejas</span>
  </Menu.Item>
           <Menu.Item>
          <Link to="/"> <Button color='red'>Logout</Button></Link> 
          </Menu.Item></div></div>
          </Form>
          <Image src="cp.webp" />


          <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button >Add Blog</Button>}
    >
      <Modal.Header>
      <Form>
    <TextArea rows={2} placeholder='Title'  onChange={(e)=>SetTitle(e.target.value)} />
  </Form>
      </Modal.Header>
      <Modal.Content image scrolling>
    

        <Modal.Description>
          <p>
          <Form>
    <TextArea placeholder='Tell us more' style={{ minHeight: 300 }}  onChange={(e)=>Setcontent(e.target.value)} />
  </Form>
          </p>

         
            

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleAdd} primary>
          Add <Icon name='chevron right' />
        </Button>
        <Button onClick={()=>setOpen(false)} primary>
          Cancel <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>

<div className='main'>



    {/* {searchit.length?  searchit.map((temp)=><SingleCard title={temp.title} content={temp.content} handleDelete={handleDelete} handleDetail={handleDetail} pic={temp.pic} handleUpdate={handleUpdate}/>)
     : */}
   { detail.length? 
    detail.map((temp)=><Detail title={temp.title} content={temp.content} pic={temp.pic} />)
    :
    
     tejas.map((temp)=><SingleCard title={temp.title} content={temp.content} handleDelete={handleDelete} handleDetail={handleDetail} pic={temp.pic} handleUpdate={handleUpdate}/>)
    }
    
    </div>


       
  </div>        
    
  )
}
export default AddBlog
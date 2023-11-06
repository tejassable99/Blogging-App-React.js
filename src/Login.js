import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

import {   Grid } from 'semantic-ui-react'

import { Button, Header, Form, Divider, Segment,Icon,Image} from 'semantic-ui-react'

const Login = () => {
  let[flag,Setflag]=useState(true)
  let[name,Setname]=useState()
  let[pass,Setpass]=useState()
  let nav=useNavigate()
  let[msg,Setmsg]=useState(false)
  let[f,Setf]=useState(true)


  

  const handleFlag=()=>{
    Setflag(!flag)
  }


  const handleSignUp=()=>{
    let data=({Name:name,Pass:pass})
    data=JSON.stringify(data)
    localStorage.setItem(name,data)
    Setflag(!flag)
    
    window.location.reload()
  }

  const handleSignIn = () => {
    if (!name || !pass) {
      
      Setmsg(true);
    } else {
      let data = localStorage.getItem(name, pass);
      let temp = JSON.parse(data);
      if (temp) {
        if (temp.Name === name) {
          if (temp.Pass === pass) {
            Setf(!f);
            nav("/AddBlog");
          } else {
            Setmsg(true);
          }
        }
      } else {
        Setmsg(true);
      }
    }
  };
  
  return (
    <> 
    {f==true?
    <div className='fullscreen-bg' >
      <Image src='../b.avif' fluid />

      <div className='fu'>
  <Header as='h1' style={{color:"white"}} size='massive'>
    <i>
   "What Comes Easy <br></br>
    Won't Last Long<br></br>
    What Last's Long<br></br>
    Won't Come Easy"
    </i>
  </Header>
</div>

   
      
{flag==true?
   
       <div className='login'>
        <Segment>
        {msg==true?  <Message color='red'>Incorrect Username or Password</Message>: null}
        <Header as='h1' icon textAlign='center'>
        <Icon name="users"  iconPosition="right" size='massive' color='blue' />
        <Header.Content >Login</Header.Content>
        </Header>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            onChange={(e)=>Setname(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            onChange={(e)=>Setpass(e.target.value)}
          />

          <Button color="green" fluid  content='Login' onClick={handleSignIn} />
          <Divider horizontal>Or</Divider>

<Button
  color="purple" fluid  content='SignUp' 
  onClick={handleFlag}
/>
        </Form>
          
        </Segment>
        </div>
        :
        <div className='login'>
        <Segment>
        <Header as='h1' icon textAlign='center'>
        <Icon name="users"  iconPosition="right" size='massive' color='blue'  />
        <Header.Content>SignUp</Header.Content>
        </Header>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            onChange={(e)=>Setname(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            onChange={(e)=>Setpass(e.target.value)}
          />

        

<Button
  color="purple" fluid  content='SignUp' 
  onClick={handleSignUp}
/>
        </Form>
          
        </Segment>
        </div>
}
       
  </div>
  :
  null}
  </>
  );
}

export default Login;

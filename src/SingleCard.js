import "./blog.css"
import React, { useState } from 'react'
import { Card, Icon, Image,Rating } from 'semantic-ui-react'
import {   Item, Message ,Modal,Button,Header} from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
const SingleCard=({title,content,handleDelete,handleUpdate,pic,handleDetail})=>{
    let[tl,Settl]=useState()
    let[cont,Setcont]=useState()
    
    
    
        const handleEditClick = () => {
          setOpen(true); 
        };
    
        const handleDeleteClick=()=>{
          setOpenD(true);
        }
      
     
    
        const [openD, setOpenD] = React.useState(false)
        const [open, setOpen] = React.useState(false)





  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();


  
  return(
    <>
      <Card>
      <Image src={pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
        <span className='datetime'>{formattedDate} at {formattedTime}</span>
        </Card.Meta>
        <Card.Description className="card-description">
          {content} {/* Your content */}
          
        </Card.Description>
        <Card.Meta>
          <span className='date'onClick={()=>handleDetail(title)} style={{ cursor: 'pointer' }} >continue reading</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Rating icon='heart' defaultRating={0} maxRating={1} />
        </a>
        <span style={{ float: 'right' }}>
          <Icon name='edit' color='blue' style={{ cursor: 'pointer' }}  onClick={()=>  handleEditClick()} /> {/* Edit Icon */}
          <Icon name='trash' color='red' style={{ cursor: 'pointer' }}  onClick={()=>handleDeleteClick()} /> {/* Delete Icon */}
        </span>
      </Card.Content>
    </Card>

 <br/>
 <br/>
 <br/>

    <br/>

<Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      
    >
      <Modal.Header>
      <Form>
    <TextArea rows={2} placeholder='Title' value={tl} onChange={(e)=>Settl(e.target.value)}  />
  </Form>
      </Modal.Header>
      <Modal.Content image scrolling>
        

        <Modal.Description>
          <p>
          <Form>
          <TextArea placeholder='Tell us more' style={{ minHeight: 300 }} value={cont} onChange={(e) => Setcont(e.target.value)} />

  </Form>
          </p>
          </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() =>{handleUpdate(title,content,tl,cont); setOpen(false)}} primary>
          Update <Icon name='chevron right' />
        </Button>
        <Button onClick={() =>{ setOpen(false)}} primary>
          cancel <Icon name='chevron right' />
        </Button>
       
      </Modal.Actions>
    </Modal>


   


    <Modal
      closeIcon
      open={openD}
      
      onClose={() => setOpenD(false)}
      onOpen={() => setOpenD(true)}
    >
      <Header icon='archive' content='Are You Sure You Want To Delete' />
  
      <Modal.Actions>
        <Button color='red' onClick={() => setOpenD(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() =>{handleDelete(title); setOpenD(false)}}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
    </>
  )
}
export default SingleCard
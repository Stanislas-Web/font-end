import React,{useEffect, useState} from 'react';
import { Button, Icon, Image, Modal, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';
import img from '../assets/imgmessage.png';
import styled from 'styled-components';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LottieAnimation from './LottieAnimation';
import post from './post.json';

toast.configure();
const ErrorLine = styled.p`
  color: red;
`;

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);
  const [commentaire, setCommentaire] = useState("");
  const [errorCommentaire, setErrorCommentaire] = useState("");
  const [verificateur, setVerificateur] = useState(false);


  
  const validationPost = ()=>{

    if( commentaire.length <1 ){
      setVerificateur(true);
      setErrorCommentaire("ce champs est requis")
    }else{
      setVerificateur(false);
      handleSubmit();    
    }
  }

  const handleSubmit = ()=>{
    const newComment ={
      commentaire: commentaire,
    }

    
    console.log(newComment);

    axios.post(`https://us-central1-apitest-edb81.cloudfunctions.net/api/messages`, newComment)
    .then(res => {
      // window.location.reload();
      toast.info("post effectuer avec succes", toast.POSITION.TOP_LEFT)
      
      setOpen(false)
      
    })
    
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='vk'><Icon name='plus'/> Poster Un Message
      </Button>}
    >
      <Modal.Header>Send Message</Modal.Header>
      <Modal.Content image>
        <LottieAnimation lotti={post} height={300} width={300} />  
        <Modal.Description>

          <Form>
              <textarea  rows="10"  onChange={(e)=> setCommentaire(e.target.value)} cols="70" required>
                
              </textarea>

             {verificateur === true? <ErrorLine>{errorCommentaire}</ErrorLine>:"" }
              
          </Form>
        </Modal.Description>
  
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Annuler
        </Button>
        <Button
          content="Send"
          labelPosition='right'
          icon='checkmark'
          onClick={validationPost}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
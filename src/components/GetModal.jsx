import React,{useEffect, useState} from 'react';
import { Button, Icon, Table, Label, Menu, Modal } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerGetMessage = styled.div`
    display:flex;
`;

const ChildContainer = styled.div`
    display:flex;
    // justify-content:center;
    align-items:center;
    width: 100%;
    margin-bottom:40px;
`;


const ModalExampleScrollingContent = () => {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async function() {

      const messages = await axios.get(
        "https://us-central1-apitest-edb81.cloudfunctions.net/api/messages"
      );
      console.log(messages.data);
      setMessages(messages.data);
    })();
  }, []);


  const getData = ()=>{
    // axios.get(`https://us-central1-apitest-edb81.cloudfunctions.net/api/messages`)
    // .then(res => {
    //   setMessages(res.data);
    // })
    setOpen(true);
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={getData}
      trigger={<Button color='facebook'><Icon name='eye'/> Voir les Messages
    </Button>}
    >
      <Modal.Header>View Messages</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
        <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Messages</Table.HeaderCell>
                <Table.HeaderCell>DateTime</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {messages.map((message)=>
                    <Table.Row>
                    <Table.Cell>{message.commentaire}</Table.Cell>
                    <Table.Cell>{message.createdAt}</Table.Cell>
                  </Table.Row>
              )}

            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>

 
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Retour <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
    
  )
}

export default ModalExampleScrollingContent
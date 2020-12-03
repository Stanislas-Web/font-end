import './App.css';
import 'semantic-ui-css/semantic.min.css';
import GetModal from './components/GetModal';
import styled from 'styled-components';


const Container = styled.div`
    padding:20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Accueil() {
  return (
    <Container>
        <GetModal/>        
    </Container>
  );
}

export default Accueil;

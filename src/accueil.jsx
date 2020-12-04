import './App.css';
import 'semantic-ui-css/semantic.min.css';
import GetModal from './components/GetModal';
import styled from 'styled-components';
import PostModal from './components/PostModal';
import LottieAnimation from './components/LottieAnimation';
import comment from './components/animateaccueil.json';


const Container = styled.div`
    padding:20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -350px;
`;
const ButtonStyle = styled.div`
    padding:20%;
    display: flex;
    
    justify-content: center;
    align-items: center;
`;

function Accueil() {
  return (
    <div>
      
    <Container>
    
    <ButtonStyle>
      <GetModal/>
      <PostModal/>
      </ButtonStyle>  
      <LottieAnimation lotti={comment} height={300} width={300} />      
  </Container>
    </div>

  );
}

export default Accueil;

import React from 'react';
import styled from 'styled-components';
import DribbleHome from './Layouts/DribblHome';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 100%;
`;

const Header = styled.header`
  text-align: center;
  justify-content: center;
  width: 100%;
  line-height: 8vh;
  font-size: 2em;
`;

function App() {
    const toPath = () => {
      window.location.href = "http://localhost:9000/home";
    }
    return (
        <HomePageContainer>
          <Header data-cy="home-page-header"> Link1 Link2 Link3 Menu</Header>
            <DribbleHome>
            </DribbleHome>
        </HomePageContainer>
    );
}

export default App;

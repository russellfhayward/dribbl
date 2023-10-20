import React from 'react';
import styled from 'styled-components';
import DribbleHome from './Layouts/DribblHome';

const HomePageContainer = styled.div`
  justify-content: center;
  // border: 3px solid orange;
`;

const Header = styled.header`
  text-align: center;
  line-height: 8vh;
  font-size: 19px;
  // border: 3px solid blue
`;

 const App: React.FC = ({}) => {
    return (
        <HomePageContainer>
          <Header data-cy="home-page-header"> Link1 Link2 Link3 Menu</Header>
            <DribbleHome>
            </DribbleHome>
        </HomePageContainer>
    );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
`

function App() {
    const toPath = () => {
      alert('helllpppp')
      window.location.href = "https://localhost:3000/home";
    }
    return (
        <div>
            <h1>Hello, React!</h1>
            <Button onClick={toPath}>hello</Button>
        </div>
    );
}

export default App;

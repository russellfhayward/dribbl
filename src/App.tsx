import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
`

function App() {
    const toPath = () => {
     // alert('helllpppp')
      window.location.href = "http://localhost:9000/home";
    }
    return (
        <div>
            <h1>Hello, React!</h1>
            <h1>Hello are you working</h1>
            <h1>working</h1>
            <h1>hiow</h1>
            <h1>hiowrwegrgddergergthergthwfa</h1>
            <h1>?</h1>
            <Button onClick={toPath}>hello</Button>
        </div>
    );
}

export default App;

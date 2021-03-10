import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height='100vh'
            projectID="5c2b66ac-e141-4baf-8155-336dee3a9a5d"
            userName="richa21"
            userSecret="1234"
        />
    )
}

export default App
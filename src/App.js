import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height='100vh'
            projectID="359c8dc65-4d3e-bfa6-72bff4bade92"
            username="javascriptmastery"
            userSecret="123123"
        />
    )
}

export default App
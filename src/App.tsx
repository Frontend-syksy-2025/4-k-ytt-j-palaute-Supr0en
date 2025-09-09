import './App.css'
import * as React from "react";
import {useState} from "react";
import UserFeedback from "./UserFeedback.tsx";

function App() {

    type feedback = {
        name: string,
        message: string,
    }
    const [name, setName] = useState<string | undefined>(undefined);
    const [message, setMessage] = useState<string | undefined>(undefined);
    const [feedback, setFeedback] = useState<feedback | null>({name: "", message: ""});

    function SendMessage(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name || !message) return;
        setFeedback({name, message});
        setName('');
        setMessage('');
    }

    return (
    <>
        <form onSubmit={(event) => SendMessage(event)} style={{width: '275px', height: '150px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Insert Name'}/>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={'Insert Message'}/>
            <button type="submit">Send</button>
        </form>
        { feedback && <UserFeedback input={feedback} /> }
    </>
  )
}

export default App

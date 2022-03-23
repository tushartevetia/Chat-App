import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine height = "100vh"
     projectID ="44294544-2d63-4338-9e56-e3cb7efc0253" 
     userName = {localStorage.getItem('username')} 
     userSecret = {localStorage.getItem('password')}
     renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;

import React, {useState, useEffect} from "react"
// Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // Here is the place to write regular JS

  // State
  const [name, setName] = useState('Dev Ed');
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  // Effects
  useEffect(() => {
    console.log("we run a function");
  }, [textInput]);

  //Variables
  const message = 'Hello'
  
  //Functions

  return (
    <div className="App">
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList  tweets={tweets} name={name} setTweets={setTweets} />
    </div>
  );
}

export default App;

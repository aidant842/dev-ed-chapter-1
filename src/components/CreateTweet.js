import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const CreateTweet = ({textInput, setTextInput, tweets, setTweets}) => {

    //State
    /* const [textInput, setTextInput] = useState('');
    const [tweets, setTweets] = useState([]); */

    //Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {key: uuidv4(), message: textInput}]);
        setTextInput('');
    }
    return (
        /* Always need a containing div/element */
        <form action="" onSubmit={submitTweetHandler}>
            <textarea onChange={userInputHandler} value={textInput} name="" id="" cols="50" rows="5"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};


export default CreateTweet;

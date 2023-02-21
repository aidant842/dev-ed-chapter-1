import React from 'react';
import '../styles/Tweet.scss';

const Tweet = ({name, tweet, setTweets, tweets}) => {
    //Functions
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.key !== tweet.key));
    }
    return (
        /* Always need a containing div/element */
        <div className="tweet">
            <h2 className="tweet-title">{name}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
};


export default Tweet;

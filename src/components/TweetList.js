import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, tweets, setTweets}) => {
    return (
        /* Always need a containing div/element */
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet name={name} tweet={tweet} setTweets={setTweets} tweets={tweets} key={tweet.key} />
            ))}
        </div>
    );
};


export default TweetList;

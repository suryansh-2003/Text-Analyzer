import React from 'react'

const SentimentAnalyses = (props) => {
    let Sentiment = require('sentiment');
    let sentiment = new Sentiment();
    let mydoc = sentiment.analyze(props.text);
    let n = new Set(mydoc.negative);
    let p = new Set(mydoc.positive);

    return (
        <div className="contain center1">
            <h3 className="center1">Advanced text analysis</h3>
            <ul className="contain">
                <li><h4>Sentimental analysis</h4> </li>
                Text sentiment: {mydoc.score>0?'positive':mydoc.score<0?'negative':'neutral'}
                <br />
                Sentimental score: {mydoc.score}
                <br />
                positive words: {p.length!==0?new Array(...p).join(', '):'none'}
                <br />
                negative words: {n.length!==0?new Array(...n).join(', '):'none'}
                <br />
            </ul>   
        </div>
    )
}

export default SentimentAnalyses

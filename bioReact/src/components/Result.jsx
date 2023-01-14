import React from "react";

const  Result = ({Url, shortUrl}) => {
    console.log(Url, shortUrl)
    return(
        <div className="result">
            <div>{`Given link: ${Url}`}</div>
            <div>{`Shortened link:  shorturl.at/${shortUrl}`}</div>
        </div>
    )
}


export default Result
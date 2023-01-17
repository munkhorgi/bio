import React from "react";

const  Result = ({Url, shortUrl}) => {
    console.log(Url, shortUrl)
    return(
        <div className="result">
            <div>{`Given url : ${Url}`}</div>
            <div>{`Shortened url : localhost:3000/${shortUrl}`}</div>
        </div>
    )
}


export default Result
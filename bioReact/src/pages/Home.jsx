import boginooLogo from "../assets/boginooLogo.png";
import boginooLogoTwo from "../assets/boginooLogoTwo.png";
import footer from "../assets/footer.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { instance } from "../App";
import Result from "../components/Result";


const Home = () => {
  const [data, setData] = useState();
  const [url , setUrl] = useState()
  const getData = async () => {
    try {
      const res = await instance.post("/Url", {
        Url: url
      });
      console.log(res)
      setData(res.data.data.shortUrl)
    } catch (error) {
      console.log(error.message)
    }

    
  };
  return (
    <div className="home">
      <div className="header">
        <div></div>
        <div className="gybox">
          <h2 style={{ color: "#02B589", marginRight: "200px" }}>
            ХЭРХЭН АЖИЛЛАДАЖ ВЭ ?
          </h2>
          <Link to="/login" className="kill">
            <button className="headerButton">НЭВТРЭХ</button>
          </Link>
        </div>
      </div>
      <div className="main">
        <Link to={"/"}>
        <img src={boginooLogo} alt={boginooLogo} />
        </Link>
        <img src={boginooLogoTwo} alt={boginooLogoTwo} />
        <div className="mainInput">
          <input
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="https://www.web-huudas.mn"
            id="mainText"
          />
          <button onClick={getData} className="mainBtn">БОГИНОСГОХ</button>
        </div>
        <br />
        <div>{setUrl && <Result Url={url} shortUrl={data} />}</div>
        {/* <span>{"Given url:" + url}</span>
        <span>{"Shortened url: localhost:3000/" + data}</span> */}
      </div>
      <div className="footer">
        <img src={footer} alt={footer} />
      </div>
    </div>
  );
};

export default Home;

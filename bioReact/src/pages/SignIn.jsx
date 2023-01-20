import { instance } from "../App";
import "../App.css"
import { Link, useParams } from "react-router-dom";
import { useState ,useEffect } from "react";
import boginooLogo from "../assets/boginooLogo.png"
import footer from "../assets/footer.png"

const SignIn = () => {
  const { id } = useParams();
  const [url, setUrl] = useState();
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [history, setHistory] = useState([]);

  const getUser = async () => {
    const res = await instance.get(`/User/${id}`);
    setName(res.data.data.name);
  };
  const getHistory = async () => {
    const res = await instance.get("/Url");
    setHistory(
      res.data.data.map((el) => {
        return el.url;
      })
    );
  };

  const showShortUrl = async () => {
    try {
      const res = await instance.post("/Url/createUrl", {
        Url: url,
      });
      setData(res.data.data.url.shortUrl);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
    getHistory();
  }, [history]);
  return (
    <div className="home">
      <header>
        <br />
        <div>
          <div className="headerButton">{name}</div>
          <div
            className="headerButton"
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none ",
                cursor: " pointer",
              }}
            >
              Log Out
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Link to={"/"}>
          <img src={boginooLogo} alt="" />
        </Link>
        <div className="box">
          <input
            placeholder="https://www.web-huudas.mn"
            type="text"
            id="boginooInp"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="boginooButton" onClick={showShortUrl}>
            Богиносгох
          </button>
        </div>
        <div style={{ marginTop: 0 }}>
          <p>Өгөгдсөн холбоос:</p>

          <span>{url}</span>
          <p>Богино холбоос:</p>
          <span style={{ color: "purple", fontSize: 20 }}>
            {"localhost:3000/" + data}
          </span>
        </div>
        <h2 style={{ color: "#02B589", margin: 0, padding: 0 }}>Түүх</h2>
        <div className="history">
          {history.map((el) => {
            return (
              <div className="history2">
                <p>Өгөгдсөн холбоос:</p>
                {el}
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <img src={footer} alt="" />
      </footer>
    </div>
  );
};

export default SignIn;
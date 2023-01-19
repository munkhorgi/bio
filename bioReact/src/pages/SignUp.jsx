import boginooLogo from "../assets/boginooLogo.png";
import footer from "../assets/footer.png"
import "../App.css"
import {Link} from 'react-router-dom'
import { useState } from "react";
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../App"

const SignUp = () => {
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const signUp = async () => {
    try {
      const res = await instance.post("/User/signup", {
        username: username,
        pass: pass,
        email: email,
      });
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error("Burtgeltei email baina");
    }
  };

    return(
        <div className="home">
          <ToastContainer />
            <div className="header">
                <h2 style={{ color: "#02B589", marginRight: "100px" }}>
                ХЭРХЭН АЖИЛЛАДАЖ ВЭ ?
                </h2>
            </div>
            <div className="SignMain">
            <Link to={"/"}>
        <img src={boginooLogo} alt={boginooLogo} />
        </Link>
                <h2 style={{color: "#02B589"}}>Бүртүүлэх</h2>
                <div>
                <div>
                Username
                </div>
              <input
                type="text"
                name="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="inps"
              />
              <div>
                Цахим хаяг
              </div>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="name@mail.domain"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div> 
              Нууц үг
              </div>
              <input
                type="password"
                name="pass"
                className="inps"
                placeholder="••••••••••"
                onChange={(e) => setPass(e.target.value)}
              />
                <br/>
              <button className="headerButton" onClick={signUp}>Бүртүүлэх</button>
            </div>
            </div>
            <div className="footer">
             <img src={footer} alt={footer} />
            </div>
        </div>
    )
} 

export default SignUp;


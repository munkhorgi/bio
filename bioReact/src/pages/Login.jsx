import footer from "../assets/footer.png";
import boginooLogo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import "../App.css"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {instance} from "../App"


const Login = () => {

  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const logIn = async () => {
    try {
      const res = await instance.post("/User/login", {
        email: email,
        pass: pass,
      });
      console.log(res.data.data._id);
      window.location.replace(`/User/${res.data.data._id}`);
    } catch (error) {
      toast.error(error.response.data.error);
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
        <div className="main"> 
            <div>
                <img src={boginooLogo} alt={boginooLogo} />
                <h2 style={{color: "#02B589" , margin: "10px"}}>НЭВТРЭХ</h2>
            </div>
            <div>
                <div style={{margin: "5px"}}>
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
              <br />
              <input type="checkbox" name="" id="" /> Намайг сана
              <Link to = "/forgotpass">
                Нууц үгээ мартсан
              </Link>
            </div>
            <div>
            <br />
              <Link to = "/signup">
                Шинэ хэрэглэгч бол энд дарна уу?
              </Link>
              <br />
              <button className="headerButton" onClick={logIn}> НЭВТРЭХ </button>
            </div>
          
        </div>
        <div className="footer">
            <img src={footer} alt={footer} />
        </div>
    </div>
  )
};
export default Login;

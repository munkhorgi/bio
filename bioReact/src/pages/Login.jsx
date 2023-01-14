import footer from "../assets/footer.png";
import boginooLogo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import "../App.css"



const Login = () => {
  return(
    <div className="home">
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
              />
              <div>
                 Нууц үг
              </div>
              <input
                type="password"
                name="pass"
                className="inps"
                placeholder="••••••••••"
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
              <button className="headerButton"> НЭВТРЭХ </button>
            </div>
          
        </div>
        <div className="footer">
            <img src={footer} alt={footer} />
        </div>
    </div>
  )
};
export default Login;

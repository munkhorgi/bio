import boginooLogo from "../assets/boginooLogo.png";
import footer from "../assets/footer.png"
import "../App.css"

const SignUp = () => {
    return(
        <div className="home">
            <div className="header">
                <h2 style={{ color: "#02B589", marginRight: "100px" }}>
                ХЭРХЭН АЖИЛЛАДАЖ ВЭ ?
                </h2>
            </div>
            <div className="SignMain">
                <img src={boginooLogo} alt="boginoo" />
                <h2 style={{color: "#02B589"}}>Бүртүүлэх</h2>
                <div>
                <div>
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
              <div> 
              Нууц үгээ давтна уу?
              </div>
              <input
                type="password"
                name="pass"
                className="inps"
                placeholder="••••••••••"
              />
                <br/>
              <button className="headerButton">Бүртүүлэх</button>
            </div>
            </div>
            <div className="footer">
             <img src={footer} alt={footer} />
            </div>
        </div>
    )
} 

export default SignUp;
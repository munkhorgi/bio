import boginooLogo from "../assets/boginooLogo.png";
import footer from "../assets/footer.png"
import "../App.css"
import {Link} from 'react-router-dom'
const SignUp = () => {
  // const [password, setPassword] = useState();
  // const [email, setEmail] = useState();
  // const SignUp = async () => {
  //   try {
  //     await axios.post("http://localhost:8000/users/signup", {
  //       password: password,
  //       email: email,
  //     });
  //     window.location.replace("/login");
  //     toast.success("Amjilttai burtguullee");
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
    return(
        <div className="home">
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

{/* <div className="header">
<div className="topHeader">
<p className="topHeaderShit">Хэрхэн ажилладаг вэ?</p>
</div>
<div className="bottomHeader">
<Link to={"/"}>
  <img src={Logo} alt="" className="logo" />
</Link>
</div>
<div>
<p className="headerShit">Бүртгүүлэх</p>
</div>
</div>
<div className="main">
<div className="input">
<p className="holder">Цахим хаяг</p>
<input
  type="text"
  className="inputs"
  placeholder="name@mail.domain"
  onChange={(e) => setEmail(e.target.value)}
/>
<p className="holder">Нууц үг</p>
<input
  type="text"
  className="inputs"
  placeholder="··········"
  style={{ fontWeight: "bolder" }}
  onChange={(e) => setPassword(e.target.value)}
/>
<p className="holder">Нууц үгээ давтна уу?</p>
<input
  type="text"
  className="inputs"
  placeholder="··········"
  style={{ fontWeight: "bolder" }}
  onChange={(e) => setPassword(e.target.value)}
/>
</div>
</div>
<div className="thridMain">
<div className="help">
<button className="button" onClick={() => SignUp()}>
  Бүртгүүлэх
</button>
</div>
</div>
<div className="footer">
<div className="texts">
<p className="secondMainShit" style={{ color: "black" }}>
  Made with ❤️ by Nest Academy
</p>
<p
  className="secondMainShit"
  style={{ color: "gray", fontSize: "13px", marginLeft: "60px" }}
>
  ©boginoo.io 2023
</p>
</div>
</div>

<ToastContainer />
</> */}
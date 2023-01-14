import boginooLogo from "../assets/boginooLogo.png"
import footer from "../assets/footer.png"


const Forgotpass = () => {
    return(
        <div className="home">
            <div className="header">
            <h2 style={{ color: "#02B589", marginRight: "100px" }}>
            ХЭРХЭН АЖИЛЛАДАЖ ВЭ ?
          </h2>
            </div>
            <div className="main">
                <img src={boginooLogo} alt="boginoo Logo" />
                <div>
                    Цахим хаяг
                </div>
              <input
                type="text"
                name="email"
                className="inps"
                placeholder="name@mail.domain"
              />
              <button className="headerButton">Илгээх</button>
            </div>
            <div className="footer">
                <img src={footer} alt="footer" />
            </div>
        </div>
    )
}
export default Forgotpass;
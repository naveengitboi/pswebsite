import '../cssComponents/Footer.css'
import RandomShapes from './RandomShapes'
function Footer(){
    return(
        <>
            <div className="footer">
                <RandomShapes/>
                <div className="leftContent">
                    <h1 className="mediumHeading">Naveen</h1>
                    <p className="answer"> &copy; naveenjangiti </p>
                </div>
                <div className="footerLinks">
                    <ul>
                        <li><a href="https://twitter.com/navetwets" target={"_blank"}>Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235/" target={"_blank"} >Linked In</a></li>
                        <li><a href="https://www.deviantart.com/naveenau" target={"_blank"}>deviantart</a></li>
                        <li><a href="https://www.behance.net/naveenau" target={"_blank"}>Behance</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
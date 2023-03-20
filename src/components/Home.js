import Faq from "./Faq"
import '../cssComponents/Home.css'
import { Parallax } from "react-parallax"
import ImgCompo from "../images/ImgCompo"
import Content from "./Content"
function Home()
{
    return(
        <>
           <Parallax strength={700} >
        <div className="page homePage">
            <div className="shapes shapeOne"></div>
            <div className="shapes shapeTwo"></div>
            <div className="shapes shapeThree"></div>
            <div className="contentHome">
                <div className="homeLogo">
                    <span className="largeHeading">N</span>
                    <span className="largeHeading">A</span>
                    <span className="largeHeading">V</span>
                    <span className="largeHeading">E</span>
                    <span className="largeHeading">E</span>
                    <span className="largeHeading">N</span>
                    <span className="largeHeading">.</span>
                    <span className="largeHeading">J</span>
                </div>
                <p className="smallHeading">WEB  PS  Ai</p>
                <a href="https://naveenau.netlify.app/" target={'_blank'} >PORTFOLIO</a>
            </div>
            <div className="homeImage">
                <img src={ImgCompo[0][24]["image"]} alt="" />
            </div>
        </div>
        </Parallax>
        <Content/>
        
        </>
        
    )
}

export default Home
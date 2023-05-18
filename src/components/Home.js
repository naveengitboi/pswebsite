
import '../cssComponents/Home.css'
import { Parallax } from "react-parallax"
import Content from "./Content"
import RandomShapes from "./RandomShapes"
import ContentBody from "./ContentBody"
import profileImg from '../images/my edit cards 2.jpg'
function Home()
{
    return(
        <>
           <Parallax strength={700} >
        <div className="page homePage">
            <RandomShapes/>
            
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
                <a href="https://naveenau.netlify.app/" rel="noreferrer" target={'_blank'} >PORTFOLIO</a>
            </div>
            <div className="homeImage">
                {/* <img src={ImgCompo[0][32]["image"]} alt="" /> */}
                <img src={profileImg} alt="" />
            </div>
        </div>
        </Parallax>
        <Content/>
        <ContentBody/>
        
        </>
        
    )
}

export default Home


//style='display: inline-block;


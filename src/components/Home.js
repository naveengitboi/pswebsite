import Faq from "./Faq"
import '../cssComponents/Home.css'
import { Parallax } from "react-parallax"
function Home()
{
    return(
        <>
           <Parallax strength={300} >
        <div className="page homePage">
            <div className="shapes shapeOne"></div>
            <div className="shapes shapeTwo"></div>
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
                <a href="#">PORTFOLIO</a>
            </div>
            <div className="homeImage">
                
            </div>
        </div>
        </Parallax>
        <Faq/>
        
        </>
        
    )
}

export default Home
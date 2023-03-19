import Faq from "./Faq"
import { Parallax } from "react-parallax"
function Home()
{
    return(
        <>
        <div className="page">
           <Parallax bgImage="">
            Home
           </Parallax>
        </div>
        <Faq/>
        </>
        
    )
}

export default Home
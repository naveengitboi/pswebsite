import { Parallax } from "react-parallax";
import '../cssComponents/Content.css'
import ImgCompo from '../images/ImgCompo'
function Content(){
    return (
        <>
            <Parallax strength={200} bgImage={ImgCompo[0][29]["image"]}>
                <div className="page contentPage">
                    <div className="leftContent">
                        <h1 className="largeHeading">Hey Peeps</h1>
                        <p className="smallHeading">Congo! You met a motivated, enthusiastic, and creative learner! </p>
                    </div>

                </div>
            </Parallax>
        </>
    )
}

export default Content
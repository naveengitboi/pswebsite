import { Parallax } from "react-parallax";
import ImgCompo from '../images/ImgCompo'
import selfImage from '../images/my edit ps logo resized.jpg'
function Content(){
    return (
        <>
            <Parallax strength={200} bgImage={selfImage}>
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
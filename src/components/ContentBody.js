import '../cssComponents/ContentBody.css'
import { Parallax } from 'react-parallax'
import ImgCompo from '../images/ImgCompo'
import { NavLink } from 'react-router-dom'
function ContentBody() {
  return (
    <>
      <Parallax>
        <div className="page contentBodyPage">
          <div className="leftContentBody">
            <img src={ImgCompo[0][2]["image"]} alt="" />
          </div>
          <div className="rightContentBody">
            <h1 className='largeHeading'>
              What I Do?
            </h1>
            <p className='smallHeading'>
              Retouching, Photomanupulation, Poster designs
            </p>
            <NavLink to='/gallary'>View Gallary</NavLink>
          </div>

        </div>
      </Parallax>
    </>
  )
}

export default ContentBody
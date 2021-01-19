import React from 'react'
import './IntroRight.css'
const IntroRight = () => {
    return(
        <div className="right-column">
        <div className="preview-shadow">
          <div className="preview">
            <div className="corner" id="corner-tl"></div>
            <div className="corner" id="corner-tr"></div>

            <h3>What I Do</h3>
            <p>
              I develop UX/UI for websites. Sometimes, I would like to embark on back-end development.
            </p>
            <div className="corner" id="corner-bl"></div>
            <div className="corner" id="corner-br"></div>
          </div>
        </div>
      </div>
    )
}

export default IntroRight;
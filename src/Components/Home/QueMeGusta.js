import React from "react";
import "../../CSS/QueMeGusta.css";
const QueMeGusta = () => {
  return (
    <section className="hobbies">
      <h1 style={{height:'112px'}}>What I Like</h1>

      <div className="hobbie-main">
       
        <div className="hobbie-icon ">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
          </svg>
          <h4>Learn && Study</h4>
        </div>
        <div className="hobbie-icon">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
          </svg>
          <h4>Play VideoGames</h4>
        </div>
        <div className="hobbie-icon">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeLarge"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path>
          </svg>
          <h4>Make Code</h4>
        </div>
        

      </div>
    </section>
  );
};

export default QueMeGusta;

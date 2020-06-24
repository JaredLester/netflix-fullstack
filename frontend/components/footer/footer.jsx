import React from "react";

class Footer extends React.Component {

    render() {

       return(
        <footer className="footer-content-box">
            <div className="footer-icons">
                   <a href="https://github.com/https://github.com/JaredLester" className="social-media-link">
                    <i className="fa fa-github fa-3x"></i>
                </a>

                   <a href="https://www.linkedin.com/in/jared-lester-173b951a9/" className="social-media-link">
                       <i className="fa fa-linkedin fa-3x" ></i>
                </a>

                <a href="mailto:lester.jared11@gmail.com" className="social-media-link">
                       <i className="fa fa-envelope fa-3x" ></i>
                </a>
            </div>
            <div className="footer-text-box">
                <h2 className="footer-title">Web app description</h2>
                <p className="footer-description">
                    This is a Netflix inspired streamig website that houses all of your favorite anime.
                </p>
                <h2 className="footer-title">Technologies</h2>
                <ul className="footer-ul-topics">
                    <li className="footer-topics">Ruby on Rails</li>
                    <li className="footer-topics">React.js</li>
                    <li className="footer-topics">Redux</li>
                    <li className="footer-topics">Ajax</li>
                    <li className="footer-topics">CSS3</li>
                    <li className="footer-topics">HTML5</li>
                    <li className="footer-topics">AWS</li>
                    <li className="footer-topics">PostgreSQL</li>
                </ul>
            </div>
            <div className="footer-creator">
                Developed by Jared Lester
            </div>

        </footer>
       )
    }

}

export default Footer;
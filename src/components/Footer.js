import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faMailchimp
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <Fragment>
            <footer className='footer-span'>
                <div>
                    Follow Us  &nbsp;&nbsp; &nbsp;&nbsp;
                    <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} size="2x" /></a> &nbsp;&nbsp;
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a> &nbsp;&nbsp;
                    <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a> &nbsp;&nbsp;
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a> &nbsp;&nbsp;
                    <a href="https://www.gmail.com/"><FontAwesomeIcon icon={faMailchimp} size="2x" /></a> <br></br>
                    <p><a href="mailto:gmail.com">abilash27101998@gmail.com</a></p>
                    <br></br>
                    <p>@Developed</p>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
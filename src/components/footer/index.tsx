import {
  rectangleCenter,
  triangleRight,
  webovioPoint,
  triangleLeft,
  webovio,
} from "../../image";
import "./index.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__slogan">
          <div className="footer__text">
            Let’s make something amazing together.
          </div>
          <div className="footer__text"> ▶ LET'S GET STARTED</div>
        </div>

        <div className="footer__block">
          <div className="footer__info">
            <div className="footer__call">
              <div className="footer__info-block">
                <div className="footer__phone">Phone</div>
                <div className="footer__phone-name">+32 50 31 28 32</div>
              </div>
              <div className="footer__info-block">
                <div className="footer__address">Address</div>
                <div className="footer__address-name">
                  491 Merlin Crest Suite 963
                </div>
              </div>
            </div>
            <hr className="footer__line" />
          </div>
        </div>

        <div className="footer__description">
          <div className="footer__description-block">
            <div className="footer__paragraph">Services</div>
            <ul className="footer__paragraph-list">
              <li className="footer__paragraph-text">Strategy Design</li>
              <li className="footer__paragraph-text">Product Design</li>
              <li className="footer__paragraph-text">Content Strategy</li>
              <li className="footer__paragraph-text">Brand Strategy</li>
              <li className="footer__paragraph-text">Development</li>
            </ul>
          </div>

          <div className="footer__description-block">
            <div className="footer__paragraph">Help And Advice</div>
            <ul className="footer__paragraph-list">
              <li className="footer__paragraph-text">How it works</li>
              <li className="footer__paragraph-text">Contact Support</li>
              <li className="footer__paragraph-text">Privacy Policy</li>
              <li className="footer__paragraph-text">FAQ</li>
            </ul>
          </div>

          <div className="footer__description-block">
            <div className="footer__paragraph">Company</div>
            <ul className="footer__paragraph-list">
              <li className="footer__paragraph-text">About</li>
              <li className="footer__paragraph-text">Blog</li>
              <li className="footer__paragraph-text">Contact</li>
              <li className="footer__paragraph-text">Jobs</li>
            </ul>
          </div>

          <div className="footer__description-block">
            <div className="footer__paragraph">Get in Touch</div>
            <div className="footer__paragraph-slogan">
              Feel free to get in touch with us vai email
            </div>
            <div className="footer__description-email">
              info.webovio@gmail.com
            </div>
            <div className="footer__description-content">
              <div className="footer__description-circle"></div>
              <div className="footer__description-circle"></div>
              <div className="footer__description-circle"></div>
              <div className="footer__description-circle"></div>
              <div className="footer__description-background"></div>
            </div>
          </div>
        </div>

        <hr className="footer__under-line" />

        <div className="footer-under__block">
          <div className="logo logo-position">
            <div className="logo__inner">
              <div className="logo__box">
                <img
                  className="logo__picture"
                  src={triangleLeft}
                  alt="triangle"
                />
                <img
                  className="logo__picture"
                  src={rectangleCenter}
                  alt="triangle"
                />
                <img
                  className="logo__picture"
                  src={triangleRight}
                  alt="triangle"
                />
              </div>
              <img className="logo__text" src={webovio} alt="text" />
              <img className="logo__point" src={webovioPoint} alt="point" />
            </div>
          </div>
          <div className="footer-under__text">
            © 2020@webovio. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

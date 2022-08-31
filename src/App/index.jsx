import "./index.scss";
import webovio from "../image/slider/webovio.png";
import webovioPoint from "../image/slider/webovioPoint.png";
import triangleLeft from "../image/slider/triangleLeft.png";
import rectangleCenter from "../image/slider/rectangle.png";
import triangleRight from "../image/slider/triangleRight.png";
import getInTouch from "../image/slider/getInTouch.png";
import menu from "../image/slider/menu.png";

import wal from "../image/clientBlock/wal.png";
import ideal from "../image/clientBlock/ideal.png";
import leadershipAcademy from "../image/clientBlock/leadershipAcademy.png";
import andrewPorter from "../image/clientBlock/andrewPorter.png";
import phalenLeadership from "../image/clientBlock/phalenLeadership.png";

import photoPeople from "../image/clientService/oval.png";
import bitmap from "../image/project/bitmap_1.png";
import bitmap_2 from "../image/project/bitmap_2.png";
import bitmap_3 from "../image/project/bitmap_3.png";
import peopleBanner from "../image/project/people.png";
import peopleBanner_2 from "../image/project/people_2.png";
import peopleBanner_3 from "../image/project/people_3.png";

export const App = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="slider__inner">
          <nav className="navigation-bar">
            <ul className="navigation-bar__inner">
              <div className="logo">
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
                  <img
                    className="logo__point"
                    src={webovioPoint}
                    alt="point"
                  />
                </div>
              </div>
              <img
                className="navigation-bar__menu"
                src={menu}
                alt="menu"
              />
            </ul>
          </nav>

          <div className="box">
            <div className="box__inner">
              <div className="box__text">A place where </div>
              <div className="box__text">
                A creative agency for redemptive brands
              </div>
              <div className="box__text">
                Anteelo is a leading strategic design firm that builds
                powerful digital solutions for startups and enterprises.
              </div>
              <img className="box__link" src={getInTouch} alt="link"></img>
              <div className="box__string"></div>
            </div>
          </div>

          <div className="client">
            <div className="client__inner">
              <div className="client__box">
                <img
                  className="client__item"
                  src={andrewPorter}
                  alt="brends"
                />
                <img
                  className="client__item"
                  src={leadershipAcademy}
                  alt="brends"
                />
                <img className="client__item" src={wal} alt="brends" />
                <img className="client__item" src={ideal} alt="brends" />
                <img
                  className="client__item"
                  src={phalenLeadership}
                  alt="brends"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="services__inner">
            <div className="services__item">
              <div className="services__inner-block">
                <div className="services__text">What we do for you</div>
                <div className="services__text">
                  Strategy. Design Content. Technology Development
                </div>
                <div className="services__text">
                  There’s no secret sauce, no wizard behind the curtain.
                  What makes Aerolab tick is an interdisciplinary team with
                  a framework that fosters candid collaboration.
                </div>
                <div className="services__text">▶ More know About us</div>
              </div>
            </div>

            <div className="services__item">
              <div className="services__inner-block">
                <div className="services__text">
                  With More than 10 Years of Knowledge and Expertise we
                  Design and Code Websites and Apps, We Build Brands and
                  Help Them Succeed
                </div>
                <div className="services__block">
                  <img
                    className="services__picture"
                    src={photoPeople}
                    alt="people"
                  />
                  <div className="services__block-text">
                    <div className="services__text-people">
                      Genevieve Rodriquez
                    </div>
                    <div className="services__text-people">
                      Founder & CEO, Webovio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project__inner">
            <hr className="project__line" />
            <div className="project__block">
              <div className="project__text">
                We Have Some Awesomr Project.
              </div>
              <div className="project__text">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
              </div>
            </div>
          </div>

          <div className="product">
            <div className="product__inner">
              <img
                className="product__picture"
                src={bitmap}
                alt="bitmap"
              />
              <div className="product__banner">
                <div className="product__banner-text">
                  “In my history of working with trade show vendors, I can
                  honestly say that there is not one company that I've ever
                  worked with that has better service than Exhibit
                  Systems.”
                </div>
                <div className="product__banner-block">
                  <img
                    className="product__banner-avatar"
                    src={peopleBanner}
                    alt="people"
                  />
                  <div className="product__banner-block-slogans">
                    <div className="product__banner-slogan">
                      Angel Armstrong
                    </div>
                    <div className="product__banner-slogan">
                      Founder & CEO, Google
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__block">
                <div className="product__text">
                  The wall new Balenciaga.com
                </div>
                <div className="product__text">
                  This article is floated online with an aim to help you
                  find the best dvd printing solution.
                  <br />
                  <br /> Dvd printing is an important feature used by large
                  and small DVD production houses to print information on
                  DVDs.
                </div>
                <div className="product__text">▶ See Case Study</div>
                <div className="product__underline"></div>
              </div>
            </div>

            <div className="product__inner reverse-block">
              <img
                className="product__picture size-picture-2"
                src={bitmap_2}
                alt="bitmap"
              />
              <div className="product__banner product-reverse">
                <div className="product__banner-text">
                  “I know they are going to be honest with me. I am not
                  going to get a subpar product; I know it is going to be
                  good. That is the number one advantage of working with
                  Exhibit Systems.
                </div>
                <div className="product__banner-block">
                  <img
                    className="product__banner-avatar"
                    src={peopleBanner_2}
                    alt="people"
                  />
                  <div className="product__banner-block-slogans">
                    <div className="product__banner-slogan">Lina Hart</div>
                    <div className="product__banner-slogan">
                      Founder & CEO, Jico
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__block right-text">
                <div className="product__text">
                  Is this the future of
                  <br />
                  3D model?
                </div>
                <div className="product__text">
                  While it was just a TV show, that little speech at the
                  beginning of the original Star Trek show really did do a
                  good job of capturing our feelings about space.
                  <br />
                  <br /> It is those feelings that drive our love of
                  astronomy and our desire to learn more and more about it.
                </div>
                <div className="product__text">▶ See Case Study</div>
                <div className="product__underline"></div>
              </div>
            </div>

            <div className="product__inner">
              <img
                className="product__picture size-picture-3"
                src={bitmap_3}
                alt="bitmap"
              />
              <div className="product__banner product-reverse-3">
                <div className="product__banner-text">
                  “Exhibit Systems is not a provider. They are not a
                  supplier. They are a partner with expertise in making
                  trade shows effective.”
                </div>
                <div className="product__banner-block product-reverse-text">
                  <img
                    className="product__banner-avatar center-avatar"
                    src={peopleBanner_3}
                    alt="people"
                  />
                  <div className="product__banner-block-slogans center-3">
                    <div className="product__banner-slogan">
                      Eunice Oliver
                    </div>
                    <div className="product__banner-slogan">
                      Founder & CEO, Zeem
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__block">
                <div className="product__text center-text">
                  Is this the future of
                  <br />
                  <span className="left-text">Online Booking</span>
                </div>
                <div className="product__text left-text">
                  You should be able to find several indispensable facts
                  about motivation in the following paragraphs.
                  <br />
                  <br /> If there’s at least one fact you didn’t know
                  before, imagine the difference it might make.
                </div>
                <div className="product__text left-text">
                  ▶ See Case Study
                </div>
                <div className="product__underline"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="evaluation">
          <div className="evaluation__inner">
            <hr className="evaluation__line" />

            <div className="evaluation__title">
              Deation & Evaluation - Best Way to Kick off Your Product Idea
            </div>

            <div className="evaluation__block-text">
              <div className="evaluation__block">
                <div className="evaluation__header">
                  Product <br /> Design Sprint
                </div>
                <div className="evaluation__text">
                  A five-day workshop that will help you answer crucial
                  business questions
                </div>
                <a
                  className="evaluation__link  evaluation__link--active"
                  href="/#">
                  ▶ Read More
                </a>
              </div>

              <div className="evaluation__block">
                <div className="evaluation__header">
                  Scoping
                  <br /> Session
                </div>
                <div className="evaluation__text">
                  A workshop aimed at shaping your business idea, answering
                  questions regarding project planning
                </div>
                <a className="evaluation__link" href="/#">
                  ▶ Read More
                </a>
              </div>

              <div className="evaluation__block">
                <div className="evaluation__header">
                  UX
                  <br /> Review
                </div>
                <div className="evaluation__text">
                  An evaluation which will help you radically improve your
                  product.
                </div>
                <a className="evaluation__link" href="/#">
                  ▶ Read More
                </a>
              </div>

              <div className="evaluation__block">
                <div className="evaluation__header">
                  Code
                  <br /> Review
                </div>
                <div className="evaluation__text">
                  Do you know what one of the key secrets of success is
                  what makes people successful in business
                </div>
                <a className="evaluation__link" href="/#">
                  ▶ Read More
                </a>
              </div>
            </div>
          </div>
        </div>

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
                    <div className="footer__phone-name">
                      +32 50 31 28 32
                    </div>
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
                  <li className="footer__paragraph-text">
                    Strategy Design
                  </li>
                  <li className="footer__paragraph-text">
                    Product Design
                  </li>
                  <li className="footer__paragraph-text">
                    Content Strategy
                  </li>
                  <li className="footer__paragraph-text">
                    Brand Strategy
                  </li>
                  <li className="footer__paragraph-text">Development</li>
                </ul>
              </div>

              <div className="footer__description-block">
                <div className="footer__paragraph">Help And Advice</div>
                <ul className="footer__paragraph-list">
                  <li className="footer__paragraph-text">How it works</li>
                  <li className="footer__paragraph-text">
                    Contact Support
                  </li>
                  <li className="footer__paragraph-text">
                    Privacy Policy
                  </li>
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
                  <img
                    className="logo__point"
                    src={webovioPoint}
                    alt="point"
                  />
                </div>
              </div>
              <div className="footer-under__text">
                © 2020@webovio. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

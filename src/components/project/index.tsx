import {
  peopleBanner_2,
  peopleBanner_3,
  peopleBanner,
  bitmap_2,
  bitmap_3,
  bitmap,
} from "../../image";
import "./index.scss";

export const Project: React.FC = () => {
  return (
    <div className="project">
      <div className="project__inner">
        <hr className="project__line" />
        <div className="project__block">
          <div className="project__text">We Have Some Awesomr Project.</div>
          <div className="project__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
      </div>

      <div className="product">
        <div className="product__inner">
          <img className="product__picture" src={bitmap} alt="bitmap" />
          <div className="product__banner">
            <div className="product__banner-text">
              “In my history of working with trade show vendors, I can honestly
              say that there is not one company that I've ever worked with that
              has better service than Exhibit Systems.”
            </div>
            <div className="product__banner-block">
              <img
                className="product__banner-avatar"
                src={peopleBanner}
                alt="people"
              />
              <div className="product__banner-block-slogans">
                <div className="product__banner-slogan">Angel Armstrong</div>
                <div className="product__banner-slogan">
                  Founder & CEO, Google
                </div>
              </div>
            </div>
          </div>
          <div className="product__block">
            <div className="product__text">The wall new Balenciaga.com</div>
            <div className="product__text">
              This article is floated online with an aim to help you find the
              best dvd printing solution.
              <br />
              <br /> Dvd printing is an important feature used by large and
              small DVD production houses to print information on DVDs.
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
              “I know they are going to be honest with me. I am not going to get
              a subpar product; I know it is going to be good. That is the
              number one advantage of working with Exhibit Systems.
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
              While it was just a TV show, that little speech at the beginning
              of the original Star Trek show really did do a good job of
              capturing our feelings about space.
              <br />
              <br /> It is those feelings that drive our love of astronomy and
              our desire to learn more and more about it.
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
              “Exhibit Systems is not a provider. They are not a supplier. They
              are a partner with expertise in making trade shows effective.”
            </div>
            <div className="product__banner-block product-reverse-text">
              <img
                className="product__banner-avatar center-avatar"
                src={peopleBanner_3}
                alt="people"
              />
              <div className="product__banner-block-slogans center-3">
                <div className="product__banner-slogan">Eunice Oliver</div>
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
              You should be able to find several indispensable facts about
              motivation in the following paragraphs.
              <br />
              <br /> If there’s at least one fact you didn’t know before,
              imagine the difference it might make.
            </div>
            <div className="product__text left-text">▶ See Case Study</div>
            <div className="product__underline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

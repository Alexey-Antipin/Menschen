import { photoPeople } from "../../image";
import "./index.scss";

export const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services__inner">
        <div className="services__item">
          <div className="services__inner-block">
            <div className="services__text">What we do for you</div>
            <div className="services__text">
              Strategy. Design Content. Technology Development
            </div>
            <div className="services__text">
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </div>
            <div className="services__text">▶ More know About us</div>
          </div>
        </div>

        <div className="services__item">
          <div className="services__inner-block">
            <div className="services__text">
              With More than 10 Years of Knowledge and Expertise we Design and
              Code Websites and Apps, We Build Brands and Help Them Succeed
            </div>
            <div className="services__block">
              <img
                className="services__picture"
                src={photoPeople}
                alt="people"
              />
              <div className="services__block-text">
                <div className="services__text-people">Genevieve Rodriquez</div>
                <div className="services__text-people">
                  Founder & CEO, Webovio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

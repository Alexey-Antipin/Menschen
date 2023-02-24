import {
  leadershipAcademy,
  phalenLeadership,
  rectangleCenter,
  triangleRight,
  triangleLeft,
  webovioPoint,
  andrewPorter,
  getInTouch,
  webovio,
  ideal,
  menu,
  wal,
} from "../../image";
import "./index.scss";

export const Slider: React.FC = () => {
  return (
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
              <img className="logo__point" src={webovioPoint} alt="point" />
            </div>
          </div>
          <img className="navigation-bar__menu" src={menu} alt="menu" />
        </ul>
      </nav>

      <div className="box">
        <div className="box__inner">
          <div className="box__text">A place where </div>
          <div className="box__text">
            A creative agency for redemptive brands
          </div>
          <div className="box__text">
            Anteelo is a leading strategic design firm that builds powerful
            digital solutions for startups and enterprises.
          </div>
          <img className="box__link" src={getInTouch} alt="link"></img>
          <div className="box__string"></div>
        </div>
      </div>

      <div className="client">
        <div className="client__inner">
          <div className="client__box">
            <img className="client__item" src={andrewPorter} alt="brends" />
            <img
              className="client__item"
              src={leadershipAcademy}
              alt="brends"
            />
            <img className="client__item" src={wal} alt="brends" />
            <img className="client__item" src={ideal} alt="brends" />
            <img className="client__item" src={phalenLeadership} alt="brends" />
          </div>
        </div>
      </div>
    </div>
  );
};

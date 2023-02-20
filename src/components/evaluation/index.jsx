import "./index.scss";

export const Evaluation = () => {
  return (
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
              A five-day workshop that will help you answer crucial business
              questions
            </div>
            <a className="evaluation__link  evaluation__link--active" href="/#">
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
              An evaluation which will help you radically improve your product.
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
              Do you know what one of the key secrets of success is what makes
              people successful in business
            </div>
            <a className="evaluation__link" href="/#">
              ▶ Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

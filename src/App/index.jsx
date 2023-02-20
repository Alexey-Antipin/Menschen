import { Evaluation, Slider, Services, Project, Footer } from "../components";
import "./index.scss";

export const App = () => {
  return (
    <div className="slider">
      <div className="container">
        <Slider />
        <Services />
        <Project />
        <Evaluation />
        <Footer />
      </div>
    </div>
  );
};

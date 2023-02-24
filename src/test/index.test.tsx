import { Evaluation, Footer, Project, Services, Slider } from "../components";
import { render } from "@testing-library/react";
import { App } from "../app";

describe("Тестирование", () => {
  test("Все компоненты", () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });

  test("Evaluation", () => {
    const { container } = render(<Evaluation />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("evaluation");
    expect(cls.length).toBe(1);
  });

  test("Footer", () => {
    const { container } = render(<Footer />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("footer");
    expect(cls.length).toBe(1);
  });

  test("Project", () => {
    const { container } = render(<Project />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("project");
    expect(cls.length).toBe(1);
  });

  test("Services", () => {
    const { container } = render(<Services />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("services");
    expect(cls.length).toBe(1);
  });

  test("Slider", () => {
    const { container } = render(<Slider />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const cls = container.getElementsByClassName("slider__inner");
    expect(cls.length).toBe(1);
  });
});

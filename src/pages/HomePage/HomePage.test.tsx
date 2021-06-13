import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
import HomePage from "./HomePage";

it("Should render with no errors", () => {
  window.scrollTo = jest.fn();

  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
});

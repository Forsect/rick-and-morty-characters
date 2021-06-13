import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
import DetailsPage from "./DetailsPage";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");

  return {
    ...originalModule,
    useParams: () => ({
      id: "1",
    }),
  };
});

it("Should render with no errors", () => {
  window.scrollTo = jest.fn();

  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>
  );
});

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";
import SearchInput from "./SearchInput";

it("Should render with no errors", () => {
  render(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  );
});

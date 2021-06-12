import { render } from "@testing-library/react";
import LoadingScreen from "./LoadingScreen";

it("Should render with no errors", () => {
  render(<LoadingScreen />);
});

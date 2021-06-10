import { render } from "@testing-library";
import HomePage from "./HomePage";

it("Should render with no errors", () => {
  render(<HomePage {...HomePageMock} />);
});

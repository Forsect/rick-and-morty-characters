import { render } from "@testing-library";
import DetailsPage from "./DetailsPage";

it("Should render with no errors", () => {
  render(<DetailsPage {...DetailsPageMock} />);
});

import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

it("Should render with no errors", () => {
  render(<CharacterCard character={{ id: "0", image: "", name: "test", species: "test" }} />);
});

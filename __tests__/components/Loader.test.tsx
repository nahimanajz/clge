import Loader from "@/components/Loader";
import { render, screen } from "@testing-library/react";
describe("Loader tests", () => {
    it("Should match loader snapshot", () => {
  
      const { container } = render(<Loader />);
      expect(container).toMatchSnapshot();
    });

    });
  
  
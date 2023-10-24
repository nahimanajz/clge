import { render, screen } from "@testing-library/react";
import NavBar from "@/components/Navbar";

describe("Navbar tests", () => {
  const onFilter = () => {};
  
  it("Should match navbar snapshot", () => {
    const { container } = render(<NavBar onFilter={onFilter} />);
    expect(container).toMatchSnapshot();
  });
  it("Should find app title ", () => {
  
    render(<NavBar onFilter={onFilter} />);
    const titleTxt = screen.getByText("Hotel&Co")
   expect(titleTxt).toBeInTheDocument();
 });
});

import NavigationTab from "@/components/NavigationTab";
import { render, screen, fireEvent } from "@testing-library/react";


const onClick = jest.fn()

describe("Navigation ", () => {
  it(" should match snapshot", () => {
    const onFilter = () => {};
    const { container } = render(<NavigationTab onFilter={onFilter} />);
    expect(container).toMatchSnapshot();
  });

  it("should handle click event", ()=> {
    const onFilter = () => {};
    const { container } = render(<NavigationTab onFilter={onFilter} />);
    expect(container).toMatchSnapshot();
  })
});

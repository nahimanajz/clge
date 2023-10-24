import { screen, render, fireEvent } from "@testing-library/react";
import RoomCard from "@/components/RoomCard";




jest.mock("next/navigation", () => ({
  useRouter: () => ({ pathname: "/room/1/details" }),
}));

describe("room card test ", () => {
  const room = {
    id: "1",
    title: "example title",
    price: "23.00",
    shortDescription: "This is the best relaxing room in our city",
    description: "Repellendus dolor quae tempora autem quia quas in totam illo",
    avatar: "https://loremflickr.com/640/480/city",
    images: [
      {
        id: "1",
        leftSide:
          "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
        rightSide:
          "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
        front:
          "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
        back: "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
      },
    ],
    country: "Rwanda",
    city: "kigali",
    daytime: "Monday",
    createdAt: "2023-10-22T17:03:32.949Z",
    person: "Sherry Dietrich",
  };
  const findRouteName = (text: any, options={exact:true}) => {
    return screen.getByText((content, element) => {
      if (options.exact) {
        return content === text;
      }
      return content.includes(text);
    }, options);
  };

  const pathElement = findRouteName("/room/1/details", {exact:true});

  it(" should match snapshot", () => {
    const { container } = render(<RoomCard room={room} />);
    expect(container).toMatchSnapshot();
  });

  it(" should render with correct path name", () => {
    render(<RoomCard room={room} />);
    expect(pathElement).toBeInTheDocument();
  });

  it("should navigate to detail page", ()=> {
    fireEvent.click(pathElement)

    const someDetailPageText = screen.getByText("Room added on:")
    expect(someDetailPageText).toBeInTheDocument()
  })
});

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import LeftMenu from "./LeftMenu";
import { ReactNode } from "react";
import singletonRouter from "next/router";

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: ReactNode; href: string }) =>
      children
);

jest.mock("next/router", () => {
  return { asPath: "/shopPages/new in".toLowerCase().replace(/\s/g, "-") };
});

describe("components -> LeftMenu", () => {
  test("items in menu", () => {
    const menuList = [
      { name: "New In", imageUrl: "/images/leftMenu/1.png" },
      { name: "Clothing", imageUrl: "/images/leftMenu/2.png" },
      { name: "Shoes", imageUrl: "/images/leftMenu/3.png" },
    ];
    render(
      <Provider store={store}>
        <LeftMenu menuList={menuList} />
      </Provider>
    );

    expect(screen.getAllByTestId(/left-menu-item/i)).toHaveLength(3);
  });

  test("click on item", () => {
    const menuList = [{ name: "New In", imageUrl: "/images/leftMenu/1.png" }];
    render(
      <Provider store={store}>
        <LeftMenu menuList={menuList} />
      </Provider>
    );

    const link = screen.getByTestId(/left-menu-link new in/i);
    fireEvent.click(link);
    expect(singletonRouter).toMatchObject({
      asPath: "/shopPages/new in".toLowerCase().replace(/\s/g, "-"),
    });
  });
});

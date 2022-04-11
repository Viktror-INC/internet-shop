import { waitFor, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import LogIn from "./LogIn";
import * as getDataApi from "../../utils/getData/getData";

describe("components -> LogIn", () => {
  const response = {
    data: [
      {
        login: "lol",
        password: "123",
        cartItems: [
          {
            title: "Short top",
            description: "Like a Mega Men",
            price: "3800",
            count: "8",
            imageUrl:
              "https://res.cloudinary.com/cofee2456/image/upload/v1648654624/inteenet-shop/men3_ujqs2d.webp",
            type: "men-jacket-clothing",
            salesType: "none",
            id: 2,
          },
          {
            title: "Short top",
            description: "Like a Mega Men",
            price: "3800",
            count: "8",
            imageUrl:
              "https://res.cloudinary.com/cofee2456/image/upload/v1648654624/inteenet-shop/men3_ujqs2d.webp",
            type: "men-jacket-clothing",
            salesType: "none",
            id: 2,
          },
        ],
        likes: [],
        id: "1",
      },
      {
        login: "lol",
        password: "123",
        cartItems: [
          {
            title: "Short top",
            description: "Like a Mega Men",
            price: "3800",
            count: "8",
            imageUrl:
              "https://res.cloudinary.com/cofee2456/image/upload/v1648654624/inteenet-shop/men3_ujqs2d.webp",
            type: "men-jacket-clothing",
            salesType: "none",
            id: 2,
          },
          {
            title: "Short top",
            description: "Like a Mega Men",
            price: "3800",
            count: "8",
            imageUrl:
              "https://res.cloudinary.com/cofee2456/image/upload/v1648654624/inteenet-shop/men3_ujqs2d.webp",
            type: "men-jacket-clothing",
            salesType: "none",
            id: 2,
          },
        ],
        likes: [],
        id: "2",
      },
    ],
  };
  let loginInput: HTMLElement;
  let passwordInput: HTMLElement;
  let submitButton: HTMLElement;
  let closeButton: HTMLElement;

  beforeEach(async () => {
    act(() => {
      render(
        <Provider store={store}>
          <LogIn />
        </Provider>
      );
    });
    // console.log(expect.getState().currentTestName);

    if (expect.getState().currentTestName == "components -> LogIn Logout") {
      return;
    }
    const loginButton = screen.getByTestId(/loginButton/i);
    fireEvent.click(loginButton);

    loginInput = await screen.findByPlaceholderText(/login/i);
    passwordInput = screen.getByPlaceholderText(/password/i);
    submitButton = screen.getByTestId(/submitButton/i);
    closeButton = screen.getByTestId(/closeButton/i);
  });

  test("Close Login Tab", async () => {
    fireEvent.click(closeButton);
    expect(screen.queryByTestId(/logInTabWrap/i)).not.toBeInTheDocument();
  });

  test("Login tab - wrong username and password", async () => {
    const getData = jest.spyOn(getDataApi, "getData");
    fireEvent.change(loginInput, { target: { value: "lol33" } });
    fireEvent.change(passwordInput, { target: { value: "1233424" } });
    fireEvent.click(submitButton);

    expect(getData).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId(/logInTabWrap/i)).toBeInTheDocument();
  });

  test("Login tab - correct username and password", async () => {
    const getData = jest.spyOn(getDataApi, "getData");
    fireEvent.change(loginInput, { target: { value: "lol" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });

    act(() => {
      fireEvent.click(submitButton);
    });

    expect(getData).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.queryByTestId(/logInTabWrap/i)).toBeNull()
    );
  });

  test("Logout", () => {
    const logOut = screen.getByTestId("logOut");
    //   expect(logOut).toBeInTheDocument;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});

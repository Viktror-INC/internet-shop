import { getData } from "./getData";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import { ReactNode } from "react";
import singletonRouter from "next/router";
import axios from "axios";

jest.mock("axios");

describe("utils -> getData", () => {
  let response: any;
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  beforeEach(() => {
    response = {
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
  });
  test("correct value - string", async () => {
    mockedAxios.get.mockReturnValue(response);
    const data = await getData(
      "https://624339c0b6734894c15c6729.mockapi.io/login"
    );
    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      `https://624339c0b6734894c15c6729.mockapi.io/login`
    );
    expect(data).toHaveLength(2);
  });
});

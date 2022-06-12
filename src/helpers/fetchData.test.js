import "@testing-library/jest-dom/extend-expect";
import { fetchData } from "./fetchData";

const USERS_RESPONSE = {
  data: [
    {
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      email: "george.bluth@reqres.in",
      first_name: "George",
      id: 1,
      last_name: "Bluth",
    },
    {
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      id: 2,
      last_name: "Weaver",
    },
  ],
  page: 1,
  per_page: 2,
  support: {
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
    url: "https://reqres.in/#support-heading",
  },
  total: 12,
  total_pages: 6,
};

describe("Fetch data helper", () => {
  test("should return data", async () => {
    const res = await fetchData(
      "https://reqres.in/api/users?per_page=2&page=1",
      "GET"
    );
    expect(res).toEqual(USERS_RESPONSE);
  });

  test("should return null", async () => {
    const res = await fetchData("https://reqres.in/api", "GET");
    expect(res).toEqual(null);
  });
});

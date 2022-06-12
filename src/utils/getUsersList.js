import { fetchData } from "../helpers/fetchData";

async function getUsersList(perPage, page) {
  try {
    const response = await fetchData(
      `${process.env.REACT_APP_API_URL}/users?per_page=${perPage}&page=${page}`,
      "GET"
    );
    const data = await response;
    return data;
  } catch (error) {
    return null;
  }
}

export { getUsersList };

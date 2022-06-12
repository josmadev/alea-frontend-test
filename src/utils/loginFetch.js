import { fetchData } from "../helpers/fetchData";

async function loginFetch(email, password) {
  try {
    const data = await fetchData(
      `${process.env.REACT_APP_API_URL}/login`,
      "POST",
      { email, password }
    );
    return data;
  } catch (error) {
    return null;
  }
}

export { loginFetch };

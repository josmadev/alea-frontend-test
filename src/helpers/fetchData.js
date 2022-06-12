export async function fetchData(url, method, body) {
  try {
    let options;
    if (method === "GET") {
      options = {
        method: method,
      };
    } else {
      options = {
        method: method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

const Fetch = async (method, url, body) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export default Fetch;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM3MzYzMzA2MTJjZDAwMjE3YjhiZjAiLCJpYXQiOjE2NDc3ODU1MjN9.64_CyQHxBWutnj1BF-XOeOziLbMWjolBnIqt_FdsFuc";

const api = {
  getProducts: () =>
    fetch("https://coding-challenge-api.aerolab.co/products", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((res) => res),
};

export default api;

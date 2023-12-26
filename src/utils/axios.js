import axios from "axios";

export const backendUrl = "http://localhost:9000/api";
// export const backendUrl = "https://ill-pink-jay-gown.cyclic.app/api";
// export const backendUrl = "";

export const callAxios = async (method, route, body) => {
  const token = localStorage.getItem("token");
  if (method === "get") {
    return await axios[method](`${backendUrl}/${route}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else if (method === "delete") {
    if (body) {
      return await axios[method](`${backendUrl}/${route}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return await axios[method](`${backendUrl}/${route}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  } else {
    return await axios[method](`${backendUrl}/${route}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

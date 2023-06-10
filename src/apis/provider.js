import { BASE_URL } from "../utils/apiHelper";

export const getWelcomeMessage = async (callback) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/api`, requestOptions);
  const data = await response.json();

  if (!response.ok) {
    console.log("something messed up");
  } else {
    callback(data.message);
  }
};

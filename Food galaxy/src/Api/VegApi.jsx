import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com",
});

export const getVegData = async () => {
  const res = await api.get("/api/json/v1/1/filter.php?c=Vegetarian");
  return res.data;  
};
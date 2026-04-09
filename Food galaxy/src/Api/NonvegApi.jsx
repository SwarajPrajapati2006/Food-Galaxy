import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com",
});

export const getNonVegData = async () => {
  const res = await api.get("/api/json/v1/1/filter.php?c=Chicken");
  return res.data;  
};
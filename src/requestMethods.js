import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODJmNzg3NTQwYzhiZmU5YTVlYzNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTk5NDg5MCwiZXhwIjoxNzIwMjU0MDkwfQ.nv4snMkuYxVAkueswxlN6OhjQVUbBzAm7mDFGYC6HUc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
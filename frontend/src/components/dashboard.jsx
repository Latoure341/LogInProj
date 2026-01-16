import { useEffect, useState } from "react";
import api from "../lib/api.js";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/me");
        setUser(res.data);
      } catch (err) {
        console.error(err.response?.data?.message || err.message);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return <h1>Welcome, User ID: {user.userId}</h1>;
}

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //  Load session + listener
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data?.session?.user || null);
      console.log("SESSION:", data?.session);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  //  Login
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173",
      },
    });
  };

  //  Logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setData([]);
  };

  // Fetch data from Edge Function
  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setError("No active session found");
        return;
      }

      console.log("Access Token:", session.access_token);

      const res = await fetch(
        "https://rxpskobrqhcczohijysp.functions.supabase.co/secure-data",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to fetch data");
      }

      console.log("Data:", result);

      setData(result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Secure Data Pipeline</h1>

      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <div>
          <p>Logged in as: {user.email}</p>

          <button onClick={fetchData} style={{ marginRight: "10px" }}>
            Fetch Data
          </button>

          <button onClick={logout}>Logout</button>
        </div>
      )}

      {loading && <p>Loading data...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong> - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
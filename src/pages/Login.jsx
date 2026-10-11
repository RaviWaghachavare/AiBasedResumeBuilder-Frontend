
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password,
        }
      );

      console.log("LOGIN STATUS:", response.status);
      console.log("LOGIN RESPONSE:", response.data);

      const token = response.data.accessToken;
      localStorage.setItem("token", token);

      alert("Login successful!");
      console.log("Login successful");
    } catch (err) {
      console.log("ERROR STATUS:", err.response?.status);
      console.log("ERROR RESPONSE:", err.response?.data);
      console.log("ERROR MESSAGE:", err.message);

      setError(
        err.response?.data?.message ||
        "Login failed. Check browser console."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>
        <p>Sign in to your AI Resume Builder account</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default Login;

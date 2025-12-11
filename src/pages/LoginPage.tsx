import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const BUSINESS_NAME = "Hoy Gano Yo";
const DEFAULT_LOGO = "/logo-default.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas o usuario no autorizado.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <img src={DEFAULT_LOGO} alt={BUSINESS_NAME} className="login-logo" />
        <h1 className="login-title">{BUSINESS_NAME}</h1>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

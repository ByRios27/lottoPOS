import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import IconMenuGrid from "../components/IconMenuGrid";

const LogoutIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        <LogoutIcon />
        <span>Cerrar sesión</span>
      </button>

      <div className="dashboard-page-container">
        <header className="dashboard-header">
          <img 
            src="/logo-default.svg" 
            alt="Logo del Negocio" 
            className="dashboard-logo" 
          />
          <h1 className="dashboard-business-name">Hoy Gano Yo</h1>
          <p className="dashboard-subtitle">
            Panel principal - Ventas, sorteos y control
          </p>
        </header>
        
        <main>
          <IconMenuGrid />
        </main>
      </div>
    </>
  );
}

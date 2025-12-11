import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface TopBarProps {
  title?: string;
}

const BUSINESS_NAME = "Hoy Gano Yo";
const DEFAULT_LOGO = "/logo-default.png"; // asegúrate de tener este archivo en public/

export default function TopBar({ title }: TopBarProps) {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={DEFAULT_LOGO} alt={BUSINESS_NAME} className="topbar-logo" />
        <div className="topbar-texts">
          <span className="topbar-business">{BUSINESS_NAME}</span>
          {title && <span className="topbar-title">{title}</span>}
        </div>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </header>
  );
}

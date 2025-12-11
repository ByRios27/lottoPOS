import { useNavigate } from "react-router-dom";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  emoji: string;
}

const items: MenuItem[] = [
  { id: "ventas", label: "Ventas", path: "/ventas", emoji: "🧾" },
  { id: "sorteos", label: "Sorteos", path: "/sorteos", emoji: "🎫" },
  { id: "verificacion", label: "Verificación", path: "/verificacion", emoji: "✅" },
  { id: "resultados", label: "Resultados", path: "/resultados", emoji: "📊" },
  { id: "finanzas", label: "Finanzas", path: "/finanzas", emoji: "💰" },
  { id: "ajustes", label: "Ajustes", path: "/ajustes-negocio", emoji: "⚙️" },
];

export default function IconMenuGrid() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-menu-grid">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="dashboard-menu-item"
          onClick={() => navigate(item.path)}
        >
          <div className="dashboard-menu-icon">
            <span className="dashboard-menu-emoji">{item.emoji}</span>
          </div>
          <span className="dashboard-menu-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

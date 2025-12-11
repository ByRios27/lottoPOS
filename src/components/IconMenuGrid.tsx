import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
  emoji: string;
}

const items: MenuItem[] = [
  { label: "Ventas", path: "/ventas", emoji: "🧾" },
  { label: "Sorteos", path: "/sorteos", emoji: "🎫" },
  { label: "Verificación", path: "/verificacion", emoji: "✅" },
  { label: "Resultados", path: "/resultados", emoji: "📊" },
  { label: "Finanzas", path: "/finanzas", emoji: "💰" },
  { label: "Ajustes", path: "/ajustes-negocio", emoji: "⚙️" },
];

export default function IconMenuGrid() {
  const navigate = useNavigate();

  return (
    <div className="menu-grid">
      {items.map((item) => (
        <button
          key={item.path}
          className="menu-item"
          onClick={() => navigate(item.path)}
        >
          <div className="menu-icon-circle">
            <span className="menu-emoji">{item.emoji}</span>
          </div>
          <span className="menu-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

import TopBar from "../components/TopBar";

export default function VentasPage() {
  return (
    <div className="page-bg">
      <TopBar title="Ventas" />
      <main className="page-main">
        <h2>Página de Ventas</h2>
        <p>Aquí se gestionarán las ventas.</p>
      </main>
    </div>
  );
}
import TopBar from "../components/TopBar";

export default function FinanzasPage() {
  return (
    <div className="page-bg">
      <TopBar title="Finanzas" />
      <main className="page-main">
        <h2>Página de Finanzas</h2>
        <p>Aquí se mostrará la información financiera.</p>
      </main>
    </div>
  );
}
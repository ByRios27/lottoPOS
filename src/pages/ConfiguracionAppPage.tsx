import TopBar from "../components/TopBar";

export default function ConfiguracionAppPage() {
  return (
    <div className="page-bg">
      <TopBar title="Configuración de la App" />
      <main className="page-main">
        <h2>Página de Configuración</h2>
        <p>Aquí se configurarán los ajustes de la aplicación.</p>
      </main>
    </div>
  );
}
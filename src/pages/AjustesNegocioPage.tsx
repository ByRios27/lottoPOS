import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "../firebase";
import { useAppConfig } from "../context/AppConfigContext";
import TopBar from "../components/TopBar";

export default function AjustesNegocioPage() {
  const { businessName, logoUrl } = useAppConfig();
  const [name, setName] = useState(businessName);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState(logoUrl);
  const [status, setStatus] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setStatus("Guardando...");
    let newLogoUrl = logoUrl;

    try {
      if (logoFile) {
        const userId = auth.currentUser?.uid || "default";
        const storageRef = ref(storage, `logos/${userId}/${logoFile.name}`);
        await uploadBytes(storageRef, logoFile);
        newLogoUrl = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, "config", "business");
      await setDoc(docRef, {
        name: name,
        logoUrl: newLogoUrl,
      }, { merge: true });

      setStatus("¡Cambios guardados con éxito!");
    } catch (error) { 
      console.error("Error al guardar los cambios:", error);
      setStatus("Error al guardar. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="page-bg">
      <TopBar title="Ajustes del Negocio" />
      <main className="page-main">
        <div className="settings-card">
          <h2>Personaliza tu Negocio</h2>
          
          <div className="form-group">
            <label htmlFor="businessName">Nombre del negocio</label>
            <input
              id="businessName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Logo del negocio</label>
            <div className="logo-upload-wrapper">
              <img src={logoPreview} alt="Vista previa del logo" className="logo-preview" />
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>

          <button onClick={handleSave} disabled={status === "Guardando..."}>
            {status === "Guardando..." ? "Guardando..." : "Guardar Cambios"}
          </button>
          {status && <p className="status-message">{status}</p>}
        </div>
      </main>
    </div>
  );
}
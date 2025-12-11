import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { doc, getDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "../firebase";

interface AppConfig {
  appName: string;
  appLogo: string;
}

const AppConfigContext = createContext<AppConfig | undefined>(undefined);

export const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<AppConfig>({
    appName: "Cargando...",
    appLogo: "/logo.svg",
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const docRef = doc(db, "config", "business");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setConfig({
            appName: data.name || "Mi Negocio",
            appLogo: data.logoUrl || "/logo.svg",
          });
        } else {
          setConfig({
            appName: "Mi Negocio",
            appLogo: "/logo.svg",
          });
        }
      } catch (error) {
        const isOfflineError =
          error instanceof FirebaseError &&
          error.message.includes("client is offline");

        if (!isOfflineError) {
          console.error("Error al cargar la configuración del negocio:", error);
        }

        setConfig({
          appName: "Mi Negocio",
          appLogo: "/logo.svg",
        });
      }
    };

    fetchConfig();
  }, []);

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (context === undefined) {
    throw new Error("useAppConfig debe ser usado dentro de un AppConfigProvider");
  }
  return context;
};

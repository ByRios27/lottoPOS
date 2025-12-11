# Blueprint: Panel de Control de Sorteos

## Visión General

Este proyecto es una aplicación web (PWA) construida con React y Firebase, diseñada para ser un panel de control completo para pequeños negocios que gestionan ventas y sorteos. La aplicación permite a los usuarios gestionar su negocio de forma centralizada, con autenticación y configuración personalizada.

---

## Características Implementadas

### v0.1: Fundación y Diseño Inicial

*   **Stack Tecnológico:** React (Vite), TypeScript, Firebase (Auth, Firestore, Storage), React Router.
*   **Autenticación:**
    *   Página de inicio de sesión (`LoginPage`) con autenticación por email/contraseña a través de Firebase Auth.
    *   Rutas protegidas (`ProtectedRoute`) que redirigen a los usuarios no autenticados.
    *   Funcionalidad de "Cerrar sesión".
*   **Configuración Dinámica del Negocio:**
    *   Creación de `AppConfigContext` para obtener y proveer globalmente la configuración del negocio (nombre y URL del logo) desde un documento en Firestore (`config/business`).
    *   La aplicación muestra dinámicamente el nombre y el logo en todas las páginas relevantes.
*   **Diseño Visual y UX:**
    *   Implementación de un tema oscuro, moderno y profesional con un degradado de fondo (verde y negro).
    *   **Logo por Defecto:** Creación de un logo SVG (`public/logo.svg`) como placeholder para negocios que no han subido su propio logo.
    *   **Página de Login:** Tarjeta de inicio de sesión centrada con el logo, nombre del negocio y formulario.
    *   **Dashboard:**
        *   Diseño centrado y atractivo con el logo y nombre del negocio.
        *   `TopBar`: Barra de navegación superior que muestra el logo, nombre del negocio, título de la página y botón de cierre de sesión.
        *   `IconMenuGrid`: Una parrilla de íconos para la navegación principal.
*   **Estructura de Componentes:**
    *   Organización del código en componentes reutilizables (`TopBar`, `IconMenuGrid`, `ProtectedRoute`).
    *   Estructura de páginas claras (`LoginPage`, `DashboardPage`, etc.).
    *   Estilos globales centralizados en `index.css`.

---

## Plan Actual: Ajustes del Negocio

El objetivo es crear una página donde el usuario pueda personalizar la configuración de su negocio.

*   **Tarea:** Crear la página "Ajustes del Negocio".
*   **Ruta:** `/ajustes-negocio`

### Pasos Detallados:

1.  **Crear el archivo del componente:**
    *   Crear `src/pages/AjustesNegocioPage.tsx`.

2.  **Desarrollar la Interfaz de Usuario (UI):**
    *   Utilizar un layout general (`page-bg`, `page-main`) para consistencia.
    *   Añadir la `TopBar` con el título "Ajustes del Negocio".
    *   Crear un formulario que incluya:
        *   Un campo de texto para el **Nombre del negocio**, pre-rellenado con el valor actual del `useAppConfig`.
        *   Una sección para el **Logo del negocio**:
            *   Mostrar la imagen del logo actual.
            *   Un input de tipo `file` para que el usuario pueda seleccionar una nueva imagen.
        *   Un botón para "Guardar Cambios".
        *   Indicadores de estado (ej. "Guardando...", "¡Guardado!").

3.  **Implementar la Lógica de Guardado (`handleSave`):**
    *   Crear estados locales (`useState`) para manejar el valor del nombre y el archivo del nuevo logo.
    *   La función `handleSave` debe:
        *   Verificar si se seleccionó un nuevo archivo de logo.
        *   **Si hay nuevo logo:**
            *   Crear una referencia en **Firebase Storage** (ej. `logos/{userId || 'default'}/{fileName}`).
            *   Subir el archivo a Storage usando `uploadBytes`.
            *   Obtener la URL de descarga (`getDownloadURL`).
        *   **Actualizar Firestore:**
            *   Modificar el documento `config/business` con el nuevo nombre y/o la nueva URL del logo.
        *   Proporcionar feedback visual al usuario tras guardar.

4.  **Añadir Estilos CSS:**
    *   Crear nuevas clases de CSS si es necesario para el formulario de ajustes y añadirlas a `index.css`.

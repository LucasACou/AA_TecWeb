import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RotaProvider } from "./contexts/RotaContext.jsx";
import { LivroProvider } from "./contexts/LivroContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RotaProvider>
      <LivroProvider>
        <App />
      </LivroProvider>
    </RotaProvider>
  </StrictMode>
);

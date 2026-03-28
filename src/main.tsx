import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { scheduleDeferredScripts } from "./lib/deferred-scripts";

createRoot(document.getElementById("root")!).render(<App />);

// Load third-party scripts after first interaction or 3.5s
scheduleDeferredScripts();

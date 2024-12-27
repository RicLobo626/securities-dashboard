import { App } from "@/app";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root")!; // eslint-disable-line @typescript-eslint/no-non-null-assertion

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

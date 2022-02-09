import { Routes, Route } from "react-router-dom";
import "./App.css";
import { EditLink } from "./pages/EditLink";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import {
  ErrorFallback,
  ResetHandler,
  withErrorBoundary,
} from "./components/ErrorBoundary";
import { AddLink } from "./pages/AddLink";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/edit" element={<EditLink />} />
    <Route path="/add" element={<AddLink />} />
  </Routes>
);

const AppRouterWithErrorBoundary = withErrorBoundary(AppRouter, {
  FallbackComponent: ErrorFallback,
  onReset: ResetHandler,
});

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouterWithErrorBoundary />
    </div>
  );
}

export default App;

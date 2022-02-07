import { Routes, Route } from "react-router-dom";
import "./App.css";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Header from "./components/Header";
import {
  ErrorFallback,
  ResetHandler,
  withErrorBoundary,
} from "./components/ErrorBoundary";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/edit" element={<Edit />} />
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

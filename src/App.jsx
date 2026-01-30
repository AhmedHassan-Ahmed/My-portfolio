import {BrowserRouter as Router,} from "react-router-dom";
import { useState} from "react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/Layout";
import ScrollNavigator from "./components/ScrollNavigator";
/* ---------- APP ---------- */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Layout>
        <ScrollNavigator disabled={modalOpen} />
        <AnimatedRoutes setModalOpen={setModalOpen} />
      </Layout>
    </Router>
  );
}

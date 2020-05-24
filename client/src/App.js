import React from "react";
import Layout from "./components/layouts/layout.js";
import Flows from "./pages/flows";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Flows />
      </Layout>
    </React.Fragment>
  );
}

export default App;

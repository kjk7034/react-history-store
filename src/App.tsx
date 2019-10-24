import React from "react";
import "./App.css";

import RestoreContext from "components/HistoryStoreContext";
import Router from "./router/Router";

const App: React.FC = () => {
  return (
    <RestoreContext.Provider>
      <Router />
    </RestoreContext.Provider>
  );
};

export default App;

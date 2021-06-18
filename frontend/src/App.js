import React from "react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import GlobalStyle from "./styles/global";

// import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;

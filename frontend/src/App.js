import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import UserContextProvider from "./contexts/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<AuthPage />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;

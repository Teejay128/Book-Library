import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import UserContextProvider from "./contexts/userContext";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="/book/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;

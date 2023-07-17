import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/landing-page/landing-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/my-notes/my-notes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} exact />
        <Route path="/mynotes" Component={MyNotes} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

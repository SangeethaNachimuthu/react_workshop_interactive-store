import Header from "./components/Header.tsx";
import MainContent from "./components/MainContent.tsx";
import Newsletter from "./components/Newsletter.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <MainContent searchTerm={searchTerm} />
          <Newsletter />
          <Footer />
        </div>
    );
};

export default App;
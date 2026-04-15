import Header from "./components/Header.tsx";
import MainContent from "./components/MainContent.tsx";
import Newsletter from "./components/Newsletter.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <div>
          <Header />
          <MainContent />
          <Newsletter />
          <Footer />
        </div>
    );
};

export default App;
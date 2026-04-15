import Sidebar from "./Sidebar.tsx";
import ProductSection from "./ProductSection.tsx";

const MainContent = () => {
    return (
        <div>
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <Sidebar />
                    <ProductSection />
                </div>
            </main>
        </div>
    );
};

export default MainContent;
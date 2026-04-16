import ProductHeader from "./ProductHeader.tsx";
import ProductGrid from "./ProductGrid.tsx";
import Pagination from "./Pagination.tsx";

const ProductSection = () => {
    return (
        <section className="lg:col-span-9">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50
                    backdrop-blur-sm shadow-sm transition-all duration-300
                    hover:shadow-xl hover:border-blue-400 p-5"
            >
                <ProductHeader />
                <div className="mt-5 h-px bg-slate-100"></div>

                <ProductGrid />
                <Pagination />
            </div>
        </section>
    );
};

export default ProductSection;
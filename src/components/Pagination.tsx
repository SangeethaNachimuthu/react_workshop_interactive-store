import {ChevronLeft, ChevronRight} from "lucide-react";

const Pagination = () => {
    return (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                    aria-label="Previous page" title="Previous"
            >
                <ChevronLeft size={20} />
            </button>

            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                    aria-current="page">
                1
            </button>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                2
            </button>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                3
            </button>
            <span className="px-2 text-sm text-slate-400">…</span>
            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                12
            </button>

            <button type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                    aria-label="Next page" title="Next"
            >
                <ChevronRight size={20} />
            </button>
        </nav>
    );
};

export default Pagination;
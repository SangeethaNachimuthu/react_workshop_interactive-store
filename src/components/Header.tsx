import Navbar from "./Navbar.tsx";
import {Package, Search, ShoppingCart, User} from "lucide-react";

type NavItem = {
    label: string;
    href: string;
}
const navItems: NavItem[] = [
    {label: "New Arrival", href: "#"},
    {label: "Men", href: "#"},
    {label: "Women", href: "#"},
    {label: "Sale", href: "#"},
]


const Header = () => {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30
                        bg-blue-600 shadow-lg shadow-blue-900/10">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/** Logo **/}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg
                                        bg-white text-blue-600 shadow-md">
                            <Package size={20} />
                        </span>
                        <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                    </a>

                    {/** Nav links **/}
                    <Navbar items={navItems} />

                    {/** Right icons **/}
                    <div className="flex items-center gap-2">
                        {/** Status Indicator **/}
                        <div className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30
                                        px-3 py-1 lg:flex border border-blue-400/20">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full
                                                bg-blue-200 opacity-75">
                                </span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100">
                                </span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">
                                Live
                            </span>
                        </div>

                        {/** Search **/}
                        <div className="relative hidden sm:block">
                            <input id="search-input" type="text" placeholder="Search products..."
                                   className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 pr-4
                                              text-xs font-medium text-blue-50 placeholder:text-blue-200/50
                                              border border-blue-400/20 focus:bg-blue-500/50 focus:w-64
                                              transition-all duration-300 outline-none"/>
                            <Search size={16} className="absolute left-3.5 top-3 text-blue-200" />
                        </div>

                        {/** Cart **/}
                        <button type="button" aria-label="Cart" title="Cart"
                                className="relative inline-flex h-10 w-10 items-center justify-center
                                            rounded-xl bg-blue-500/30 text-blue-50 transition-all
                                            duration-200 hover:text-white hover:bg-blue-500/50
                                            border border-blue-400/20"
                        >
                            <ShoppingCart size={19}/>
                            {/** Cart Count Badge **/}
                            <span id="cart-count"
                                  className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center
                                       justify-center rounded-full bg-red-500 text-[10px] font-bold
                                       text-white shadow-sm hidden">
                                0
                            </span>
                        </button>

                        {/** User **/}
                        <button type="button" aria-label="Account" title="Account"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl
                                      bg-blue-500/30 text-blue-50 transition-all duration-200
                                      hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                        >
                            <User size={19} />
                        </button>

                        {/** Mobile Menu Button **/}
                        <button type="button" aria-label="Menu" title="Menu"
                                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl
                                    bg-blue-500/30 text-blue-50 transition-all duration-200
                                    hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" x2="20" y1="12" y2="12"/>
                                <line x1="4" x2="20" y1="6" y2="6"/>
                                <line x1="4" x2="20" y1="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
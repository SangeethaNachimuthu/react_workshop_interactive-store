import FooterLinksColumn from "./FooterLinksColumn.tsx";
import {Briefcase, Info, Leaf, Package, Phone} from "lucide-react";
import type {LucideIcon} from "lucide-react";

type Link = {
    label: string;
    href: string;
    icon?: LucideIcon;
};
const shopLinks: Link[] = [
    {label: "New Arrival", href: "#"},
    {label: "Best Sellers", href: "#"},
    {label: "Men Collection", href: "#"},
    {label: "Women Collection", href: "#"},
];
const supportLinks: Link[] = [
    {label: "Order Status", href: "#"},
    {label: "Shipping Policy", href: "#"},
    {label: "Returns & Exchanges", href: "#"},
    {label: "FAQs", href: "#"},
];
const companyLinks: Link[] = [
    {label: "About Us", href: "#", icon: Info},
    {label: "Sustainability", href: "#", icon: Leaf},
    {label: "Careers", href: "#", icon: Briefcase},
    {label: "Contact", href: "#", icon: Phone},
];

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
                    {/** Brand Column **/}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                                <Package size={20} />
                            </span>
                            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
                        </a>
                        <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
                            Modern e-commerce experience built for speed and elegance. Discover the latest trends in outerwear,
                            footwear and accessories.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#"
                               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                               aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                </svg>
                            </a>
                            <a href="#"
                               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                               aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/** Links Columns **/}
                    <FooterLinksColumn links={shopLinks} title={"Shop"} />
                    <FooterLinksColumn links={supportLinks} title={"Support"} />
                    <FooterLinksColumn links={companyLinks} title={"Company"} />
                </div>

                <div
                    className="mt-20 border-t border-slate-100 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        &copy; 2026 LITE.SHOP. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#"
                           className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#"
                           className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
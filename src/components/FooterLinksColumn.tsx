import type {LucideIcon} from "lucide-react";

type Link = {
    label: string;
    href: string;
    icon?: LucideIcon;
}
type LinkProps = {
    links: Link[];
    title: string;
};

const FooterLinksColumn = ({links, title}: LinkProps) => {
    return (
        <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                {title}
            </h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
                {links.map( (link) => {
                    const Icon = link.icon;
                    return (
                        <li>
                            <a href={link.href}
                               className="flex items-center transition-colors hover:text-blue-600"
                            >
                                {Icon && <Icon size={14} className="mr-2" />}
                                {link.label}
                            </a>
                        </li>
                    )
                } ) }
            </ul>
        </div>
    );
};

export default FooterLinksColumn;
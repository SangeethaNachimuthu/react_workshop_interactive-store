type Link = {
    label: string;
    href: string;
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
                {links.map((link) => (
                    <li>
                        <a href={link.href}
                           className="transition-colors hover:text-blue-600"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinksColumn;
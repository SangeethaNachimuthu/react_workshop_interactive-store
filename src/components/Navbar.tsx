type NavItem = {
    label: string;
    href: string;
}
type NavProps = {
    items: NavItem[];
}

const Navbar = ({items} : NavProps) => {
    return (
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
            {items.map((item) => {
                return (
                    <a className="relative transition-colors duration-200 hover:text-white
                        after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full
                        after:h-0.5 after:scale-x-0 after:origin-center after:bg-white
                        after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                       href={item.href}
                    >
                        {item.label}
                    </a>
                )
            })}
        </nav>
    );
};

export default Navbar;
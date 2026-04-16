import {useState} from "react";

type CategoryItem = {
    name: string;
    count: number;
}
type CategoryProps = {
    items: CategoryItem[];
}

const SidebarCategories = ({items}: CategoryProps) => {
    // default → first category selected
    const [selected, setSelected] = useState<string>(items[0]?.name);
    const handleChange = (category : string) => {
        setSelected(category);
    };

    return (
        <div className="space-y-3">
            {items.map((item => {
                return (
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input type="checkbox" value="all"
                               className="category-filter h-4.5 w-4.5 rounded-md border border-slate-200 accent-blue-600 cursor-pointer"
                               checked={selected === item.name}
                               onChange={() => handleChange(item.name)}
                        />
                        <span className="flex-1 text-sm text-slate-700">
                                {item.name}
                                <span className="text-slate-400 font-normal">
                                    ({item.count})
                                </span>
                            </span>
                    </label>
                )
            }))}
        </div>
    );
};

export default SidebarCategories;
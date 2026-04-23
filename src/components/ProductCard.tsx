import {Eye, Heart, Plus, Star} from "lucide-react";
import type {ProductItem} from "../product.ts";
import * as React from "react";

type ProductCardProps = {
    product: ProductItem;
    setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductCard = ({product, setCartCount} : ProductCardProps) => {
    //Destructing (Instead of using product.name, we can use name.)
    const {
        image,
        category,
        badge,
        rating,
        name,
        inStock,
        actualPrice,
        finalPrice,
        status
    } = product;


    const handleAddToCart = () => {
        setCartCount((prev) => prev + 1);
    }

    return (
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3
                      transition-all duration-400 hover:border-blue-400
                      hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={image}
                    alt={name}
                    className="aspect-4/5 w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                {/** Product Overlay Actions **/}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl
                                 flex items-center justify-center translate-y-4 group-hover:translate-y-0
                                 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                            aria-label="Quick View"
                    >
                        <Eye size={20} />
                    </button>
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl
                                flex items-center justify-center translate-y-4 group-hover:translate-y-0
                                transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                            aria-label="Add to cart"
                    >
                        <Plus size={20} />
                    </button>
                </div>

                {/** Badge **/}
                <span className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full
                          border border-rose-100/50 bg-rose-500/10 text-rose-600 backdrop-blur-md">
                        {badge}
                </span>

                {/** Favorite **/}
                <button type="button"
                        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center
                            rounded-xl border border-slate-200/50 bg-white/70 text-slate-600
                            backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500
                            hover:shadow-lg group/heart"
                        aria-label="Add to favorites" title="Favorite"
                >
                    <Heart size={20} className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500"/>
                </button>
            </div>

            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {category}
                    </p>
                    <div className="flex items-center gap-1">
                        <Star size={9} className="text-amber-400" fill="currentColor"/>
                        <span className="text-[10px] font-bold text-slate-400">
                            {rating}
                        </span>
                    </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {name}
                </h3>
                <p className="text-[11px] font-medium text-slate-500">
                    {status}
                </p>

                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                            {actualPrice}
                        </span>
                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {finalPrice}
                        </span>
                    </div>

                    <button type="button"
                            className={`inline-flex h-10 items-center justify-center rounded-xl px-5 text-xs font-bold 
                            ${inStock
                                ? "bg-slate-900 text-white hover:bg-blue-600"
                                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                            }`}
                            aria-label="Add to cart"
                            disabled={!inStock}
                            onClick={handleAddToCart}
                    >
                        {inStock ? "Add to Cart" : "Notify Me"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
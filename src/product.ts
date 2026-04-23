import * as React from "react";

export type ProductItem = {
    id: number;
    image: string;
    category: string;
    badge?: string;
    rating: number;
    name: string;
    inStock: boolean;
    actualPrice?: string;
    finalPrice: string;
    status: string;
};

export type ProductProps = {
    searchTerm: string;
    selectedCategory: string[]
    setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

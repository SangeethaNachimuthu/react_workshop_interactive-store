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

export type FilterState = {
    searchTerm: string;
    setSearchTerm: (value:string)=> void;
}

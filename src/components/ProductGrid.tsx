import ProductCard from "./ProductCard.tsx";

type Product = {
    image: string;
    category: string;
    badge?: string;
    rating: number;
    name: string;
    inStock: string;
    actualPrice?: string;
    finalPrice: string;
    buttonName: string;
};

const productList : Product[] = [
    {
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
        category: "Outerwear",
        badge: "Discount",
        rating: 4.9,
        name: "Technical Shell Jacket",
        inStock: "In Stock • Ships in 2 days",
        actualPrice: "1450 kr",
        finalPrice: "890 kr",
        buttonName: "Add to cart"
    },
    {
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        category: "Footwear",
        badge: "Limited",
        rating: 4.8,
        name: "Speedster Running Shoes",
        inStock: "Only 4 items left",
        finalPrice: "1200 kr",
        buttonName: "Add to cart"
    },
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        category: "Accessories",
        badge: "Sold Out",
        rating: 4.7,
        name: "Minimalist Quartz Watch",
        inStock: "Back in stock next week",
        finalPrice: "1850 kr",
        buttonName: "Notify Me"
    },
    {
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
        category: "Footwear",
        badge: "Popular",
        rating: 4.5,
        name: "Classic Canvas Sneakers",
        inStock: "In Stock • Ships in 1 day",
        finalPrice: "550 kr",
        buttonName: "Add to cart"
    },
    {
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        category: "Accessories",
        badge: "Hot Deal",
        rating: 4.9,
        name: "Premium Wireless Headphones",
        inStock: "In Stock • Ships in 2 days",
        actualPrice: "2200 kr",
        finalPrice: "1690 kr",
        buttonName: "Add to cart"
    },
    {
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        category: "Accessories",
        badge: "New Arrival",
        rating: 4.6,
        name: "Tech Daypack",
        inStock: "In Stock • Ships in 1 day",
        finalPrice: "1100 kr",
        buttonName: "Add to cart"
    }
]

const ProductGrid = () => {
    return (
        <div id="product-grid" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productList.map((product, index) => (
                <ProductCard key = {index} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;
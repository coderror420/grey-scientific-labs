import type { Product } from "../types/Product.types";
import { getImageUrl } from "../utils/getImageUrl";

interface Props {
  product: Product;
  onEdit: (product: Product) => void;
}

export function ProductCard({ product, onEdit }: Props) {
  const imageUrl = getImageUrl(product.cloudinaryImageId);

  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={product.name}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <p className="text-sm text-zinc-400">{product.category}</p>

        <div className="flex justify-between text-sm">
          <span>₹{product.price}</span>
          <span className="text-zinc-400">Stock: {product.stock}</span>
        </div>

        <button
          onClick={() => onEdit(product)}
          className="w-full mt-2 py-2 text-sm rounded-md
            bg-zinc-800 hover:bg-zinc-700"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

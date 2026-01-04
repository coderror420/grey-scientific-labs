import type { Product } from "../types/Product.types";
import { getImageUrl } from "../utils/getImageUrl";

export function ProductTable({
  products,
  onEdit,
}: {
  products: Product[];
  onEdit: (product: Product) => void;
}) {
  return (
    <div className="overflow-x-auto border border-zinc-800 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-zinc-900 text-zinc-400">
          <tr>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-center">Category</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Stock</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => {
            const imageUrl = getImageUrl(p.cloudinaryImageId);

            return (
              <tr
                key={p.id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="p-3 flex items-center gap-3">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={p.name}
                      className="h-10 w-10 rounded object-cover"
                      loading="lazy"
                    />
                  )}
                  {p.name}
                </td>

                <td className="p-3 text-center">{p.category}</td>
                <td className="p-3 text-center">₹{p.price}</td>
                <td className="p-3 text-center">{p.stock}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => onEdit(p)}
                    className="text-blue-400 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

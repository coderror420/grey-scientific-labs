import { useMemo, useState } from "react";
import { products as initialProducts } from "./data/Products";
import { ViewToggle } from "./components/ViewToggle";
import { SearchBar } from "./components/SearchBar";
import { Pagination } from "./components/Pagination";
import { ProductTable } from "./components/ProductTable";
import { ProductCard } from "./components/ProductCardGrid";
import { ProductForm } from "./components/ProductForm";
import { useDebounce } from "./hooks/useDebounce";
import type { Product } from "./types/Product.types";

const ITEMS_PER_PAGE = 6;

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [view, setView] = useState<"table" | "grid">("table");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [page, setPage] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // 🔍 filter
  const filtered = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  // 📄 pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ➕ ADD
  const handleAdd = (product: Product) => {
    setProducts((prev) => [...prev, product]);
    setIsFormOpen(false);
  };

  // ✏️ UPDATE
  const handleUpdate = (updated: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
    setEditingProduct(null);
    setIsFormOpen(false);
  };

  // 📝 OPEN EDIT
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Product Manager</h1>

          <button
            onClick={() => {
              setEditingProduct(null); // empty for add
              setIsFormOpen(true);
            }}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            + Add Product
          </button>
        </div>

        {/* Top Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <ViewToggle view={view} onChange={setView} />
        </div>

        {/* Content */}
        {view === "table" ? (
          <ProductTable products={paginated} onEdit={handleEdit} />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {paginated.map((p) => (
              <ProductCard key={p.id} product={p} onEdit={handleEdit} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <ProductForm
          initialProduct={editingProduct ?? undefined}
          onSave={(product) => {
            if (editingProduct) {
              handleUpdate(product);
            } else {
              handleAdd(product);
            }
          }}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}

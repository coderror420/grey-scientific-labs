// src/components/ProductForm.tsx
import { useState } from "react";
import type { Product } from "../types/Product.types";

interface Props {
  initialProduct?: Product;
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const emptyForm: Product = {
  id: "",
  name: "",
  price: 0,
  category: "",
  stock: 0,
  description: "",
  cloudinaryImageId: "",
};

export function ProductForm({
  initialProduct,
  onSave,
  onCancel,
}: Props) {
  const [form, setForm] = useState<Product>(
    initialProduct ?? emptyForm
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.category.trim()) newErrors.category = "Category is required";
    if (form.price <= 0) newErrors.price = "Price must be greater than 0";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange<K extends keyof Product>(key: K, value: Product[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSave({ ...form, id: form.id || crypto.randomUUID() });
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 w-full max-w-lg p-6 rounded-lg space-y-4 border border-zinc-700 shadow-lg"
      >
        <h2 className="text-xl font-semibold">
          {initialProduct ? "Edit Product" : "Add Product"}
        </h2>

        {/* Inputs */}
        <div className="space-y-2">
          <input
            value={form.name}
            onChange={e => handleChange("name", e.target.value)}
            placeholder="Product name"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="number"
            value={form.price}
            onChange={e => handleChange("price", Number(e.target.value))}
            placeholder="Price"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

          <input
            value={form.category}
            onChange={e => handleChange("category", e.target.value)}
            placeholder="Category"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

          <input
            type="number"
            value={form.stock}
            onChange={e => handleChange("stock", Number(e.target.value))}
            placeholder="Stock"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white"
          />

          <input
            value={form.cloudinaryImageId}
            onChange={e => handleChange("cloudinaryImageId", e.target.value)}
            placeholder="Cloudinary Image ID"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white"
          />

          <textarea
            value={form.description}
            onChange={e => handleChange("description", e.target.value)}
            placeholder="Description (optional)"
            className="w-full px-3 py-2 rounded border border-zinc-700 bg-zinc-950 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-30 outline-none text-white resize-none h-24"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="px-3 py-1 rounded bg-zinc-900 disabled:opacity-40"
      >
        Prev
      </button>

      <span className="px-3 py-1 text-sm">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="px-3 py-1 rounded bg-zinc-900 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}

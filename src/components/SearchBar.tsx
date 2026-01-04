interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search by product name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-64 px-4 py-2 rounded-md
        bg-zinc-900 border border-zinc-800
        focus:outline-none focus:ring-1 focus:ring-zinc-600"
    />
  );
}

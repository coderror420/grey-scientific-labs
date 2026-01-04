type View = "table" | "grid";

interface Props {
  view: View;
  onChange: (view: View) => void;
}

export function ViewToggle({ view, onChange }: Props) {
  return (
    <div className="flex gap-2">
      {["table", "grid"].map((v) => (
        <button
          key={v}
          onClick={() => onChange(v as View)}
          className={`px-4 py-2 rounded-md text-sm
            ${
              view === v
                ? "bg-zinc-700 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
        >
          {v === "table" ? "List View" : "Card View"}
        </button>
      ))}
    </div>
  );
}

// src/components/SourceBadge.tsx

export default function SourceBadge({
  name,
  url,
}: {
  name: string;
  url?: string;
}) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-teal-600 transition-colors"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
        来源: {name}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
      <span className="inline-block w-1 h-1 rounded-full bg-gray-300" />
      来源: {name}
    </span>
  );
}

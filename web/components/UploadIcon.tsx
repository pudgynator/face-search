
export default function UploadIcon({ className = "h-11 w-11" }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 44 44"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 14V9a3 3 0 0 1 3-3h5M30 6h5a3 3 0 0 1 3 3v5M38 30v5a3 3 0 0 1-3 3h-5M14 38H9a3 3 0 0 1-3-3v-5" />
        <path d="M22 29V16M16.5 21 22 15.5 27.5 21" />
      </svg>
    );
}
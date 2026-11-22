
export default function FaceIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 9V6a2 2 0 0 1 2-2h3M19 4h3a2 2 0 0 1 2 2v3M24 19v3a2 2 0 0 1-2 2h-3M9 24H6a2 2 0 0 1-2-2v-3" />
        <circle cx="14" cy="12" r="3.5" />
        <path d="M8.5 20c1-3 3-4.5 5.5-4.5s4.5 1.5 5.5 4.5" />
      </svg>
    );
}
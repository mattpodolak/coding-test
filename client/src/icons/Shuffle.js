export const Shuffle = ({ width, size, onClick }) => {
  return (
    <svg
      className={`w-${size - 1} h-${
        size - 1
      } self-center cursor-pointer text-ownr-gray`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M4 20L21 3" />
        <path d="M21 16v5h-5" />
        <path d="M15 15l6 6" />
        <path d="M4 4l5 5" />
      </g>
    </svg>
  );
};

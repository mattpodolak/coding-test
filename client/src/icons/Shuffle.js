export const Shuffle = ({ width, onClick }) => {
  return (
    <svg
      className={`w-7 h-7 self-center cursor-pointer text-ownr-gray`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 3h5v5"
      />
      <path
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20L21 3"
      />
      <path
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 16v5h-5"
      />
      <path
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 15l6 6"
      />
      <path
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4l5 5"
      />
    </svg>
  );
};

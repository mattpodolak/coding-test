export const Chevron = ({ direction, width, size, onClick }) => {
  return direction === 'left' ? (
    <svg
      className={`w-${size} h-${size}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={width}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  ) : (
    direction === 'right' && (
      <svg
        className={`w-${size} h-${size}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={width}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )
  );
};

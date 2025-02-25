export const DoubleChevron = ({ direction, width, onClick, disabled }) => {
  return (
    <svg
      className={
        `w-8 h-8 self-center` +
        (disabled ? ' text-gray-300' : ' cursor-pointer text-ownr-gray')
      }
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={!disabled ? onClick : undefined}
      alt={`max ${direction} button`}
    >
      <title>{`Double ${direction}`}</title>
      {direction === 'left' ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={width}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      ) : (
        direction === 'right' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={width}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        )
      )}
    </svg>
  );
};

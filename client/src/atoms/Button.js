export const Button = ({ buttonText, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={
        (active ? 'bg-ownr-dark ' : 'bg-ownr-normal hover:bg-ownr-dark ') +
        'rounded-md font-medium p-3 py-2  focus:outline-none text-white transition duration-300 ease-in-out'
      }
    >
      {buttonText}
    </button>
  );
};

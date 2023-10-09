import { CheckIcon } from "@heroicons/react/20/solid";

const CardWithImage = ({
  src,
  alt,
  title,
  onClick,
  value,
  selectedValue,
  margin,
}) => {
  const isSelected = value === selectedValue;

  return (
    <div
      className={`relative flex flex-col items-center justify-between py-10 w-40 h-48 bg-white hover:shadow-md transition-all duration-300 ease-in-out rounded-md ${
        margin ? "mr-3" : null
      } ${isSelected ? "border border-primary" : "border-2 border-light"}`}
      onClick={onClick}
    >
      <div
        className={`w-5 h-5 rounded-full absolute top-3 right-3 border border-dark transition-all duration-300 ease-in-out ${
          isSelected ? "border-2 bg-green" : ""
        }`}
      >
        {isSelected && (
          <div className="w-full h-full flex justify-center items-center">
            <CheckIcon className="text-dark" />
          </div>
        )}
      </div>
      <img src={src} alt={alt} />
      <p className="mt-3 font-light">{title}</p>
    </div>
  );
};

export default CardWithImage;

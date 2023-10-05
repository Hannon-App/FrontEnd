interface Card {
  title: string;
  text: string | any;
  color: string;
  custom?: boolean;
  customItem?: any;
  width?: string;
}
const Card: React.FC<Card> = ({ title, text, color, customItem, custom, width }) => {
  return (

    <div className={`${width ? width : "w-80"}  shadow-lg rounded-md`}>
      <div
        className={`px-8 py-4 ${color} rounded-t-md flex items-center justify-center`}
      >
        <h1 className="font-semibold text-md text-white">{title}</h1>
      </div>
      {custom ? (
        customItem()
      ) : (
        <div className="flex justify-center items-center flex-col h-40 bg-white">
          <h1 className="font-semibold text-6xl">{text}</h1>
        </div>
      )}
    </div>
  );
};

export default Card;

interface Card {
  title: string;
  text: string | any;
  color: string;
}
const Card: React.FC<Card> = ({ title, text, color }) => {
  return (
    <div className="w-80 shadow-lg rounded-md">
      <div className={`px-8 py-4 ${color} rounded-t-md flex items-center justify-center`}>
        <h1 className="font-semibold text-md text-white">{title}</h1>
      </div>
      <div className="flex justify-center items-center flex-col h-full"> {/* Add flex class here */}
        <h1 className="font-semibold text-6xl">{text}</h1>
      </div>
    </div>



  );
};

export default Card;

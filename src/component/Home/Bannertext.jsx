
import './animations.css'
const Banner = () => {
    const text = "Step into Style – Unbeatable Prices!";
    const words = text.split(" ");
  
    return (
      <div className="flex items-center  w-screen h-[7vh] md:h-[9vh] bg-[#EAEEEF] justify-center ">
       
        <h1 className="flex flex-wrap  font-normal">
          {words.map((word, index) => (
            <span
              key={index}
              className="animate-roll-in mr-2 lg:text-2xl md:xl text-sm font-normal"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>
    );
  };
  
  export default Banner;
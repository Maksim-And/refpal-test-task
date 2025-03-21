import PlayIcon from "../assets/icons/PlayIcon";
import TeamCard from "./TeamCard";

import transImage from "../assets/images/trans.png";
import kuressaareImage from "../assets/images/kuressaare.png";
import InfoIcon from "../assets/icons/InfoIcon";
import StarIcon from "../assets/icons/StarIcon";
import Card from "./ui/Card";

const STARS = [
  { id: 1, color: "#e09139" },
  { id: 2, color: "#3a6f93" },
  { id: 3, color: "#6d7b70" },
];

const Header = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-green-600 p-3 mx-[1px]">
      <section className="flex gap-x-2 items-center">
        <Card iconPosition="bottom">36</Card>
        <span className="text-white">09.11.24</span>
        <PlayIcon />
      </section>

      <section className="flex flex-col justify-center items-center ml-12">
        <div className="flex gap-x-2 text-white font-bold">
          <div>
            <TeamCard textPosition="left" image={transImage} teamName="Trans" />
            <p className="text-right mr-2 mt-[2px]">0</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="h-[18px] w-[2px] bg-white ml-[1px] mt-1" />
            <span className="font-bold">:</span>
          </div>
          <div>
            <TeamCard
              textPosition="right"
              image={kuressaareImage}
              teamName="Kuressaare"
            />
            <p className="text-left ml-2 mt-[2px]">2</p>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-1 sm:ml-auto">
        <InfoIcon className="mr-2" />
        {STARS.map(({ id, color }) => (
          <StarIcon key={id} color={color} />
        ))}
      </section>
    </div>
  );
};

export default Header;

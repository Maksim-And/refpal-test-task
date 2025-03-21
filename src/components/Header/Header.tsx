import InfoIcon from "../../assets/icons/InfoIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import StarIcon from "../../assets/icons/StarIcon";
import kuressaareImage from "../../assets/images/kuressaare.png";
import transImage from "../../assets/images/trans.png";
import { STARS } from "../../constants";
import Card from "../ui/Card/Card";
import TeamCard from "../ui/TeamCard/TeamCard";

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

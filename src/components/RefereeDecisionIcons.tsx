import CardIcon from "../assets/icons/CardIcon";
import FlagIcon from "../assets/icons/FlagIcon";
import ReplayIcon from "../assets/icons/ReplayIcon";
import WhistleIcon from "../assets/icons/Whistle";

type RefereeDecisionIconsProps = {
  type: string;
};

const RefereeDecisionIcons = ({ type }: RefereeDecisionIconsProps) => {
  switch (type) {
    case "yellow-card":
      return <CardIcon />;
    case "replay":
      return <ReplayIcon />;
    case "whistle":
      return <WhistleIcon />;
    case "flag":
      return <FlagIcon />;
    default:
      return <div>-</div>;
  }
};

export default RefereeDecisionIcons;

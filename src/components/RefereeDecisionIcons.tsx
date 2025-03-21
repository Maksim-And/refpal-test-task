import { JSX } from "react";
import CardIcon from "../assets/icons/CardIcon";
import FlagIcon from "../assets/icons/FlagIcon";
import ReplayIcon from "../assets/icons/ReplayIcon";
import WhistleIcon from "../assets/icons/WhistleIcon";

type RefereeDecisionIconsProps = {
  type: string;
};

const iconsMap: Record<string, JSX.Element> = {
  "yellow-card": <CardIcon />,
  replay: <ReplayIcon />,
  whistle: <WhistleIcon />,
  flag: <FlagIcon />,
};

const RefereeDecisionIcons = ({ type }: RefereeDecisionIconsProps) => {
  return iconsMap[type] || <div>-</div>;
};

export default RefereeDecisionIcons;

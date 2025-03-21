import { JSX } from "react";
import { RefereeIconType } from "../../types";
import CardIcon from "../../assets/icons/CardIcon";
import ReplayIcon from "../../assets/icons/ReplayIcon";
import WhistleIcon from "../../assets/icons/WhistleIcon";
import FlagIcon from "../../assets/icons/FlagIcon";

interface RefereeDecisionIconsProps {
  type: RefereeIconType;
}

const iconsMap: Record<RefereeIconType, JSX.Element> = {
  [RefereeIconType.YellowCard]: <CardIcon />,
  [RefereeIconType.Replay]: <ReplayIcon />,
  [RefereeIconType.Whistle]: <WhistleIcon />,
  [RefereeIconType.Flag]: <FlagIcon />,
};

const RefereeDecisionIcons = ({ type }: RefereeDecisionIconsProps) => {
  return iconsMap[type] || <div>-</div>;
};

export default RefereeDecisionIcons;

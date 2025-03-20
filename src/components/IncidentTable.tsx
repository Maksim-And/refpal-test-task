import React, { useState } from "react";
import PlayIcon from "../assets/icons/PlayIcon";
import PlusCicledIcon from "../assets/icons/PlusCicledIcon";
import { cn, setCardColor } from "../lib/utils";
import { IncidentTopic } from "../types";
import { CustomTooltip } from "./CustomTooltip";
import RefereeDecisionIcons from "./RefereeDecisionIcons";
import Statistics from "./Statistics";
import TeamCard from "./TeamCard";
import Card from "./ui/Card";

import kuressaareImage from "../assets/images/kuressaare.png";
import transImage from "../assets/images/trans.png";

type IcidentTableProps = {
  data: IncidentTopic[] | null;
};

const IncidentTable = ({ data }: IcidentTableProps) => {
  const [expandedIncidentId, setExpandedIncidentId] = useState<number | null>(
    6,
  );

  const handleRowClick = (incidentId: number) => {
    setExpandedIncidentId(
      expandedIncidentId === incidentId ? null : incidentId,
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border-x border-green-25">
        <thead className="text-left text-white leading-3">
          <tr className="bg-green-500 font-normal">
            <th className="p-1 w-[5%] ">Minute</th>
            <th className="p-1 w-[5%]">Time</th>
            <th className="p-1 w-[30%] flex flex-col">
              <span>Topic</span>
              <span>subtopic</span>
            </th>
            <th className="p-1 w-[30%]">Offender</th>
            <th className="p-1 w-[5%] text-center">Decision by referee</th>
            <th className="p-1 w-[4%] text-center hidden md:table-cell">
              Official Mark
            </th>
            <th className="p-1 w-[4%] text-center hidden md:table-cell">
              My Mark
            </th>
            <th className="p-1 w-[4%] text-center">Community Mark</th>
            <th className="p-1 w-[4%] text-center hidden md:table-cell">
              A.A.
            </th>
            <th className="p-1 w-[4%] text-center hidden md:table-cell">
              H.K.
            </th>
            <th className="p-1 w-[4%] text-center hidden md:table-cell">
              K.&Ouml;.
            </th>
            <th className="p-1 w-[1%]"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((topic) => (
            <React.Fragment key={topic.id}>
              <tr>
                <td
                  className="bg-green-400 p-1 text-white font-bold"
                  colSpan={12}
                >
                  {topic.topic}
                </td>
              </tr>
              {topic.incidents.map((incident) => (
                <React.Fragment key={incident.id}>
                  <tr
                    onClick={() => handleRowClick(incident.id)}
                    className={cn(
                      "bg-white hover:bg-white/50 border-b border-green-25",
                      expandedIncidentId === incident.id &&
                        "bg-green-300 hover:bg-green-300/60",
                    )}
                  >
                    <td className="p-1">
                      {incident.minute && (
                        <Card
                          border
                          className="bg-green-50 flex justify-center mr-auto"
                        >
                          <span>{incident.minute}</span>
                        </Card>
                      )}
                    </td>
                    <td className="p-1">
                      <span>{incident.time}</span>
                      <PlayIcon />
                    </td>
                    <td className="p-1 leading-4">
                      <strong>{incident.topic}</strong> <br />{" "}
                      {incident.subtopic}
                    </td>
                    <td className="p-1 leading-4">
                      <strong>{incident.offender.name}</strong> <br />{" "}
                      <TeamCard
                        image={
                          incident.offender.image ? transImage : kuressaareImage
                        }
                        teamName={incident.offender.team}
                        textPosition="right"
                        className="text-black font-normal"
                      />
                    </td>
                    <td className="p-1">
                      <RefereeDecisionIcons type={incident.decision} />
                    </td>
                    <td className="p-1 text-center hidden md:table-cell">
                      <Card
                        hasMessage={incident.hasMessage}
                        border
                        className={cn(
                          "flex justify-center w-[32px] h-[24px] px-0",
                          setCardColor(incident.officialMark),
                        )}
                      >
                        <span>{incident.officialMark}</span>
                      </Card>
                    </td>
                    <td className="p-1 text-center hidden md:table-cell">
                      {incident.myMark ?? "-"}
                    </td>
                    <CustomTooltip mark={incident.communityMark} />
                    <td className="p-1 text-center font-bold hidden md:table-cell">
                      {incident.aa}
                    </td>
                    <td className="p-1 text-center font-bold hidden md:table-cell">
                      {incident.hk}
                    </td>
                    <td className="p-1 text-center font-bold hidden md:table-cell">
                      {incident.ko}
                    </td>
                    <td className="p-1">
                      <PlusCicledIcon />
                    </td>
                  </tr>
                  {expandedIncidentId === incident.id && (
                    <Statistics playersStatistic={incident.playersStatistic} />
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentTable;

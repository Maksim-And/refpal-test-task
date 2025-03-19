import React, { useState } from "react";
import Card from "./Card";
import Statistics from "./Statistics";
import { cn, setCardColor } from "../lib/utils";
import PlayIcon from "../assets/icons/PlayIcon";
import TeamCard from "./TeamCard";

import transImage from "../assets/images/trans.png";
import kuressaareImage from "../assets/images/kuressaare.png";
import RefereeDecisionIcons from "./RefereeDecisionIcons";
import { CustomTooltip } from "./CustomTooltip";
import PlusCicledIcon from "../assets/icons/PlusCicledIcon";

const data = [
  {
    id: 1,
    topic: "Main Incidents",
    incidents: [
      {
        id: 4,
        minute: 73,
        time: "9:34",
        topic: "Ball out of play",
        subtopic: "Pushing/pulling",
        offender: { name: "Rolon", team: "Trans", image: transImage },
        decision: "yellow-card",
        officialMark: 0,
        myMark: null,
        communityMark: 4.1,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 14,
        minute: null,
        time: "9:34",
        topic: "Ball out of play",
        subtopic: "Pushing/pulling",
        offender: { name: "Domov", team: "Kuressaare", image: kuressaareImage },
        decision: "replay",
        officialMark: 1,
        myMark: null,
        communityMark: 4.1,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 5,
        minute: 90,
        time: "12:06",
        topic: "Severity",
        subtopic: "Studs directed high",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "whistle",
        officialMark: 3,
        myMark: null,
        communityMark: 2.8,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 6,
        minute: null,
        time: "",
        topic: "2nd yellow",
        subtopic: "Reckless",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "flag",
        officialMark: 4,
        myMark: null,
        communityMark: 2.0,
        aa: 4,
        hk: 4,
        ko: 4,
      },
    ],
  },
  {
    id: 2,
    topic: "Learning points",
    incidents: [
      {
        id: 7,
        minute: 73,
        time: "9:34",
        topic: "Ball out of play",
        subtopic: "Pushing/pulling",
        offender: { name: "Rolon", team: "Trans", image: transImage },
        decision: "yellow-card",
        officialMark: 5,
        myMark: null,
        communityMark: 4.1,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 8,
        minute: 90,
        time: "12:06",
        topic: "Severity",
        subtopic: "Studs directed high",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "replay",
        officialMark: 4,
        myMark: null,
        communityMark: 2.8,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 9,
        minute: 90,
        time: "",
        topic: "2nd yellow",
        subtopic: "Reckless",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "whistle",
        officialMark: 3,
        myMark: null,
        communityMark: 2.0,
        aa: 4,
        hk: 4,
        ko: 4,
      },
    ],
  },
  {
    id: 3,
    topic: "For referee / statistics",
    incidents: [
      {
        id: 10,
        minute: 73,
        time: "9:34",
        topic: "Ball out of play",
        subtopic: "Pushing/pulling",
        offender: { name: "Rolon", team: "Trans", image: transImage },
        decision: "flag",
        officialMark: 6,
        myMark: null,
        communityMark: 4.1,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 11,
        minute: 90,
        time: "12:06",
        topic: "Severity",
        subtopic: "Studs directed high",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "flag",
        officialMark: 6,
        myMark: null,
        communityMark: 2.8,
        aa: 4,
        hk: 4,
        ko: 4,
      },
      {
        id: 12,
        minute: 90,
        time: "",
        topic: "2nd yellow",
        subtopic: "Reckless",
        offender: { name: "Kukhianidze", team: "Trans", image: transImage },
        decision: "whistle",
        officialMark: 3,
        myMark: null,
        communityMark: 2.0,
        aa: 4,
        hk: 4,
        ko: 4,
      },
    ],
  },
];

const IncidentTable = () => {
  const [expandedIncidentId, setExpandedIncidentId] = useState<number | null>(
    null,
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
            <th className="p-1 w-[29%] flex flex-col">
              <span>Topic</span>
              <span>subtopic</span>
            </th>
            <th className="p-1 w-[28%]">Offender</th>
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
              K.O.
            </th>
            <th className="p-1 w-[4%]"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((topic) => (
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
                        "bg-green-200 hover:bg-green-200/60",
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
                        image={incident.offender.image}
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
                  {expandedIncidentId === incident.id && <Statistics />}
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

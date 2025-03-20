import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Pagination from "./ui/Pagination";

import image1 from "../assets/images/screen-1.jpg";
import image2 from "../assets/images/screen-2.jpg";
import image3 from "../assets/images/screen-3.jpg";
import image4 from "../assets/images/screen-5.jpg";
import Card from "./ui/Card";
import { cn, setCardColor } from "../lib/utils";

type ImageData = {
  date: string;
  team1: string;
  team2: string;
  imageUrl: string;
  playerName: string;
  score: number;
};

const images: ImageData[] = [
  {
    date: "06.10.24",
    team1: "Kuressaare",
    team2: "Volossatov",
    imageUrl: image1,
    playerName: "Epton",
    score: 1,
  },
  {
    date: "21.09.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Kalju",
    score: 2,
  },
  {
    date: "15.09.24",
    team1: "Tammeka",
    team2: "Patrikjevs",
    imageUrl: image3,
    playerName: "Pedmanson",
    score: 3,
  },
  {
    date: "13.09.24",
    team1: "Tammeka",
    team2: "Pedmanson",
    imageUrl: image1,
    playerName: "Ceesay",
    score: 4,
  },
  {
    date: "01.09.24",
    team1: "Paide",
    team2: "Ceesay",
    imageUrl: image4,
    playerName: "Kask",
    score: 5,
  },
  {
    date: "02.08.24",
    team1: "Vaprus",
    team2: "Kask",
    imageUrl: image2,
    playerName: "Epton",
    score: 6,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Vaprus",
    score: 4,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image3,
    playerName: "Vaprus",
    score: 5,
  },
  {
    date: "06.10.24",
    team1: "Kuressaare",
    team2: "Volossatov",
    imageUrl: image1,
    playerName: "Epton",
    score: 1,
  },
  {
    date: "21.09.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Kalju",
    score: 2,
  },
  {
    date: "15.09.24",
    team1: "Tammeka",
    team2: "Patrikjevs",
    imageUrl: image3,
    playerName: "Pedmanson",
    score: 3,
  },
  {
    date: "13.09.24",
    team1: "Tammeka",
    team2: "Pedmanson",
    imageUrl: image1,
    playerName: "Ceesay",
    score: 4,
  },
  {
    date: "01.09.24",
    team1: "Paide",
    team2: "Ceesay",
    imageUrl: image4,
    playerName: "Kask",
    score: 5,
  },
  {
    date: "02.08.24",
    team1: "Vaprus",
    team2: "Kask",
    imageUrl: image2,
    playerName: "Epton",
    score: 6,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Vaprus",
    score: 4,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image3,
    playerName: "Vaprus",
    score: 5,
  },
  {
    date: "06.10.24",
    team1: "Kuressaare",
    team2: "Volossatov",
    imageUrl: image1,
    playerName: "Epton",
    score: 1,
  },
  {
    date: "21.09.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Kalju",
    score: 2,
  },
  {
    date: "15.09.24",
    team1: "Tammeka",
    team2: "Patrikjevs",
    imageUrl: image3,
    playerName: "Pedmanson",
    score: 3,
  },
  {
    date: "13.09.24",
    team1: "Tammeka",
    team2: "Pedmanson",
    imageUrl: image1,
    playerName: "Ceesay",
    score: 4,
  },
  {
    date: "01.09.24",
    team1: "Paide",
    team2: "Ceesay",
    imageUrl: image4,
    playerName: "Kask",
    score: 5,
  },
  {
    date: "02.08.24",
    team1: "Vaprus",
    team2: "Kask",
    imageUrl: image2,
    playerName: "Epton",
    score: 6,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image2,
    playerName: "Vaprus",
    score: 4,
  },
  {
    date: "27.07.24",
    team1: "Tammeka",
    team2: "Epton",
    imageUrl: image3,
    playerName: "Vaprus",
    score: 5,
  },
];

const imagesPerPage = 7;

const VideoSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const currentImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage,
  );

  return (
    <div className="container mx-auto">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={setCurrentPage}
      />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 my-1"
        >
          {currentImages.map((img, index) => (
            <motion.div
              key={index}
              className="flex flex-col mb-1 sm:mb-0 pb-2 border-b border-b-gray-300 sm:pb-0 sm:border-b-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <img
                src={img.imageUrl}
                alt={`${img.team1} vs ${img.team2}`}
                className="w-full h-auto border"
                loading="lazy"
              />
              <div className="mt-2 flex justify-between gap-x-1">
                <div>
                  <span className="font-bold">{img.date}&nbsp;</span>
                  <span>
                    <span className="text-green-450">{img.team1}</span>,{" "}
                    {img.team2}
                  </span>
                </div>
                <div>
                  <Card className={cn(setCardColor(img.score))} border>
                    {img.score}
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClick={setCurrentPage}
      />
    </div>
  );
};

export default VideoSection;

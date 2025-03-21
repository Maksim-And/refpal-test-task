import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn, setCardColor } from "../lib/utils";
import { SimilarIncident } from "../types";
import Card from "./ui/Card";
import Pagination from "./ui/Pagination";
import Spinner from "./ui/Spinner";
import Error from "./ui/Error";

import image1 from "../assets/images/screen-1.jpg";
import image2 from "../assets/images/screen-2.jpg";
import image3 from "../assets/images/screen-3.jpg";
import image4 from "../assets/images/screen-4.jpg";
import image5 from "../assets/images/screen-5.jpg";

const pictures: Record<number, string> = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
};

const IMAGE_PER_PAGE = 7;

type VideoSectionProps = {
  data: SimilarIncident[] | null;
  loading: boolean;
  error: string | null;
};

const VideoSection = ({ data, loading, error }: VideoSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data ? Math.ceil(data.length / IMAGE_PER_PAGE) : 0;
  const currentImages = data?.slice(
    (currentPage - 1) * IMAGE_PER_PAGE,
    currentPage * IMAGE_PER_PAGE,
  );

  if (error) {
    return <Error />;
  }

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <>
          {!data?.length ? (
            <div className="text-red font-semibold">No data</div>
          ) : (
            <>
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
                  {currentImages?.map((img, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col mb-1 sm:mb-0 pb-2 border-b border-b-gray-300 sm:pb-0 sm:border-b-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <img
                        src={pictures[img.image]}
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
                          <Card className={cn(setCardColor(img.scale))} border>
                            {img.scale}
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
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VideoSection;

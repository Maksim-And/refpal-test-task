import image1 from "../assets/images/screen-1.jpg";
import image2 from "../assets/images/screen-2.jpg";
import image3 from "../assets/images/screen-3.jpg";
import image4 from "../assets/images/screen-4.jpg";
import image5 from "../assets/images/screen-5.jpg";

export const TOPIC_OPTIONS = [
  "Select a topic",
  "Severity",
  "Priority",
  "Category",
  "Status",
];

export const SUBTOPIC_OPTIONS = ["Select a subtopic", "Studs directed high"];

export const SCALE_OPTIONS = [
  "Select a scale",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

export const STARS = [
  { id: 1, color: "#e09139" },
  { id: 2, color: "#3a6f93" },
  { id: 3, color: "#6d7b70" },
];

export const IMAGES: Record<number, string> = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
};

export const IMAGE_PER_PAGE = 7;

interface IIconProps {
  width?: number;
  height?: number;
}

const CardIcon: React.FC<IIconProps> = ({ width = 20, height = 20 }) => (
  <svg
    fill="#f8cc0b"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="block mx-auto"
  >
    <path d="M3,20V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4A1,1,0,0,1,3,20Z" />
  </svg>
);

export default CardIcon;

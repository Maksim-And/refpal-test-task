interface IIconProps {
  width?: number;
  height?: number;
}

const ArrowLeftIcon: React.FC<IIconProps> = ({ width = 18, height = 18 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z"
      fill="#ca6b6d"
    />
  </svg>
);

export default ArrowLeftIcon;

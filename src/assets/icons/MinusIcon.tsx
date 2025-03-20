interface IIconProps {
  width?: number;
  height?: number;
}

const MinusIcon: React.FC<IIconProps> = ({ width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10L1 6L15 6V10L1 10Z" fill="#c68f88" />
  </svg>
);

export default MinusIcon;

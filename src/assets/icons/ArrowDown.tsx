interface IIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const ArrowDownIcon: React.FC<IIconProps> = ({
  width = 12,
  height = 12,
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8L14 8V10L8 16L2 10V8H6V0L10 4.76995e-08V8Z" fill="#4a9544" />
  </svg>
);

export default ArrowDownIcon;

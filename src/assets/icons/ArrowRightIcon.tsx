interface IIconProps {
  width?: number;
  height?: number;
}

const ArrowRightIcon: React.FC<IIconProps> = ({ width = 12, height = 12 }) => (
  <div className="rounded-full bg-[#528462] p-[3px]">
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
        stroke="#fff"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ArrowRightIcon;

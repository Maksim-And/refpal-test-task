interface IIconProps {
  width?: number;
  height?: number;
}

const CardIcon: React.FC<IIconProps> = ({ width = 20, height = 20 }) => (
  <svg
    fill="#f8cc0b"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    viewBox="0 0 53.477 34.479"
    xmlSpace="preserve"
    className="block mx-auto"
  >
    <g>
      <path d="M51.551,0H1.928C0.864,0,0,0.859,0,1.918v9.675h53.477V1.918C53.477,0.859,52.617,0,51.551,0z" />
      <path d="M0,32.566c0,1.056,0.863,1.913,1.928,1.914h49.624c1.066,0,1.925-0.858,1.925-1.914V14.263H0V32.566z" />
    </g>
  </svg>
);

export default CardIcon;

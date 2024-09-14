import { FC } from 'react';

type Props = {
  size: readonly [number, number];
  className: string;
};

const Save: FC<Props> = ({ size, className }) => {
  return (
    <svg
      className={className}
      height={size[0]}
      width={size[1]}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.375 3.125H20.3004L25.625 9.78076V26.875H4.375V3.125ZM24.375 25.625H20.625V16.875H9.375V25.625H5.625V4.375H9.375V10.625H20.625V5.53174L24.375 10.2192V25.625ZM19.375 4.375H10.625V9.375H19.375V4.375ZM19.375 25.625H10.625V18.125H19.375V25.625Z"
        fill="black"
        fillOpacity="0.85"
      />
    </svg>
  );
};

export { Save };

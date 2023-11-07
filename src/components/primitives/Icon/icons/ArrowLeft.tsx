import { FC } from 'react';

type Props = {
  size: readonly [number, number];
  className: string;
};

const ArrowLeft: FC<Props> = ({ size, className }) => {
  return (
    <svg
      className={className}
      height={size[0]}
      width={size[1]}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ArrowLeft">
        <path
          id="Vector"
          d="M14.6563 7.32133H4.04292L10.3954 1.89276C10.4969 1.80526 10.4353 1.64276 10.301 1.64276H8.6957C8.62495 1.64276 8.55784 1.66776 8.50523 1.7124L1.65033 7.56776C1.58755 7.62134 1.53719 7.68757 1.50269 7.76197C1.46818 7.83638 1.45032 7.91722 1.45032 7.99901C1.45032 8.08081 1.46818 8.16164 1.50269 8.23605C1.53719 8.31045 1.58755 8.37669 1.65033 8.43026L8.54514 14.3213C8.57235 14.3445 8.605 14.357 8.63947 14.357H10.2992C10.4335 14.357 10.4951 14.1928 10.3936 14.107L4.04292 8.67848H14.6563C14.7361 8.67848 14.8014 8.61419 14.8014 8.53562V7.46419C14.8014 7.38562 14.7361 7.32133 14.6563 7.32133Z"
          fill="black"
          fill-opacity="0.85"
        />
      </g>
    </svg>
  );
};

export { ArrowLeft };
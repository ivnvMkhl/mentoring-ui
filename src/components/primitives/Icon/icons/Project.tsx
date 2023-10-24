import { FC } from 'react';

type Props = {
  size: readonly [number, number];
};

const Project: FC<Props> = ({ size }) => {
  return (
    <svg height={size[0]} width={size[1]} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="project">
        <path
          id="Vector"
          d="M4.5 28.5L27.5 28.5C28.0531 28.5 28.5 28.0531 28.5 27.5L28.5 4.5C28.5 3.94687 28.0531 3.5 27.5 3.5L4.5 3.5C3.94687 3.5 3.5 3.94687 3.5 4.5L3.5 27.5C3.5 28.0531 3.94687 28.5 4.5 28.5ZM20.5 8.75C20.5 8.6125 20.6125 8.5 20.75 8.5H23.25C23.3875 8.5 23.5 8.6125 23.5 8.75L23.5 23.25C23.5 23.3875 23.3875 23.5 23.25 23.5H20.75C20.6125 23.5 20.5 23.3875 20.5 23.25L20.5 8.75ZM14.5 17.5C14.5 17.3625 14.6125 17.25 14.75 17.25H17.25C17.3875 17.25 17.5 17.3625 17.5 17.5V23.25C17.5 23.3875 17.3875 23.5 17.25 23.5H14.75C14.6125 23.5 14.5 23.3875 14.5 23.25L14.5 17.5ZM8.5 15.25C8.5 15.1125 8.6125 15 8.75 15H11.25C11.3875 15 11.5 15.1125 11.5 15.25V23.25C11.5 23.3875 11.3875 23.5 11.25 23.5L8.75 23.5C8.6125 23.5 8.5 23.3875 8.5 23.25V15.25Z"
          fill="#FDFDFD"
        />
      </g>
    </svg>
  );
};

export { Project };

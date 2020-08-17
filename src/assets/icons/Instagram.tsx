import React from "react";

const Instagram = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8.5H5.2A4.69 4.69 0 00.5 5.2v7.6a4.69 4.69 0 004.7 4.7h7.6a4.69 4.69 0 004.7-4.7V5.2A4.69 4.69 0 0012.8.5zM16 12.8a3.16 3.16 0 01-3.2 3.2H5.2A3.16 3.16 0 012 12.8V5.2A3.16 3.16 0 015.2 2h7.6A3.16 3.16 0 0116 5.2v7.6zM9 4.5A4.5 4.5 0 1013.5 9 4.48 4.48 0 009 4.5zM9 12a3 3 0 010-6 3 3 0 013 3 3.08 3.08 0 01-3 3zm4.5-8.5a.91.91 0 00-.7.3.91.91 0 00-.3.7.91.91 0 00.3.7 1 1 0 001.4 0 .91.91 0 00.3-.7.91.91 0 00-.3-.7.91.91 0 00-.7-.3z"
        fill={props.fill || "#fff"}
      />
    </svg>
  );
};

export default Instagram;

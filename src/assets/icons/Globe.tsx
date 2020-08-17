import React from 'react';

const Globe = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 18}
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.755.407c-4.416 0-7.992 3.584-7.992 8s3.576 8 7.992 8c4.424 0 8.008-3.584 8.008-8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848a6.424 6.424 0 013.464 2.848zM8.763 2.04a11.27 11.27 0 011.528 3.168H7.235A11.27 11.27 0 018.763 2.04zM2.57 10.007a6.594 6.594 0 01-.208-1.6c0-.552.08-1.088.208-1.6h2.704a13.212 13.212 0 00-.112 1.6c0 .544.048 1.072.112 1.6H2.57zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848a6.39 6.39 0 01-3.464-2.848zm2.36-6.4h-2.36A6.39 6.39 0 016.69 2.36a12.52 12.52 0 00-1.104 2.848zm3.176 9.568a11.27 11.27 0 01-1.528-3.168h3.056a11.27 11.27 0 01-1.528 3.168zm1.872-4.768H6.89a11.771 11.771 0 01-.128-1.6c0-.544.056-1.08.128-1.6h3.744c.072.52.128 1.056.128 1.6s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zm1.416-4.448c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6H12.25z"
        fill={props.fill || '#fff'}
      />
    </svg>
  );
};

export default Globe;

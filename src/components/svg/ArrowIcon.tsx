export const ArrowIcon = ({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size || '16'}
      height={size || '15'}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.40715 1.05999L0.000487988 7.49999L6.40715 13.94C6.46501 14.016 6.53853 14.0786 6.62271 14.1237C6.70689 14.1688 6.79979 14.1953 6.8951 14.2014C6.99041 14.2075 7.08591 14.193 7.17515 14.159C7.26438 14.1249 7.34526 14.0721 7.4123 14.0041C7.47935 13.9361 7.531 13.8545 7.56376 13.7648C7.59652 13.6751 7.60963 13.5794 7.60219 13.4841C7.59474 13.3889 7.56693 13.2964 7.52063 13.2129C7.47433 13.1294 7.41062 13.0568 7.33382 13L2.54049 8.16665L15.2938 8.16665C15.4706 8.16665 15.6402 8.09641 15.7652 7.97139C15.8902 7.84637 15.9605 7.6768 15.9605 7.49999C15.9605 7.32317 15.8902 7.1536 15.7652 7.02858C15.6402 6.90356 15.4706 6.83332 15.2938 6.83332L2.54049 6.83332L7.33382 1.99999C7.45847 1.87445 7.52815 1.70454 7.52752 1.52763C7.5269 1.35072 7.45602 1.1813 7.33049 1.05665C7.20495 0.932001 7.03504 0.862323 6.85813 0.862949C6.68122 0.863574 6.51181 0.934451 6.38715 1.05999L6.40715 1.05999Z"
        fill={color || '#1C1C1C'}
      />
    </svg>
  );
};

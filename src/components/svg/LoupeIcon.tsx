export const LoupeIcon = ({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size || '14'}
      height={size || '14'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 13L9 9M1 5.66667C1 6.2795 1.12071 6.88634 1.35523 7.45252C1.58975 8.01871 1.93349 8.53316 2.36683 8.9665C2.80018 9.39984 3.31462 9.74358 3.88081 9.97811C4.447 10.2126 5.05383 10.3333 5.66667 10.3333C6.2795 10.3333 6.88634 10.2126 7.45252 9.97811C8.01871 9.74358 8.53316 9.39984 8.9665 8.9665C9.39984 8.53316 9.74358 8.01871 9.97811 7.45252C10.2126 6.88634 10.3333 6.2795 10.3333 5.66667C10.3333 5.05383 10.2126 4.447 9.97811 3.88081C9.74358 3.31462 9.39984 2.80018 8.9665 2.36683C8.53316 1.93349 8.01871 1.58975 7.45252 1.35523C6.88634 1.12071 6.2795 1 5.66667 1C5.05383 1 4.447 1.12071 3.88081 1.35523C3.31462 1.58975 2.80018 1.93349 2.36683 2.36683C1.93349 2.80018 1.58975 3.31462 1.35523 3.88081C1.12071 4.447 1 5.05383 1 5.66667Z"
        stroke={color || 'white'}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
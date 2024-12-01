export const EyeIcon = ({ size, color }: { size?: number; color?: string }) => {
  return (
    <svg
      width={size || '22'}
      height={size || '15'}
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0028 11.577C12.136 11.577 13.0984 11.1804 13.8901 10.3872C14.6817 9.59408 15.0776 8.63092 15.0776 7.49775C15.0776 6.36458 14.681 5.40217 13.8878 4.6105C13.0946 3.81883 12.1315 3.423 10.9983 3.423C9.86515 3.423 8.90273 3.81958 8.11106 4.61275C7.3194 5.40592 6.92356 6.36908 6.92356 7.50225C6.92356 8.63542 7.32015 9.59783 8.11331 10.3895C8.90648 11.1812 9.86965 11.577 11.0028 11.577ZM11.0006 10.2C10.2506 10.2 9.61306 9.9375 9.08806 9.4125C8.56306 8.8875 8.30056 8.25 8.30056 7.5C8.30056 6.75 8.56306 6.1125 9.08806 5.5875C9.61306 5.0625 10.2506 4.8 11.0006 4.8C11.7506 4.8 12.3881 5.0625 12.9131 5.5875C13.4381 6.1125 13.7006 6.75 13.7006 7.5C13.7006 8.25 13.4381 8.8875 12.9131 9.4125C12.3881 9.9375 11.7506 10.2 11.0006 10.2ZM11.0018 14.5C8.70231 14.5 6.60706 13.8657 4.71606 12.597C2.82506 11.3285 1.43273 9.6295 0.539062 7.5C1.43273 5.3705 2.82456 3.6715 4.71456 2.403C6.60473 1.13433 8.69965 0.5 10.9993 0.5C13.2988 0.5 15.3941 1.13433 17.2851 2.403C19.1761 3.6715 20.5684 5.3705 21.4621 7.5C20.5684 9.6295 19.1766 11.3285 17.2866 12.597C15.3964 13.8657 13.3015 14.5 11.0018 14.5ZM11.0006 13C12.8839 13 14.6131 12.5042 16.1881 11.5125C17.7631 10.5208 18.9672 9.18333 19.8006 7.5C18.9672 5.81667 17.7631 4.47917 16.1881 3.4875C14.6131 2.49583 12.8839 2 11.0006 2C9.11723 2 7.38806 2.49583 5.81306 3.4875C4.23806 4.47917 3.0339 5.81667 2.20056 7.5C3.0339 9.18333 4.23806 10.5208 5.81306 11.5125C7.38806 12.5042 9.11723 13 11.0006 13Z"
        fill={color || '#1C1B1F'}
      />
    </svg>
  );
};
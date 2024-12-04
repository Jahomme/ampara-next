import { ConvertPxToMm } from '@/utils/convert-px-to-mm';
import * as React from 'react';

export const RelievedIcon = ({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) => {
  const formatedSize = ConvertPxToMm(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg5"
      width={formatedSize || '210mm'}
      height={formatedSize || '297mm'}
      version="1.1"
      viewBox="0 0 210 297"
    >
      <g id="layer1">
        <path
          id="path5536"
          fill={color || '#000'}
          strokeWidth="0.29"
          d="M99.637 207.138c-8.892-1.082-15.669-3.126-22.568-6.808-10.77-5.748-19.668-14.98-24.972-25.908-9.907-20.414-7.507-43.868 6.347-62.017 3.158-4.137 9.101-9.652 13.81-12.814 20.927-14.053 49.193-12.925 68.97 2.752a323 323 0 0 0 2.354 1.856c.219.164.967-.785 2.265-2.874 1.067-1.717 2.208-3.447 2.535-3.846l.595-.724.472.676c4.395 6.29 10.733 18.203 12.592 23.668 2.076 6.105 2.467 11.344 1.111 14.924-.486 1.285-.55 1.82-.332 2.753.685 2.935.988 9.656.632 13.983-2.271 27.583-22.133 49.266-49.32 53.844-2.641.445-12.3.8-14.49.535zm14.2-6.173c21.639-3.753 38.814-20.43 43.155-41.902.758-3.746 1.205-9.713.984-13.117l-.175-2.684-1.043.615c-7.095 4.187-15.965 2.054-20.61-4.956-.997-1.506-1.007-1.495-.415.435.243.797.521 2.692.616 4.212.14 2.264.086 2.933-.315 3.708-1.427 2.76-5.627 2.717-6.95-.072-.257-.54-.469-1.679-.473-2.532 0-3.098-1.164-6.159-2.775-7.387-.687-.524-1.447-.777-2.641-.88-3.644-.311-5.628 1.975-6.208 7.155-.372 3.332-.817 4.458-2.058 5.214-2.018 1.231-4.427.494-5.477-1.675-.522-1.08-.579-1.56-.41-3.484.256-2.95 1.136-6.154 2.277-8.299 2.583-4.859 7.771-7.44 13.341-6.638 3.945.569 6.74 2.362 8.966 5.75.628.957 1.067 1.478.976 1.16-.926-3.238-.969-5.296-.188-9.127.788-3.868 2.284-8.048 4.639-12.96l1.975-4.12-2.311-1.888c-10.7-8.74-23.761-12.919-37.558-12.015-21.613 1.417-40.356 16.106-46.973 36.812-5.256 16.447-2.316 34.06 8.023 48.072 2.063 2.795 6.504 7.376 9.463 9.761 7.68 6.19 17.492 10.218 27.707 11.374 3.537.4 10.574.14 14.459-.533zm-13.966-11.928c-3.476-.43-8.555-1.822-12.073-3.307-5.82-2.456-11.247-6.662-14.97-11.597-2.574-3.415-3.818-6.81-2.495-6.81.301 0 3.072 1.225 6.158 2.724 10.6 5.146 17.954 6.944 28.362 6.93 10.789 0 18.587-1.986 29.551-7.477 2.392-1.198 4.611-2.178 4.932-2.178 1.394 0 .216 3.156-2.594 6.939-6.675 8.99-18.196 14.594-30.722 14.943-2.156.058-4.923 0-6.149-.168zm-24.781-40.25c-1.321-.806-1.825-1.97-1.825-4.212 0-4.48 1.698-9.235 4.32-12.095 5.591-6.1 16.25-4.966 20.435 2.174 1.862 3.177 3.167 9.273 2.509 11.717-.88 3.265-5.24 4.032-6.95 1.223-.307-.508-.598-1.732-.702-2.97-.5-5.906-2.731-8.675-6.621-8.214-2.473.295-3.89 1.788-4.721 4.98-.247.94-.446 2.332-.446 3.093 0 2.935-1.57 4.872-3.946 4.87-.62 0-1.543-.256-2.053-.566m78.855-6.621c5.085-2.38 7.955-7.818 7.128-13.505-.885-6.085-3.992-13.452-9.731-23.072-1.235-2.07-2.322-3.76-2.415-3.759-.253 0-1.089 1.37-4.084 6.647-7.292 12.853-9.654 21.905-7.145 27.381 1.53 3.34 4.172 5.715 7.628 6.857 2.574.851 6.107.626 8.619-.55"
        ></path>
      </g>
    </svg>
  );
};

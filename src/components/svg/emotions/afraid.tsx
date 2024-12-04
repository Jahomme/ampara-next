import { ConvertPxToMm } from '@/utils/convert-px-to-mm';
import * as React from 'react';

export const AfraidIcon = ({
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
          id="path5596"
          fill={color || '#000'}
          strokeWidth="0.29"
          d="M98.865 161.792c-17.75-1.32-34.202-10.905-44.248-25.78-10.217-15.13-12.8-34.517-6.893-51.74 8.204-23.92 30.429-39.838 55.621-39.838 24.229 0 45.794 14.677 54.74 37.258 5.223 13.18 5.386 28.526.446 41.8-8.09 21.74-27.928 36.643-50.988 38.305-4.366.315-4.378.315-8.678 0zm12.025-5.937c30.412-4.322 50.882-33.637 44.507-63.737-.994-4.695-2.234-8.195-4.52-12.763-13.2-26.38-45.375-36.977-71.574-23.571-5.11 2.614-8.621 5.135-12.85 9.226-5.02 4.854-8.442 9.59-11.204 15.504-3.942 8.438-5.61 17.366-4.927 26.369 1.905 25.128 20.45 45.147 45.355 48.96 3.545.542 11.437.549 15.213 0zm-27.179-21.403c-1.279-.445-10.655-11.663-10.203-12.207.164-.202.812-.717 1.434-1.149l1.133-.784 4.189 3.503c2.303 1.926 4.301 3.497 4.44 3.49.136 0 1.49-1.588 3.004-3.512 4.334-5.507 4.89-6.039 6.314-6.039 1.44 0 1.758.291 6.135 5.598 1.668 2.022 3.116 3.676 3.218 3.676.103 0 1.673-1.793 3.49-3.985 4.262-5.143 4.424-5.289 5.842-5.289 1.387 0 1.884.468 6.234 5.868 1.637 2.033 3.071 3.693 3.187 3.69.116 0 2.08-1.566 4.366-3.474 4.514-3.77 4.244-3.676 6.092-2.112l.974.823-4.695 5.645c-2.583 3.104-4.79 5.744-4.906 5.867-.42.444-1.93.69-2.806.458-.813-.216-2.83-2.432-7.967-8.754-.438-.54-.614-.378-4.082 3.755-3.964 4.723-4.122 4.88-5.14 5.13-1.407.346-2.443-.492-6.13-4.96-1.983-2.402-3.675-4.375-3.76-4.384-.086 0-1.831 2.004-3.88 4.475s-3.74 4.492-3.76 4.492c-.034 0-.43.113-.913.253-.556.161-1.22.133-1.81-.072zm-9.843-27.05c-.8-1.399-1.43-2.572-1.4-2.606.033-.034 2.832-1.67 6.23-3.637s6.183-3.7 6.189-3.85c0-.151-2.65-1.815-5.902-3.696a3870 3870 0 0 1-6.258-3.625c-.24-.143.09-.946 1.097-2.665.793-1.354 1.548-2.436 1.677-2.404.883.216 17.148 9.857 17.785 10.542.552.593.797 1.166.797 1.862 0 .699-.243 1.262-.797 1.848-.438.464-4.383 2.9-8.766 5.414-4.384 2.514-8.246 4.749-8.584 4.966-.585.377-.684.274-2.068-2.149m48.76-2.569c-4.78-2.773-8.987-5.376-9.345-5.785-.818-.932-.85-2.41-.075-3.396.318-.404 4.263-2.855 8.766-5.446s8.468-4.891 8.81-5.113c.594-.385.684-.294 2.082 2.141.803 1.4 1.428 2.577 1.388 2.616-.038.041-2.867 1.685-6.284 3.656s-6.181 3.701-6.144 3.845c.038.144 2.84 1.86 6.23 3.814s6.129 3.69 6.086 3.856c-.079.301-2.723 4.934-2.787 4.881-.034 0-3.945-2.296-8.727-5.069z"
        ></path>
      </g>
    </svg>
  );
};
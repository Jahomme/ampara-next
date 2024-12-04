export const ConvertPxToMm = (size: Number | undefined) => {
  const convertedValue = size ? String(size) + 'mm' : null;

  return convertedValue;
};

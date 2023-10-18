export const getImageType = (srcKey: string): string | null => {
  const typeMatch = srcKey.match(/\.(jpg|jpeg|png)$/i);
  return typeMatch ? typeMatch[1].toLowerCase() : null;
};
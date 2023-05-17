export const getIcon = (fileName: string) => {
  const fileExtension = fileName.split(".")[1];

  return fileExtension;
};

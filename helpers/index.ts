export const getImagePath = (path: string) => {
  return `/assets/images/${path}`;
};

export const getIconPath = (path: string) => {
  return `/assets/icons/${path}`;
};

export const getProjectImagePath = (path: string) => {
  return getImagePath(`projects/${path}`);
};

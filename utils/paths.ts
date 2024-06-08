export const formatName = (name: string): string => {
  return name.replace(/\s+/g, "_").replace(/&/g, "and").toLowerCase();
};

export const parseParam = (param: string): string => {
  return param.replace(/_/g, " ").replace(/and/g, "&");
};

export const capitalize = (text: string) => {
  const words = text.split(" ");
  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

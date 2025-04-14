export const isPlainObject = (val) => {
  return val && typeof val === "object" && !Array.isArray(val);
};

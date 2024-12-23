// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const shuffle = (values: any[]) => {
  return values
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

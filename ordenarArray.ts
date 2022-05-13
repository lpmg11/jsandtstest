interface items{
  [index: string]:number;
}

const sortItem = (items: items[], key:string) => {
  return items.sort((a, b) => {
    return a[key] - b[key];
  });
};

export default sortItem;
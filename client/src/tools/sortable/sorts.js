const sorts = (sortBy, list) => {
  switch (sortBy) {
    case "hp":
      return list.sort((a, b) => b.price - a.price);
    case "lp":
      return list.sort((a, b) => a.price - b.price);
    default:
      return list;
  }
};

export default sorts;

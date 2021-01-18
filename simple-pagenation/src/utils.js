const paginate = (followers) => {
  // console.log("initial list", followers);

  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  // console.log("final list", newFollowers);
  return newFollowers;
};

export default paginate;

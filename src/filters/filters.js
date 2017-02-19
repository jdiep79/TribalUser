const groupUsersByName = (users, sort) => {
  return users.reduce((results, user) => {
    const character = sort === 'first' ?
      user.name.first[0] :
      user.name.last[0];

    if (!results[character]) {
      results[character] = [];
    }

    results[character].push(user);
    return results;
  }, {});
};

const filterSearch = (list, term) => {
  return list.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`
    return fullName.includes(term);
  });
};

const capitalizeFirstLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

const removeTime = (dateString) => {
  return dateString.slice(0, 10);
}

export { 
  groupUsersByName, 
  filterSearch, 
  capitalizeFirstLetter, 
  removeTime 
};
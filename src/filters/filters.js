const groupUsersByName = (users) => {
  return users.reduce((results, user) => {
    let character = user.email[0];

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

export { groupUsersByName, filterSearch };
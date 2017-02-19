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

export { groupUsersByName };
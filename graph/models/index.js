const root = {
  hello: () => 'Hello world!',
  foo: () => 'bar',
  guests: () => [
    { id: 1, name: 'Sean', dietaryRestrictions: [] },
    { id: 2, name: 'Ben', dietaryRestrictions: [{ label: 'no eggplant' }, { label: 'no melon' }] }
  ],
  createGuest: (variables) => {
    console.log('Creating guest:', variables.input);
    return Object.assign(variables.input, { id: 3, dietaryRestrictions: [] });
  }
};

module.exports.root = root;

const root = {
  hello: () => 'Hello world!',
  foo: () => 'bar',
  guests: () => [
    { name: 'Sean', dietaryRestrictions: [] },
    { name: 'Ben', dietaryRestrictions: [{ label: 'no eggplant' }, { label: 'no melon' }] }
  ]
};

module.exports.root = root;

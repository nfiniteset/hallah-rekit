function parseKey(key, val) {
  let parsedVal = val;
  switch (key) {
    case 'startsAt': {
      parsedVal = new Date(parsedVal);
      break;
    }
    default:
      break;
  }
  return { [key]: parsedVal };
}

export default function parseDinner(data) {
  return Object.entries(data).reduce((acc, [key, val]) => Object.assign({}, acc, parseKey(key, val)), {});
}

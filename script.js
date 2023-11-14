const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace("#", "");

  if (shortHex.length !== 3) {
    throw new Error("Invalid short hex code. It should have 3 characters.");
  }

  const [r, g, b] = shortHex.split("");

  const fullHex = `#${r.repeat(2)}${g.repeat(2)}${b.repeat(2)}`;

  return fullHex.toUpperCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

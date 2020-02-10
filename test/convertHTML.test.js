const convertHTML = require("../src/convertHTML");

test('convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana', () => {
    expect(convertHTML("Dolce & Gabbana")).toBe('Dolce &amp; Gabbana');
});

test('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos', () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe('Hamburgers &lt; Pizza &lt; Tacos');
});

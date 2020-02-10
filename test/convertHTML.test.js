const convertHTML = require("../src/convertHTML");

test('convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana', () => {
    expect(convertHTML("Dolce & Gabbana")).toBe('Dolce &amp; Gabbana');
});

test('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos', () => {
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe('Hamburgers &lt; Pizza &lt; Tacos');
})
/*
convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return Schindler&apos;s List.
convertHTML("<>") should return &lt;&gt;.
convertHTML("abc") should return abc.
 */
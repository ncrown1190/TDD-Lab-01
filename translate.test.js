const translate = require("./translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    expect(translate("orange")).toEqual("orangeway");
  });
  test("word that starts with a vowel", () => {
    expect(translate("elephant")).toEqual("elephantway");
  });
  test("word that starts with Capital", () => {
    expect(translate("Apple")).toEqual("appleway");
  });
  test("word that starts with consonant", () => {
    expect(translate("Happy")).toEqual("appyhay");
  });
  test("word that stats with two consonants", () => {
    expect(translate("stapple")).toEqual("applestay");
  });
  test("word that stats with three consonants", () => {
    expect(translate("stcapple")).toEqual("applestcay");
  });
  test("word that stats with consonants", () => {
    expect(translate("yellow")).toEqual("ellowyay");
  });
  test("word that stats with consonants", () => {
    expect(translate("Yellow")).toEqual("ellowyay");
  });
  test("word that stats with consonants", () => {
    expect(translate("shha")).toEqual("ashhay");
  });
  test("word that stats with consonants", () => {
    expect(translate("cherrish")).toEqual("errishchay");
  });
});

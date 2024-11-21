const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 45 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });


  it("Handles times when it midday", () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it("Handles time when it's 3:00", () => {
    const timeInWords = convertTimeToWords("3:00");
    expect(timeInWords).toBe("three o'clock");
  });

  it("Handles time when it's 3:15", () => {
    const timeInWords = convertTimeToWords("3:15");
    expect(timeInWords).toBe("quarter past three");
  });

  it("Handles time when it's 3:22", () => {
    const timeInWords = convertTimeToWords("3:22");
    expect(timeInWords).toBe("twenty two past three");
  });
});

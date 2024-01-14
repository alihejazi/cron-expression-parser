import { getValues } from "../src/parser"

test.only("minutes", () => {
    expect(getValues('0', 0)).toEqual([0])
    expect(getValues('0-5', 0)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('45-50', 0)).toEqual([45, 46, 47, 48, 49, 50])
    expect(getValues('*/15', 0)).toEqual([0, 15, 30, 45])
    expect(getValues('59-59', 0)).toEqual([59])
    expect(getValues('24,27,35', 0)).toEqual([24, 27, 35])    

    // error cases
    expect(() => {
        getValues('6-5', 0)
    }).toThrow(Error);

    expect(() => {
        getValues('13-60', 0)
    }).toThrow(Error);

    expect(() => {
        getValues('60-100', 0)
    }).toThrow(Error);

    expect(() => {
        getValues('24-61', 0)
    }).toThrow(Error);

    expect(() => {
        getValues('24,27,35/3', 0)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 0)
    }).toThrow(Error);
});


test.only("hours", () => {
    expect(getValues('0', 1)).toEqual([0])
    expect(getValues('0-5', 1)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', 1)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 1)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', 1)).toEqual([23])
    expect(getValues('16,19,21', 1)).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getValues('6-5', 1)
    }).toThrow(Error);

    expect(() => {
        getValues('13-24', 1)
    }).toThrow(Error);

    expect(() => {
        getValues('24-100', 1)
    }).toThrow(Error);

    expect(() => {
        getValues('23-25', 1)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', 1)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 1)
    }).toThrow(Error);
});


test("daysOfMonth", () => {
    expect(getValues('0', 2)).toEqual([0])
    expect(getValues('0-5', 2)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', 2)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 2)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', 2)).toEqual([59])
    expect(getValues('16,19,21', 2)).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getValues('6-5', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('13-24', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('24-100', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('23-25', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 2)
    }).toThrow(Error);
});


test("months", () => {
    expect(getValues('0', 3)).toEqual([0])
    expect(getValues('0-5', 3)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', 3)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 3)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', 3)).toEqual([59])
    expect(getValues('16,19,21', 3)).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getValues('6-5', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('13-24', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('24-100', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('23-25', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 3)
    }).toThrow(Error);
});


test("daysOfWeek", () => {
    expect(getValues('0', 4)).toEqual([0])
    expect(getValues('0-5', 4)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', 4)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 4)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', 4)).toEqual([59])
    expect(getValues('16,19,21', 4)).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getValues('6-5', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('13-24', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('24-100', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('23-25', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 4)
    }).toThrow(Error);
});
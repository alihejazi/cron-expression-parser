import { getValues } from "../src/parser"

test("minutes", () => {
    // NOTE: valid range for minutes is 0 to 59
    expect(getValues('0', 0)).toEqual([0])
    expect(getValues('0-5', 0)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('45-50', 0)).toEqual([45, 46, 47, 48, 49, 50])
    expect(getValues('*/15', 0)).toEqual([0, 15, 30, 45])
    expect(getValues('59-59', 0)).toEqual([59])
    expect(getValues('24,27,35', 0)).toEqual([24, 27, 35])
    expect(getValues('*', 0)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59
    ])

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


test("hours", () => {
    // NOTE: valid range for hours is 0 to 23
    expect(getValues('0', 1)).toEqual([0])
    expect(getValues('0-5', 1)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', 1)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 1)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', 1)).toEqual([23])
    expect(getValues('16,19,21', 1)).toEqual([16, 19, 21])
    expect(getValues('*', 1)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23
    ])

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
    // NOTE: valid range for daysOfMonth is 1 to 31
    expect(getValues('1', 2)).toEqual([1])
    expect(getValues('1-5', 2)).toEqual([1, 2, 3, 4, 5])
    expect(getValues('10-15', 2)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', 2)).toEqual([5, 10, 15, 20, 25, 30])
    expect(getValues('31-31', 2)).toEqual([31])
    expect(getValues('16,19,21,29,31', 2)).toEqual([16, 19, 21, 29, 31])
    expect(getValues('*', 2)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31
    ])

    // error cases
    expect(() => {
        getValues('28-26', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('13-32', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('32-100', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('29-33', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', 2)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 2)
    }).toThrow(Error);
});


test("months", () => {
    // NOTE: valid range for months is 1 to 12
    expect(getValues('1', 3)).toEqual([1])
    expect(getValues('1-5', 3)).toEqual([1, 2, 3, 4, 5])
    expect(getValues('6-12', 3)).toEqual([6, 7, 8, 9, 10, 11, 12])
    expect(getValues('*/5', 3)).toEqual([5, 10])
    expect(getValues('12-12', 3)).toEqual([12])
    expect(getValues('3,8,9,11', 3)).toEqual([3, 8, 9, 11])
    expect(getValues('*', 3)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ])

    // error cases
    expect(() => {
        getValues('10-9', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('10-13', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('13-100', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('12-13', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('5,11,12/2', 3)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 3)
    }).toThrow(Error);
});


test("daysOfWeek", () => {
    // NOTE: valid range for daysOfWeek is 0 to 6
    expect(getValues('0', 4)).toEqual([0])
    expect(getValues('0-5', 4)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('3-6', 4)).toEqual([3, 4, 5, 6])
    expect(getValues('*/5', 4)).toEqual([0, 5])
    expect(getValues('6-6', 4)).toEqual([6])
    expect(getValues('0,1,4,5,6', 4)).toEqual([0, 1, 4, 5, 6])
    expect(getValues('*', 4)).toEqual([
        0, 1, 2, 3, 4, 5, 6
    ])

    // error cases
    expect(() => {
        getValues('6-5', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('5-7', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('7-100', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('6-7', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('0,2,3/2', 4)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', 4)
    }).toThrow(Error);
});
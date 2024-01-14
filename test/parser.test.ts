import { getValues } from "../src/parser"

test("minutes", () => {
    // NOTE: valid range for minutes is 0 to 59
    const cronSection = 0;
    expect(getValues('0', cronSection)).toEqual([0])
    expect(getValues('0-5', cronSection)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('45-50', cronSection)).toEqual([45, 46, 47, 48, 49, 50])
    expect(getValues('*/15', cronSection)).toEqual([0, 15, 30, 45])
    expect(getValues('59-59', cronSection)).toEqual([59])
    expect(getValues('24,27,35', cronSection)).toEqual([24, 27, 35])
    expect(getValues('*', cronSection)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59
    ])

    // error cases
    expect(() => {
        getValues('6-5', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('13-60', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('60-100', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('24-61', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('24,27,35/3', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', cronSection)
    }).toThrow(Error);
});


test("hours", () => {
    // NOTE: valid range for hours is 0 to 23
    const cronSection = 1;
    expect(getValues('0', cronSection)).toEqual([0])
    expect(getValues('0-5', cronSection)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('10-15', cronSection)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', cronSection)).toEqual([0, 5, 10, 15, 20])
    expect(getValues('23-23', cronSection)).toEqual([23])
    expect(getValues('16,19,21', cronSection)).toEqual([16, 19, 21])
    expect(getValues('*', cronSection)).toEqual([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23
    ])

    // error cases
    expect(() => {
        getValues('6-5', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('13-24', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('24-100', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('23-25', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', cronSection)
    }).toThrow(Error);
});


test("daysOfMonth", () => {
    // NOTE: valid range for daysOfMonth is 1 to 31
    const cronSection = 2;
    expect(getValues('1', cronSection)).toEqual([1])
    expect(getValues('1-5', cronSection)).toEqual([1, 2, 3, 4, 5])
    expect(getValues('10-15', cronSection)).toEqual([10, 11, 12, 13, 14, 15])
    expect(getValues('*/5', cronSection)).toEqual([5, 10, 15, 20, 25, 30])
    expect(getValues('31-31', cronSection)).toEqual([31])
    expect(getValues('16,19,21,29,31', cronSection)).toEqual([16, 19, 21, 29, 31])
    expect(getValues('*', cronSection)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31
    ])

    // error cases
    expect(() => {
        getValues('28-26', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('13-32', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('32-100', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('29-33', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('10,11,15/2', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', cronSection)
    }).toThrow(Error);
});


test("months", () => {
    // NOTE: valid range for months is 1 to 12
    const cronSection = 3;
    expect(getValues('1', cronSection)).toEqual([1])
    expect(getValues('1-5', cronSection)).toEqual([1, 2, 3, 4, 5])
    expect(getValues('6-12', cronSection)).toEqual([6, 7, 8, 9, 10, 11, 12])
    expect(getValues('*/5', cronSection)).toEqual([5, 10])
    expect(getValues('12-12', cronSection)).toEqual([12])
    expect(getValues('3,8,9,11', cronSection)).toEqual([3, 8, 9, 11])
    expect(getValues('*', cronSection)).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ])

    // error cases
    expect(() => {
        getValues('10-9', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('10-13', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('13-100', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('12-13', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('5,11,12/2', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', cronSection)
    }).toThrow(Error);
});


test("daysOfWeek", () => {
    // NOTE: valid range for daysOfWeek is 0 to 6
    const cronSection = 4;
    expect(getValues('0', cronSection)).toEqual([0])
    expect(getValues('0-5', cronSection)).toEqual([0, 1, 2, 3, 4, 5])
    expect(getValues('3-6', cronSection)).toEqual([3, 4, 5, 6])
    expect(getValues('*/5', cronSection)).toEqual([0, 5])
    expect(getValues('6-6', cronSection)).toEqual([6])
    expect(getValues('0,1,4,5,6', cronSection)).toEqual([0, 1, 4, 5, 6])
    expect(getValues('*', cronSection)).toEqual([
        0, 1, 2, 3, 4, 5, 6
    ])

    // error cases
    expect(() => {
        getValues('6-5', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('5-7', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('7-100', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('6-7', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('0,2,3/2', cronSection)
    }).toThrow(Error);

    expect(() => {
        getValues('ABC', cronSection)
    }).toThrow(Error);
});
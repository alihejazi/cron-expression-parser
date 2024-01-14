import { getHours, getMinutes, getDaysOfMonth, getMonths, getDaysOfWeek } from "../src/parser"

test.only("minutes", () => {
    expect(getMinutes('0')).toEqual([0])
    expect(getMinutes('0-5')).toEqual([0, 1, 2, 3, 4, 5])
    expect(getMinutes('45-50')).toEqual([45, 46, 47, 48, 49, 50])
    expect(getMinutes('*/15')).toEqual([0, 15, 30, 45])
    expect(getMinutes('59-59')).toEqual([59])
    expect(getMinutes('24,27,35')).toEqual([24, 27, 35])    

    // error cases
    expect(() => {
        getMinutes('6-5')
    }).toThrow(Error);

    expect(() => {
        getMinutes('13-60')
    }).toThrow(Error);

    expect(() => {
        getMinutes('60-100')
    }).toThrow(Error);

    expect(() => {
        getMinutes('24-61')
    }).toThrow(Error);

    expect(() => {
        getMinutes('24,27,35/3')
    }).toThrow(Error);

    expect(() => {
        getMinutes('ABC')
    }).toThrow(Error);
});


test("hours", () => {
    expect(getHours('0')).toEqual([0])
    expect(getHours('0-5')).toEqual([0, 1, 2, 3, 4, 5])
    expect(getHours('10-15')).toEqual([10, 11, 12, 13, 14, 15])
    expect(getHours('*/5')).toEqual([0, 5, 10, 15, 20])
    expect(getHours('23-23')).toEqual([59])
    expect(getHours('16,19,21')).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getHours('6-5')
    }).toThrow(Error);

    expect(() => {
        getHours('13-24')
    }).toThrow(Error);

    expect(() => {
        getHours('24-100')
    }).toThrow(Error);

    expect(() => {
        getHours('23-25')
    }).toThrow(Error);

    expect(() => {
        getHours('10,11,15/2')
    }).toThrow(Error);

    expect(() => {
        getHours('ABC')
    }).toThrow(Error);
});


test("daysOfMonth", () => {
    expect(getDaysOfMonth('0')).toEqual([0])
    expect(getDaysOfMonth('0-5')).toEqual([0, 1, 2, 3, 4, 5])
    expect(getDaysOfMonth('10-15')).toEqual([10, 11, 12, 13, 14, 15])
    expect(getDaysOfMonth('*/5')).toEqual([0, 5, 10, 15, 20])
    expect(getDaysOfMonth('23-23')).toEqual([59])
    expect(getDaysOfMonth('16,19,21')).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getDaysOfMonth('6-5')
    }).toThrow(Error);

    expect(() => {
        getDaysOfMonth('13-24')
    }).toThrow(Error);

    expect(() => {
        getDaysOfMonth('24-100')
    }).toThrow(Error);

    expect(() => {
        getDaysOfMonth('23-25')
    }).toThrow(Error);

    expect(() => {
        getDaysOfMonth('10,11,15/2')
    }).toThrow(Error);

    expect(() => {
        getDaysOfMonth('ABC')
    }).toThrow(Error);
});


test("months", () => {
    expect(getMonths('0')).toEqual([0])
    expect(getMonths('0-5')).toEqual([0, 1, 2, 3, 4, 5])
    expect(getMonths('10-15')).toEqual([10, 11, 12, 13, 14, 15])
    expect(getMonths('*/5')).toEqual([0, 5, 10, 15, 20])
    expect(getMonths('23-23')).toEqual([59])
    expect(getMonths('16,19,21')).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getMonths('6-5')
    }).toThrow(Error);

    expect(() => {
        getMonths('13-24')
    }).toThrow(Error);

    expect(() => {
        getMonths('24-100')
    }).toThrow(Error);

    expect(() => {
        getMonths('23-25')
    }).toThrow(Error);

    expect(() => {
        getMonths('10,11,15/2')
    }).toThrow(Error);

    expect(() => {
        getMonths('ABC')
    }).toThrow(Error);
});


test("daysOfWeek", () => {
    expect(getDaysOfWeek('0')).toEqual([0])
    expect(getDaysOfWeek('0-5')).toEqual([0, 1, 2, 3, 4, 5])
    expect(getDaysOfWeek('10-15')).toEqual([10, 11, 12, 13, 14, 15])
    expect(getDaysOfWeek('*/5')).toEqual([0, 5, 10, 15, 20])
    expect(getDaysOfWeek('23-23')).toEqual([59])
    expect(getDaysOfWeek('16,19,21')).toEqual([16, 19, 21])    

    // error cases
    expect(() => {
        getDaysOfWeek('6-5')
    }).toThrow(Error);

    expect(() => {
        getDaysOfWeek('13-24')
    }).toThrow(Error);

    expect(() => {
        getDaysOfWeek('24-100')
    }).toThrow(Error);

    expect(() => {
        getDaysOfWeek('23-25')
    }).toThrow(Error);

    expect(() => {
        getDaysOfWeek('10,11,15/2')
    }).toThrow(Error);

    expect(() => {
        getDaysOfWeek('ABC')
    }).toThrow(Error);
});
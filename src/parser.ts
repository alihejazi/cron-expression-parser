const isAny = (input: string) => input === '*';
const isList = (input: string) => input.includes(',');
const isRange = (input: string) => input.includes('-');
const isStep = (input: string) => input.includes('/');
const isNumeric = (num: any) => (typeof (num) === 'number' || typeof (num) === "string" && num.trim() !== '') && !isNaN(num as number);

const createArray = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
type RangeType = 'minutes' | 'hours' | 'daysOfMonth' | 'months' | 'daysOfWeek';

const getMinMaxValues = (type: RangeType) => {
    let min: number;
    let max: number;

    switch (type) {
        case 'minutes':
            min = 0;
            max = 59;
            break;
        case 'hours':
            min = 0;
            max = 23;
            break;
        case 'daysOfMonth':
            min = 1;
            max = 31;
            break;
        case 'months':
            min = 1;
            max = 12;
            break;
        case 'daysOfWeek':
            min = 0;
            max = 6;
            break;
    }

    return [min, max];
}

const generateRangeValues = (range: string, type: RangeType) => {
    const [minStr, maxStr] = range.split('-')
    const min = Number(minStr.trim());
    const max = Number(maxStr.trim());

    const [minLimit, maxLimit] = getMinMaxValues(type)

    if (min < minLimit || min > maxLimit || max < minLimit || max > maxLimit || max < min) {
        throw new Error(`Invalid ${type} range! ${type} ranges must be between ${minLimit} and ${maxLimit} inclusive,
        and the right side must not be less than the left side!`)
    }

    return createArray(min, max)
}


export const getMinutes = (input: string): number[] => {
    if (isAny(input)) {
        const [min, max] = getMinMaxValues('minutes');
        return createArray(min, max)
    }

    if (isStep(input)) {
        const [left, right] = input.split('/');

        if (isAny(left)) {
            return createArray(0, 59).filter(val => val % Number(right) === 0)
        }

        else if (isRange(left)) {
            return generateRangeValues(left, 'minutes').filter(val => val % Number(right) === 0)
        }

        else {
            throw new Error('Invalid minutes syntax! Steps can only be used with * or with ranges. For example: */15 or 5-30/5')
        }
    }

    if (isList(input)) {
        return input.split(',').map(el => Number(el))
    }

    if (isRange(input)) {
        return generateRangeValues(input, 'minutes')
    }

    if (isNumeric(input)) {
        return [Number(input)];
    }

    throw new Error('Invalid minutes syntnax!')
}

export const getHours = (input: string) => {
    if (isAny(input)) {
        const [min, max] = getMinMaxValues('hours');
        return createArray(min, max)
    }
}

export const getDaysOfMonth = (input: string) => {
    const [min, max] = getMinMaxValues('daysOfMonth');
    return createArray(min, max)
}

export const getMonths = (input: string) => {
    const [min, max] = getMinMaxValues('months');
    return createArray(min, max)
}

export const getDaysOfWeek = (input: string) => {
    const [min, max] = getMinMaxValues('daysOfWeek');
    return createArray(min, max)
}

export const getValues = (input: string, index: number) => {
    switch (index) {
        case 0:
            return getMinutes(input)
        case 1:
            return getHours(input)
        case 2:
            return getDaysOfMonth(input)
        case 3:
            return getMonths(input)
        case 4:
            return getDaysOfWeek(input)
        default:
            throw new Error('Invalid index passed.')
    }
}
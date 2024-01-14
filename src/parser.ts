const isAny = (input: string) => input === '*';
const isList = (input: string) => input.includes(',');
const isRange = (input: string) => input.includes('-');
const isStep = (input: string) => input.includes('/');
const isNumeric = (num: any) => (
    typeof (num) === 'number' ||
    typeof (num) === "string" &&
    num.trim() !== ''
) && !isNaN(num as number);

const createArray = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

const getMinMaxValues = (index: number) => {
    let min: number;
    let max: number;

    switch (index) {
        // minutes
        case 0:
            min = 0;
            max = 59;
            break;
        // hours
        case 1:
            min = 0;
            max = 23;
            break;
        // daysOfMonth
        case 2:
            min = 1;
            max = 31;
            break;
        // months
        case 3:
            min = 1;
            max = 12;
            break;
        // daysOfWeek
        case 4:
            min = 0;
            max = 6;
            break;
        default:
            throw new Error('Invalid index!')
    }

    return [min, max];
}

const generateRangeValues = (range: string, index: number) => {
    const [minStr, maxStr] = range.split('-')
    const min = Number(minStr.trim());
    const max = Number(maxStr.trim());

    const [minLimit, maxLimit] = getMinMaxValues(index)

    if (min < minLimit || min > maxLimit || max < minLimit || max > maxLimit || max < min) {
        throw new Error(`Invalid range ${range}! Range must be between ${minLimit} and ${maxLimit} inclusive,
        and the right side must not be less than the left side!`)
    }

    return createArray(min, max)
}

export const getValues = (input: string, index: number): number[] => {
    const [min, max] = getMinMaxValues(index);
    if (isAny(input)) {
        return createArray(min, max)
    }

    if (isStep(input)) {
        const [left, right] = input.split('/');

        if (isAny(left)) {
            return createArray(min, max).filter(val => val % Number(right) === 0)
        }

        else if (isRange(left)) {
            return generateRangeValues(left, index).filter(val => val % Number(right) === 0)
        }

        else {
            throw new Error('Invalid syntax! Steps can only be used with * or with ranges.')
        }
    }

    if (isList(input)) {
        return input.split(',').map(el => Number(el))
    }

    if (isRange(input)) {
        return generateRangeValues(input, index)
    }

    if (isNumeric(input)) {
        return [Number(input)];
    }

    throw new Error('Invalid syntnax!')
}
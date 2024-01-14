import { getValues } from "./parser"

const main = () => {
    const args = process.argv.slice(2);
    const cronExpression = args[0]

    if (!cronExpression || cronExpression.split(' ').length !== 6) {
        console.error(
            'Please ensure you pass a cron expression and a command. For example:\n' +
            'node cron-expression-parser.ts "*/15 0 1,15 * 1-5 /usr/bin/find"\n\n'
        );
        return;
    }

    const splitted = cronExpression.split(' ');
    const command = splitted.pop()

    const values = splitted.map((cronExpressionSection, index) => {
        return getValues(cronExpressionSection, index).join(' ')
    })

    console.log('minute        ', values[0])
    console.log('hour          ', values[1])
    console.log('day of month  ', values[2])
    console.log('month         ', values[3])
    console.log('day of week   ', values[4])
    console.log('command       ', command)
}


main();
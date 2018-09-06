const qList = [
    {
        instructions:'Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.',
        code: 'blah',
        tests: ['Test.expect(total == 14878)'],
        suite: 'loops'
    },
    {
        instructions:'loop stuff',
        code: 'blah1',
        tests: 'blah1',
        suite: 'loops'
    },
    {
        instructions:' cond stuff',
        code: 'blah2',
        tests: 'blah2',
        suite: 'conditionals'
    },
    {
        instructions:'more stuff',
        code: 'blah3',
        tests: 'blah4',
        suite: 'conditionals'
    },
    {
        instructions:'Create a function that takes in two numbers and returns the sum',
        code: 'blah3',
        tests: 
        [
            `Test.assertEquals(sum(1,2), 3)`,
            `Test.assertEquals(sum(0,-22), -22)`,
            `Test.assertEquals(sum(-3,6), 3)`
        ],
        suite: 'conditionals'
    }
];

export default qList;
const qList = [
    {
        instructions:
`Create a function called isZero(). The function will take in a number and return true if the number is zero, otherwise it will return false.

Sample:
input: 0
output: true

input: 2
output: false
`,
    tests: [
        'Test.assertDeepEquals(isZero(1), false)',
        'Test.assertDeepEquals(isZero(0), true)',
        'Test.assertDeepEquals(isZero(-4), false)',
    ],
        suite: 'practice1'
    },
    {
        instructions:
`Create a function called getCircumference(). The function will take in a number representing the radius of a circle and return a number representing the circumference of the circle. 
The equation for determining the circumference of a circle utilizes the constant PI.
Assume that PI equals 3.14.

The equation for finding the circumference of a circle is PI multiplied by double the radius. 

Sample:
input: 1
output: 6.28

input: 2
output: 12.56
`,
    tests: [
        'Test.assertDeepEquals(getCircumference(1), 6.28)',
        'Test.assertDeepEquals(getCircumference(2), 12.56)',
        'Test.assertDeepEquals(getCircumference(4), 25.12)',
    ],
        suite: 'practice1'
    },
    {
        instructions:
`Create a function called difference() that takes an array of numbers as a parameter and returns the result of all the numbers in the array subtracted from 100. 

Sample:
input: [1, 2, 3, 4]
output: 90

input: [100, 2, 5] 
output: -7
`,
    tests: [
        'Test.assertDeepEquals(difference([1, 2, 3, 4]), 90)',
        'Test.assertDeepEquals(difference([100, 2, 5]), -7)', 
        'Test.assertDeepEquals(difference([-5,-2]), 107)' 
      ],
        suite: 'practice1'
    },
    {
        instructions:
`Create a function called isIncluded() that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
Return true if the element is in the array or false otherwise. 

Sample:
input: [1, 2, 3, 4] 3
output: true

input: [1, 2, 3, 4] 7
output: false

input: ['blue', 'green', 'red'] 'blue'
output: true
`,
    tests: [
        'Test.assertDeepEquals(isIncluded([1, 2, 3, 4], 3), true)',
        'Test.assertDeepEquals(isIncluded([1, -2, 3, 4], -7), false)',
        'Test.assertDeepEquals(isIncluded([\'weird\', \'science\',\'panopto\'], \'panopto\'), true)',
    ],
        suite: 'practice1'
    },
    {
        instructions:
`Create a function called isValidPassword() that takes a string as a parameter and determines if it is a valid password with the following constraints: 

1. It must be at least 8 characters long
2. It must contain at least 1 capital letter
3. It must contain at least 1 lower case letter
4. It must contain at least 1 number
`,
    tests: [
        'Test.assertDeepEquals(isValidPassword(\'GoogleyBob99\'), true)',
        'Test.assertDeepEquals(isValidPassword(\'googleybob99\'), false)',
        'Test.assertDeepEquals(isValidPassword(\'GoogleyBob\'), false)',
        'Test.assertDeepEquals(isValidPassword(\'hjuhi76675HHgjhyjf8\'), true)',
        'Test.assertDeepEquals(isValidPassword(\'hj5Hgf8\'), false)'
    ],
        suite: 'practice1'
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.expect(total == 14878)"],
        suite: "loops"
    },
    {
        instructions:"Create a function called incrementer() that takes in an array and increments every element in the array by 1 and returns the array.",
        tests: [
            "Test.assertDeepEquals(incrementer([1, 1, 1]), [2, 2, 2])",
            "Test.assertDeepEquals(incrementer([1, 2, 3]), [2, 3, 4])",
            "Test.assertDeepEquals(incrementer([2, 3, 4]), [3, 4, 5])"
    ],
        suite: "loops"
    },
    {
        instructions:"Create a function called summer() that takes in an array of numbers and outputs the sum.",
        tests: [
            "Test.assertEquals(summer([1, 1, 1]), 3)",
            "Test.assertEquals(summer([1, 2, 3]), 6)",
            "Test.assertEquals(summer([2, 3, 4]), 9)"
    ],        
        suite: "loops"
    },
    {
        instructions:"Create a function called concatenator() that takes in an array of strings and concatenates them together with spaces between them. Return this string. Use only single quotes for any strings you write.",
        tests: [
            "Test.assertEquals(concatenator(['hey', 'you', 'guys']), 'hey you guys')",
            "Test.assertEquals(concatenator(['a', 'b', 'c']), 'a b c')",
            "Test.assertEquals(concatenator(['mary had', 'a little', 'bit of javascript']), 'mary had a little bit of javascript')"
    ],            
        suite: "loops"
    },
    {
        instructions:"Create a function called dedooper() that takes in an array of numbers and returns an array without any duplicates.",
        tests: [
            "Test.assertDeepEquals(dedooper([1, 1, 1]), [1])",
            "Test.assertDeepEquals(dedooper([1, 2, 3]), [1, 2, 3])",
            "Test.assertDeepEquals(dedooper([2, 3, 2]), [2, 3])"
    ],        
        suite: "loops"
    },
    {
        instructions:"Write a function called max() that takes in two numbers and returns the larger of the two.",
        tests: [
            "Test.assertEquals(max(2,3), 3)",
            "Test.assertEquals(max(2,1), 2)",
            "Test.assertEquals(max(2,-3), 2)"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called min() that takes in two numbers and returns the smaller of the two.",
        tests: [
            "Test.assertEquals(min(2,3), 2)",
            "Test.assertEquals(min(2,1), 1)",
            "Test.assertEquals(min(2,-3), -3)"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Create a global variable called num and set it equal to 9. Create a global variable called a that is equal to 1. Write a conditional that sets a equal to 5 if num is greater than a.",
        tests: [
            "Test.expect(a == 5)"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called dayFinder() that takes in a number and returns the corresponding day of the week. Example: If the input is 1, the output is Monday. If the input is 2, the output is Tuesday. Notice that the day of the week is Capitalized. Use only single quotes for any strings you write.",
        tests: [
            "Test.assertEquals(dayFinder(1), 'Monday')",
            "Test.assertEquals(dayFinder(2), 'Tuesday')",
            "Test.assertEquals(dayFinder(7), 'Sunday')"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called messageGenerator() that takes in a boolean and returns the string 'success' if the boolean is true and 'error' otherwise. Use only single quotes for any strings you write.",
        tests: [
            "Test.assertEquals(messageGenerator(true), 'success')",
            "Test.assertEquals(messageGenerator(false), 'error')"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.assertEquals(sum(1,2), 3)"],
        suite: "functions"
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.expect(total == 14878)"],
        suite: "functions"
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.expect(total == 14878)"],
        suite: "functions"
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.expect(total == 14878)"],
        suite: "functions"
    },
    {
        instructions:"Create a loop that sums the number from 1 to 172, inclusively. Save the sum in a global variable called total.",
        tests: ["Test.expect(total == 14878)"],
        suite: "functions"
    } 
];

export default qList;
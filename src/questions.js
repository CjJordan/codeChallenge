const qList = [
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
        instructions:"Create a function called concatenator() that takes in an array of strings and concatenates them together with spaces between them. Return this string.",
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
        tests: ["Test.expect(total == 14878)"],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called min() that takes in two numbers and returns the smaller of the two.",
        tests: ["Test.expect(total == 14878)"],
        suite: "conditionals"
    },
    {
        instructions:"Create a global variable called num and set it equal to 9. Create a global variable called a that is equal to 1. Write a conditional that sets a equal to 5 if num is greater than a.",
        tests: ["Test.expect(a == 5)"],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called dayFinder() that takes in a number and returns the corresponding day of the week. Example: If the input is 1, the output is Monday. If the input is 2, the output is Tuesday. Notice that the day of the week is Capitalized.",
        tests: [
            "Test.assertEquals(dayFinder(1), 'Monday')",
            "Test.assertEquals(dayFinder(2), 'Tuesday')",
            "Test.assertEquals(dayFinder(7), 'Sunday')"
    ],
        suite: "conditionals"
    },
    {
        instructions:"Write a function called messageGenerator() that takes in a boolean and returns the string 'success' if the boolean is true and 'error' otherwise.",
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
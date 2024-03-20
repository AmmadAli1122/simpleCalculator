import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: "Enter First Number:\n", type: "number", name: "num1" },
    { message: "Enter Second Number:\n", type: "number", name: "num2" },
    {
        message: "Which Operation Do You Want To Perform..?\n",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation"]
    },
]);
if (ans.operator === "Addition") {
    console.log(`Your Answer is:${ans.num1 + ans.num2}`);
}
else if (ans.operator === "Subtraction") {
    console.log(`Your Answer is:${ans.num1 - ans.num2}`);
}
else if (ans.operator === "Multiplication") {
    console.log(`Your Answer is:${ans.num1 * ans.num2}`);
}
else if (ans.operator === "Division") {
    console.log(`Your Answer is:${ans.num1 / ans.num2}`);
}
else if (ans.operator === "Exponentiation") {
    console.log(`Your Answer is:${ans.num1 ** ans.num2}`);
}
else {
    console.log("Select Valid Choice..!");
}

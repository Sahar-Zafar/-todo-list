#! /usr/bin/env node
import inquirer from "inquirer";
let toDoList = [];
let whileCondition = true;
while (whileCondition === true) {
    let option = await inquirer.prompt([
        {
            type: "list",
            name: "user_option",
            message: "select an option",
            choices: ["Add", "Remove"],
        },
    ]);
    if (option.user_option === "Add") {
        let userAns = await inquirer.prompt([
            {
                type: "input",
                name: "user_answer",
                message: "Please write anything you want to add in your task list:",
            },
        ]);
        if (userAns.user_answer !== " ") {
            toDoList.push(userAns.user_answer);
            console.log(toDoList);
        }
        else {
            console.log("Please add something in the task list:");
        }
    }
    else if (option.user_option === "Remove") {
        let removeTask = await inquirer.prompt([
            {
                type: "list",
                name: "remove_item",
                message: "Do you want to remove anything? Please select an option below: ",
                choices: toDoList,
            },
        ]);
        let removeItem = toDoList.indexOf(removeTask.remove_item);
        if (removeItem >= 0) {
            toDoList.splice(removeItem, 1);
            console.log("You removed : ", removeTask.remove_item);
            console.log("Your tasks/items are:", toDoList);
        }
    }
}

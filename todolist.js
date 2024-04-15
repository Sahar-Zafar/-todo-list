#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let toDoList = [];
let whileCondition = true;
while (whileCondition === true) {
    let option = await inquirer_1.default.prompt([
        {
            type: "list",
            name: "user_option",
            message: "select an option",
            choices: ["Add", "Remove"],
        },
    ]);
    if (option.user_option === "Add") {
        let userAns = await inquirer_1.default.prompt([
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
        let removeTask = await inquirer_1.default.prompt([
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
            console.log("Your final list is:", toDoList);
        }
    }
    let user_Ans = await inquirer_1.default.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue?",
            default: true
        }]);
    if (user_Ans.selection === false) {
        whileCondition = false;
    }
}

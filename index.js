import inquirer from "inquirer";
import * as fs from "fs";

console.log("test");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is your name?",
			name: "userName"
		},
		{
			type: "checkbox",
			message: "What languages do you know?",
			name: "stack",
			choices: ["HTML", "CSS", "JavaScript", "MySQL"]
		},
		{
			type: "list",
			message: "What is your preferred method of communication?",
			name: "contact",
			choices: ["email", "phone", "telekinesis"]
		}
	])
	.then((data) => {
		const filename = `${data.userName.toLowerCase().split(" ").join("")}.json`;

		// WHAT DOES THE REPLACER (NULL) DO?
		fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
			err ? console.log(err) : console.log("Success!")
		);
	});

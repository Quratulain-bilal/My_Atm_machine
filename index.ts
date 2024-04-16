#! /usr/bin/env node

import inquirer from "inquirer";


let myPin = 12345;
let myBalance =10000;


const pinanwer = await inquirer.prompt(
    {name:"pin",
    message:"Enter your pin",
    type:"number",
}
);
if(pinanwer.pin === myPin){
    console.log("your pin is correct");

    let operrationAnswer = await inquirer.prompt([
        {
            name :"operations",
            message :"please select option",
            type:"list",
            choices:["withdraw","fast cash","check balance",]
        }
    ]);
    if(operrationAnswer.operations === "withdraw"){
        let amountAns = await inquirer.prompt([

            {name:"amount",
                messsage:"enter your amount",
                type:"number",
            }
        ])
        if(amountAns.amount <= myBalance){
            let Balance = myBalance -amountAns.amount;
            console.log(`your remaining balance is ${Balance}`);
        }
        else{
            console.log(`you have insufficient balance`);
        }
    }
    else if(operrationAnswer.operations === "fast cash"){
        let fastcashAns = await inquirer.prompt([
            {name:"amount",
                mesage:"enter your amount",
                type:"list",
                choices:["1000","3000","4000","60000"]
            }
        ]);
        if(fastcashAns.amount <= myBalance){
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`the remaining balnce is ${balance2}`);
        }
        else {
            console.log(`you have insufficient amount`);
        }
    }
    else if (operrationAnswer.operations === "check balance"){
        console.log(myBalance);
    }
    }
else{
    console.log("your pin isin correct");
}
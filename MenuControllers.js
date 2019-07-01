const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get date",
          "Remind me",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }
  main(){
    console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Get date":
           this.getDate();
           break;
         case "Remind me":
          this.remindMe();
          break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }
  clear(){
    console.log("\x1Bc");
  }
  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }
  getDate(){
    this.clear();
    var date = new Date();
    console.log('The date is: ' + date);
    this.main();
  }
  remindMe(){
    this.clear();
    console.log("Learning is a life-long pursuit");
    this.main();
  }
  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
  getContactCount(){
    return this.contacts.length;
  }
}
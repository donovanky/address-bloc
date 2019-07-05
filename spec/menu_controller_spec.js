const MenuController = require("../controllers/MenuController");
// #1
 describe("MenuController", () => {
   beforeEach(() => {
     this.menu = new MenuController();
   });
<<<<<<< HEAD
   describe("#remindMe()", () => {
     it("should return 'Learning is a life-long pursuit'", () => {
       expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");

=======
   describe("#getContactCount()", () => {

// #2
     it("should return 0 when no contacts are in the book", () => {
       expect(menu.getContactCount()).toBe(0);
     });
     it("should return 1 when there is exactly one contact in the book", () => {
       this.menu.contacts.push("Bob");
       expect(menu.getContactCount()).toBe(1)
     });
     describe("#remindMe()", () => {
         it("should return 'Learning is a life-long pursuit'", () => {
           expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
     });
>>>>>>> 7c11d37b4ed168dcb34866075c28f1111b3d4bb9
   });
 });

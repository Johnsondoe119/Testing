describe("to-do app", () => {
  let TODO_ITEM_ONE = "Make every second count";
  let TODO_ITEM_TWO = "Invest in yourself";
  let TODO_ITEM_THREE = "Learn Cypress";
  beforeEach(() => {
    cy.visit("http://localhost:8888/#/");
  });
  //this checks if it can display items
  it("should display the todo list", () => {
    cy.get(".new-todo").type(TODO_ITEM_ONE).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_TWO).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_THREE).type("{enter}");
  });
  //this checks if we can add new items
  it("should add a new todo item", () => {
    cy.get(".new-todo").type(TODO_ITEM_ONE).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_TWO).type("{enter}");
    cy.get(".new-todo").type(TODO_ITEM_THREE).type("{enter}");

    cy.get(".todo-list li").eq(0).should("contain", TODO_ITEM_ONE);
    cy.get(".todo-list li").eq(1).should("contain", TODO_ITEM_TWO);
    cy.get(".todo-list li").eq(2).should("contain", TODO_ITEM_THREE);
  });
  //testing to see if we are able to mark items as completed
  it("should mark items as completed", () => {
    cy.createTodo(TODO_ITEM_ONE).as("firstItem");
    cy.createTodo(TODO_ITEM_TWO).as("secondItem");
    cy.createTodo(TODO_ITEM_THREE).as("thirdItem");

    cy.get("@thirdItem").find(".toggle").check();
    cy.get("@thirdItem").should("have.class", "completed");
  });
  // testing to see if Learn Cypress has been checked
  it("Testing 'Learn Cypress' has been marked completed", function () {
    cy.createTodo(TODO_ITEM_ONE).as("firstItem");
    cy.createTodo(TODO_ITEM_TWO).as("secondItem");
    cy.createTodo(TODO_ITEM_THREE).as("thirdItem");

    cy.get("@thirdItem").find(".toggle").check();
    cy.get("@thirdItem").should("have.class", "completed");
  });
});

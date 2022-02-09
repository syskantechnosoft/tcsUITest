describe('test_name', function() {

 it('what_it_does', function() {

    cy.visit('https://example.cypress.io/todo')
 
    cy.viewport(1536, 722)
 
    cy.visit('https://example.cypress.io/todo')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('write unit test case')
 
    cy.get('.main > .todo-list > li:nth-child(2) > .view > label').click()
 
    cy.get('.main > .todo-list > li:nth-child(2) > .view > label').click()
 
    cy.get('.main > .todo-list > li:nth-child(2) > .view > label').click()
 
    cy.get('.todoapp > .main > .todo-list > .editing > .edit').type('Walk the dog today')
 
    cy.get('.main > .todo-list > li:nth-child(1) > .view > .toggle').click()
 
    cy.get('.main > .todo-list > .completed > .view > .toggle').check('on')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .footer > .todo-button').click()
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('complete post assessment tomorrow')
 
 })

})

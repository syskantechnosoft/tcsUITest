describe('test_name', function() {

 it('what_it_does', function() {

    cy.visit('https://example.cypress.io/todo')
 
    cy.viewport(1536, 722)
 
    cy.visit('https://example.cypress.io/todo')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('Write junit test case')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('write jasmine test case')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('complete pre assesment')
 
    cy.get('.main > .todo-list > li:nth-child(4) > .view > label').click()
 
    cy.get('.main > .todo-list > li:nth-child(4) > .view > label').click()
 
    cy.get('.todoapp > .main > .todo-list > .editing > .edit').click()
 
    cy.get('.todoapp > .main > .todo-list > .editing > .edit').type('complete pre assesment today')
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').click()
 
    cy.get('body > .todoapp-wrapper > .todoapp > .header > .new-todo').type('complete post assessment tomorrow')
 
    cy.get('.main > .todo-list > li:nth-child(3) > .view > .destroy').click()
 
 })

})

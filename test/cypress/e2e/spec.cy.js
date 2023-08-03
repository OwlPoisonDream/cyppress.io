describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/') //Переход на сайт
    cy.get('[name="title"]').type("Первое дело") //Ввод первых данных
    cy.get('[type="submit"]').click()
    cy.get('[name="title"]').type("Второе дело") //Ввод вторых данных
    cy.get('[type="submit"]').click()
    cy.get('[name="title"]').type("Третье дело") //Ввод третьих данных
    cy.get('[type="submit"]').click()
    cy.get('[class="TodoItem_item__iFWQW"]') //Считаю элементы
    cy.get('[type="checkbox"]') //Подтвреждаю первый чекбокс
      .first()
      .check()
    cy.get('[class="TodoItem_item__iFWQW"]') //Смотрю наличие перечеркнутого текста
      .get('li:first span')
      .should('have.css', 'text-decoration-line', 'line-through')
    cy.get('[type="button"]:first').click() //Удаляю первый элемент
    cy.get('[class="TodoItem_item__iFWQW"]') //Ищу данные удалённого элемента
      .get('li:first span')
      .contains('Первое дело')
  })
})

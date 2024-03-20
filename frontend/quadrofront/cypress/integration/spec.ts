import { groupBy } from "cypress/types/lodash"

describe('Teste inicial', () => {
  it('Visita a página inicial', () => {
    cy.visit('/')
    cy.contains('Quadro de avisos')
    cy.get('.titulo').contains('Atenção para o prazo de programação de férias!!!')
    cy.get('.subtitulo').contains('02/09/2021 10:10:05')
    cy.get('.subtitulo').contains('10:11:11')

    // Clicar na primeira notícia

    cy.get('.titulo').first().click()
    cy.get('#corponoticia').contains('Se você está pensando em tirar férias no próximo mês (Outubro) é importante ficar atento e solicitar')
    cy.contains('Voltar').click()

    // Clicar na segunda notícia

    cy.get('.titulo').last().click()
    cy.get('#corponoticia').contains('O horário do refeitório mudou desde Agosto. Procure o seu Supervisor')
    cy.contains('Voltar').click()

  })
})

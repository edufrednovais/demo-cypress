/// <reference types="cypress" />

describe('Testes End-to-End da Micro-Livraria', () => {

  // Executa antes de cada teste
  beforeEach(() => {
    // Visita o site da livraria (ajuste a porta se necessário)
    cy.visit('http://localhost:5000')
  })

  it('Deve exibir o livro "Design Patterns"', () => {
    // Verifica se o livro "Design Patterns" aparece na página
    cy.contains('Design Patterns').should('be.visible')
  })

  it('Deve calcular o frete corretamente para um CEP válido', () => {
    // Seleciona o campo de CEP e insere um valor
    cy.get('input[placeholder="Digite o CEP"]').type('30130-010')

    // Clica no botão de calcular frete
    cy.contains('Calcular Frete').click()

    // Verifica se o pop-up aparece com o texto esperado
    cy.contains('O frete para o CEP 30130-010 é R$').should('be.visible')

    // Fecha o pop-up (caso tenha botão “OK” ou “Fechar”)
    cy.contains('OK').click({ force: true })
  })

  it('Deve simular a compra de um livro com sucesso', () => {
    // Garante que o livro "Design Patterns" está visível
    cy.contains('Design Patterns').should('be.visible')

    // Clica no botão “Comprar” do livro (ajuste o seletor conforme o HTML)
    cy.contains('Design Patterns').parent().contains('Comprar').click()

    // Verifica se aparece a mensagem de confirmação de compra
    cy.contains('Sua compra foi realizada com sucesso').should('be.visible')

    // Fecha o pop-up de confirmação
    cy.contains('Fechar').click({ force: true })
  })
})

/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.intercept('GET', '/path/to/api', {
            statusCode: 200,
            body: { key: 'value' } // Resposta simulada
          }).as('apiResponse');
        cy.visit('https://agenda-contatos-react.vercel.app/').wait(2000)
    })

    
    
    it('Deve preencher o formulário e adicionar o contato', () => {
        cy.get('.sc-gLDzan input[type="text"]').type('Nome exemplo')
        cy.get('.sc-gLDzan input[type="email"]').type('exemplo@exemplo.com')
        cy.get('.sc-gLDzan input[type="tel"]').type('49999999999')
        cy.get('.adicionar').click()
    })
    
    it('Deve editar os dados do contato', () => {
        cy.get('.sc-eDDNvR li').filter(':contains("Nome exemplo")').parent().parent().parent().find('.edit').click()
        cy.get('input[type="text"]').wait(3000).clear().wait(2000).type('exemploEDITADO')
        cy.get('input[type="email"]').wait(3000).clear().wait(2000).type('exemplo@EDITADO.com')
        cy.get('input[type="tel"]').wait(3000).clear().wait(2000).type('111111111111')
        cy.get('.alterar').click().wait(5000)            
    })
    it('Deve apagar os itens', () => {
        cy.get('.delete').click({ multiple: true }).wait(2000)
    })


})
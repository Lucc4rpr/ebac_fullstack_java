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

        cy.get('.sc-eDDNvR li').contains('Nome exemplo').should('exist')
    })
    
    it('Deve editar os dados do contato', () => {
        cy.get('.sc-eDDNvR li').filter(':contains("Nome exemplo")').parent().parent().parent().find('.edit').click()
        cy.get('input[type="text"]').clear().type('exemploEDITADO')
        cy.get('input[type="email"]').clear().type('exemplo@EDITADO.com')
        cy.get('input[type="tel"]').clear().type('111111111111')
        cy.get('.alterar').click()         

        cy.get('.sc-eDDNvR li').contains('exemploEDITADO').should('exist')
    })
    it('Deve apagar os itens', () => {
        cy.get('.delete').click({ multiple: true })

        cy.get('.sc-eDDNvR li').should('not.exist')
    })

})
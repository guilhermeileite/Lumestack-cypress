class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors

    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.get('body').should('contain', 'Se ha actualizado correctamente') 
    }

    
}


export default MenuPage
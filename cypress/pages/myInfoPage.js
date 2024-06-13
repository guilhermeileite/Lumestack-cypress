class MyInfoPage {

    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            submitButton: "[type='submit']"
        }
        return selectors

    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(7).clear().type()
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }

    fillStatus() {
        
    }

}

export default MyInfoPage
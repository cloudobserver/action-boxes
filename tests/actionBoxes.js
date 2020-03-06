let thisPage = {}
module.exports = {
    beforeEach: browser => {
        thisPage = browser.page.actionBoxesPgObj()
        thisPage.navigate()
    },
    afterEach: browser => {
        thisPage
            .end()
    },
    'Evens and Odds - Test': browser => {
        var searchTerm = 'Cookie Monster'
        thisPage
          .waitForElementVisible('body')
          .pause(2000)
        
    //         .setValue('@searchBarXpath', [searchTerm, browser.Keys.ENTER])
    //         .waitForElementPresent('@results')
    //         .verify.containsText('@results', searchTerm)
    }
}
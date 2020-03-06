module.exports = {
  url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
  elements: {
      searchBar: 'input[name="q"]',
      results: '#res',
      searchBarXpath: {
          selector: '//input[@name="q"]',
          locateStrategy: 'xpath'
      }
  }
}
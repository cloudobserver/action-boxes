module.exports = {
  url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
  commands: {
    setInputAndClick(action, value) {
      return this
        .clearValue(('@' + action + 'Input' ))
        .setValue(('@' + action + 'Input'), value)
        .click('@' + action + 'Button')
    },
  },
  elements: {
    // Evens and Odds:
    evenOddInput: {
      selector: '//input[@name="evenOddInput"]',
      locateStrategy: 'xpath'
    },
    evenOddButton: {
      selector: '//button[@name="evenOddButton"]',
      locateStrategy: 'xpath'
    },
    evenResults: {
      selector: '//span[@name="evenResults"]',
      locateStrategy: 'xpath'
    },
    oddResults: {
      selector: '//span[@name="oddResults"]',
      locateStrategy: 'xpath'
    },
    // Filter Object
    objectFilterInput: {
      selector: '//input[@name="objectFilterInput"]',
      locateStrategy: 'xpath'
    },
    objectFilterButton: {
      selector: '//button[@name="objectFilterButton"]',
      locateStrategy: 'xpath'
    },
    objectFilterResults: {
      selector: '//span[@name="objectFilterResults"]',
      locateStrategy: 'xpath'
    },
    // Filter String
    nameFilterInput: {
      selector: '//input[@id="nameFilterInput"]',
      locateStrategy: 'xpath'
    },
    nameFilterButton: {
      selector: '//button[@id="nameFilterButton"]',
      locateStrategy: 'xpath'
    },
    nameFilterResults: {
      selector: '//span[@name="nameFilterResults"]',
      locateStrategy: 'xpath'
    },
    // Palindrome
    palindromeInput: {
      selector: '//input[@name="palindromeInput"]',
      locateStrategy: 'xpath'
    },
    palindromeButton: {
      selector: '//button[@name="palindromeButton"]',
      locateStrategy: 'xpath'
    },
    palindromeResults: {
      selector: '//span[@name="palindromeResults"]',
      locateStrategy: 'xpath'
    },   // Sum
    sumInput1: {
      selector: '//input[@name="sumInput1"]',
      locateStrategy: 'xpath'
    },
    sumInput2: {
      selector: '//input[@name="sumInput2"]',
      locateStrategy: 'xpath'
    },
    sumButton: {
      selector: '//button[@name="sumButton"]',
      locateStrategy: 'xpath'
    },
    sumResults: {
      selector: '//span[@name="sumResults"]',
      locateStrategy: 'xpath'
    }
  }
}
const { 
  evenOddData, 
  objectFilterData, 
  nameFilterData,
  palindromeData,
  sumData 
} = require('../test_assets/inputDataActionBoxes');
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
  'Evens and Odds': browser => {
    for (let i = 0; i < evenOddData.length; i++) {
        thisPage
          .setInputAndClick('evenOdd', evenOddData[i][0])
          .verify.containsText('@evenResults', evenOddData[i][1])
          .verify.containsText('@oddResults', evenOddData[i][2])
    }
  },
  'Filter Object': browser => {
    for (let k = 0; k < objectFilterData.length; k++) {
    thisPage
      .setInputAndClick('objectFilter', objectFilterData[k][0])
      .verify.containsText('@objectFilterResults', objectFilterData[k][1])
    }
  },
  'Filter String': browser => {
    for (let m = 0; m < nameFilterData.length; m++) {
    thisPage
      .setInputAndClick('nameFilter', nameFilterData[m][0])
      .verify.containsText('@nameFilterResults', nameFilterData[m][1])
    }
  },
  'Palindrome': browser => {
    for (let n = 0; n < palindromeData.length; n++) {
    thisPage
      .setInputAndClick('palindrome', palindromeData[n][0])
      .verify.containsText('@palindromeResults', palindromeData[n][1])
    }
  },
  'Sum': browser => {
    for (let q = 0; q < sumData.length; q++) {
    thisPage
      .clearValue('@sumInput1')
      .clearValue('@sumInput2')
      .setValue('@sumInput1', sumData[q][0])
      .setValue('@sumInput2', sumData[q][1])
      .click('@sumButton')
      .verify.containsText('@sumResults', sumData[q][2])
    }
  }
}
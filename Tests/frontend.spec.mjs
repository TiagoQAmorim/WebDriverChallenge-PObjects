import { Builder } from 'selenium-webdriver';
import { expect } from 'chai';
import WikipediaPage from '../PageObjects/wikipediaPage.mjs';
import SearchResultPage from '../PageObjects/searchResultPage.mjs';
import LanguageSwitchPage from '../PageObjects/languageSwitchPage.mjs';

describe('Web Frontend Testing', function () {
  let driver;
  let wikipediaPage;
  let searchResultPage;
  let languageSwitchPage;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    wikipediaPage = new WikipediaPage(driver);
    searchResultPage = new SearchResultPage(driver);
    languageSwitchPage = new LanguageSwitchPage(driver);
  });

  after(async function () {
    if (driver) {
      await driver.quit();
      console.log('Tests completed successfully');
    }
  });

  // Test case 1
  it('should load the homepage', async function () {
    await wikipediaPage.loadHomepage();
    const title = await wikipediaPage.getTitle();
    expect(title).to.equal('Wikipedia');
  });

  // Test case 2
  it('should search for ifixit', async function () {
    await wikipediaPage.loadHomepage();
    await wikipediaPage.searchFor('ifixit');
    const title = await wikipediaPage.getTitle();
    expect(title).to.equal('iFixit - Wikipedia');
  });

  // Test case 3
  it('should have "San Luis Obispo, California" listed as the headquarters', async function () {
    const headQuartersText = await searchResultPage.getHeadQuartersText();
    expect(headQuartersText).to.equal("San Luis Obispo, California");
  });

  // Test case 4
  it('should have the url "https://de.wikipedia.org/wiki/IFixit" after switching the language to German', async function () {
    await languageSwitchPage.switchToGerman();
    const url = await languageSwitchPage.getCurrentUrl();
    expect(url).to.equal('https://de.wikipedia.org/wiki/IFixit');
  });
});

import { By } from 'selenium-webdriver';

export default class WikipediaPage {
  constructor(driver) {
    this.driver = driver;
    this.searchInput = By.id('searchInput');
    this.searchButton = By.css('[type="submit"]');
  }

  async loadHomepage() {
    await this.driver.get('https://www.wikipedia.org/');
  }

  async searchFor(term) {
    const searchInput = await this.driver.findElement(this.searchInput);
    await searchInput.sendKeys(term);
    const searchButton = await this.driver.findElement(this.searchButton);
    await searchButton.click();
  }

  async getTitle() {
    return await this.driver.getTitle();
  }
}

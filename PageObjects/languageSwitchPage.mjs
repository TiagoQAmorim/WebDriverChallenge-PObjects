import { By, until } from 'selenium-webdriver';

export default class LanguageSwitchPage {
  constructor(driver) {
    this.driver = driver;
    this.langCheckbox = By.id('p-lang-btn-checkbox');
    this.deutschElement = By.xpath("//li[@title='Deutsch']");
  }

  async switchToGerman() {
    await this.driver.findElement(this.langCheckbox).click();
    const deutschElement = await this.driver.wait(until.elementLocated(this.deutschElement), 10000);
    await deutschElement.click();
  }

  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }
}

import { By } from 'selenium-webdriver';

export default class SearchResultPage {
  constructor(driver) {
    this.driver = driver;
    this.headquartersHeader = By.xpath("//*[contains(text(), 'Headquarters')]");
  }

  async getHeadQuartersText() {
    const headquartersHeader = await this.driver.findElement(this.headquartersHeader);
    const headquartersCell = await headquartersHeader.findElement(By.xpath("./following-sibling::td"));
    return (await headquartersCell.getText()).substring(0, 27);
  }
}

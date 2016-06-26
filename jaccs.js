var URL = 'https://www.jaccs.co.jp/Service?_TRANID=JALG00001_00M';

describe('jaccs', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    element(by.id('validatie-login-id')).sendKeys(browser.params.jaccs.id);
    element(by.id('validatie-login-password')).sendKeys(browser.params.jaccs.pass);
    element(by.id('submit_login')).click();
  });

  it('home', function() {
    browser.sleep(5000);
    element(by.xpath('/html/body/form/div/div[3]/div[2]/div[1]/div/dl[1]/dd[1]/a')).click();
  });

  it('home', function() {
    browser.sleep(5000);
    element(by.xpath('/html/body/form/div/div[3]/div/div[1]/div[5]/div/div[2]/div/div[1]/div/div/table/tbody/tr[2]/td/strong')).getText().then(console.log);
    browser.quit();
  });

});

var URL = 'https://ssl.topcard.co.jp/member/';

describe('tokyu', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    // element(by.id('userid')).sendKeys(browser.params.tokyu.id);
    element(by.xpath('//input[@id="userid"][1]')).sendKeys('numa1010');
    // element(by.id('password')).sendKeys(browser.params.tokyu.pass);
    element(by.xpath('//input[@id="password"][1]')).sendKeys('eCay8Vua');
    browser.sleep(5000);
    element(by.xpath('//button[@class="lv1"][1]')).click();
  });

  it('home', function() {
    var title = element(by.tagName('h2')).getText()
    console.log(title);
  });

});

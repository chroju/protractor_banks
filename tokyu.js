var URL = 'https://ssl.topcard.co.jp/member/';

describe('tokyu', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    element(by.xpath('/html/body/div[3]/article/div[3]/nav[1]/div[2]/form/div[1]/input')).sendKeys(browser.params.tokyu.id);
    element(by.xpath('/html/body/div[3]/article/div[3]/nav[1]/div[2]/form/div[2]/input')).sendKeys(browser.params.tokyu.pass);
    element(by.xpath('/html/body/div[3]/article/div[3]/nav[1]/div[2]/form/div[3]/ul/li[1]/button')).click();
  });

  it('home', function() {
    element(by.xpath('//*[@id="btn-gaku"]/a')).click();
  });

  it('check', function() {
    browser.sleep(5000);
    element(by.id('vp_alcor_view_Label_12')).getText().then(function (month) {console.log(month + '月');});
    element(by.id('vp_alcor_view_Label_15')).getText().then(console.log);
    element(by.id('vp_alcor_view_Label_16')).getText().then(function (month) {console.log(month + '月');});
    element(by.id('vp_alcor_view_Label_19')).getText().then(console.log);
  });

});

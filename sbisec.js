var URL = 'https://www.sbisec.co.jp/ETGate';

describe('sbisec', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    element(by.name('user_id')).sendKeys(browser.params.sbisec.id);
    element(by.name('user_password')).sendKeys(browser.params.sbisec.pass);
    element(by.name('ACT_login')).click();
  });

  it('click_portfolio', function() {
    element(by.xpath('/html/body/div[1]/div[1]/div[2]/div/ul/li[1]/a/img')).click();
  });

  it('check_portfolio', function() {
      console.log(value);
    });
  });

});

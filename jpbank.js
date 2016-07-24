var URL = 'https://direct.jp-bank.japanpost.jp/tp1web/U010101SCK.do';

describe('jpbank', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    element(by.id('focus1')).sendKeys(browser.params.jpbank.id1);
    element(by.id('focus2')).sendKeys(browser.params.jpbank.id2);
    element(by.id('focus3')).sendKeys(browser.params.jpbank.id3);
    element(by.xpath('//input[@name="U010103"]')).click();
  });

  it('aikotoba', function() {
    var title = element(by.tagName('h1')).getText()
    while(/合言葉/.exec(title)) {
        element(by.xpath('//*[@id="strMain"]/table/tbody/tr/td/dl/dd[1]')).getText().then(function (aikotoba) {
          if (aikotoba.match(/母親/)) {
            element(by.id('form02')).sendKeys(browser.params.jpbank.aikotoba_haha);
          } else if (aikotoba.match(/ペット/)) {
            element(by.id('form02')).sendKeys(browser.params.jpbank.aikotoba_pet);
          } else if (aikotoba.match(/映画/)) {
            element(by.id('form02')).sendKeys(browser.params.jpbank.aikotoba_movie);
          } else if (aikotoba.match(/アニメ/)) {
            element(by.id('form02')).sendKeys(browser.params.jpbank.aikotoba_anime);
          } else if (aikotoba.match(/食べ物/)) {
            element(by.id('form02')).sendKeys(browser.params.jpbank.aikotoba_eat);
          }
        });
      element(by.xpath('//*[@id="strMain"]/ul/li[2]/a')).click();
    }
  });

  it('pass', function() {
    element(by.xpath('//input[@name="loginPassword"]')).sendKeys(browser.params.jpbank.pass);
    element(by.xpath('//input[@name="U010302"]')).click();

  });

  it('notice', function() {
    browser.getTitle().then(function (title) {
      if(title.match(/お知らせ/)) {
        element(by.xpath('//*[@id="strMain"]/p[3]/a')).click();
      }
    });
  });

  it('value', function() {
    browser.sleep(5000);
    element(by.xpath('//*[@id="strMain"]/div[3]/div/div[2]/p/span')).getText().then(function (value) {
      console.log(value);
    });
  });

});

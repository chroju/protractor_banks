var URL = 'https://direct.jp-bank.japanpost.jp/tp1web/U010101SCK.do';

describe('jpbank', function() {
  browser.ignoreSynchronization = true;
  browser.get(URL);

  it('login', function() {
    element(by.id('focus1')).getTagName().then(function (name) {
      console.log(name);
    });
    element(by.id('focus1')).sendKeys(browser.params.jpbank.id1);
    element(by.id('focus2')).sendKeys(browser.params.jpbank.id2);
    element(by.id('focus3')).sendKeys(browser.params.jpbank.id3);
    element(by.xpath('//input[@name="U010103"]')).click();
  });

  it('aikotoba', function() {
    function aikotobaIfasked() {
      element(by.tagName('h1')).getText().then(function (pagetitle) {
        if((tmp_array = /合言葉入力(.)回目/.exec(pagetitle)) !== null) {
          console.log(tmp_array);
          switch (tmp_array[1]) {
            case "１": form_aikotoba = element(by.id('form02')); next_button = element(by.xpath('//*[@id="strMain"]/ul/li[2]/a')); break;
            case "２": form_aikotoba = element(by.id('form04')); next_button = element(by.xpath('/html/body/form[1]/div[3]/div[2]/div[1]/ul/li[2]/a')); break;
          }
          element(by.xpath('//*[@id="strMain"]/table/tbody/tr/td/dl/dd[1]')).getText().then(function (aikotoba) {
            console.log(aikotoba);
            if (aikotoba.match(/母親/)) {
              form_aikotoba.sendKeys(browser.params.jpbank.aikotoba_haha);
            } else if (aikotoba.match(/ペット/)) {
              form_aikotoba.sendKeys(browser.params.jpbank.aikotoba_pet);
            } else if (aikotoba.match(/映画/)) {
              form_aikotoba.sendKeys(browser.params.jpbank.aikotoba_movie);
            } else if (aikotoba.match(/アニメ/)) {
              form_aikotoba.sendKeys(browser.params.jpbank.aikotoba_anime);
            } else if (aikotoba.match(/食べ物/)) {
              form_aikotoba.sendKeys(browser.params.jpbank.aikotoba_eat);
            }
          });
        next_button.click().then(aikotobaIfasked);
        }
      });
    }
    aikotobaIfasked();
  });

  it('pass', function() {
    element(by.xpath('//input[@name="loginPassword"]')).sendKeys(browser.params.jpbank.pass);
    element(by.xpath('//input[@name="U010302"]')).click();
  });

  it('notice', function() {
    browser.getTitle().then(function (title2) {
      console.log(title2);
      if (title2.match(/お知らせ/)) {
        element(by.xpath('//*[@id="strMain"]/p[3]/a')).click();
      }
    });
  });

  it('check', function() {
    element(by.tagName('title')).getText().then(function (title3) {
      console.log(title3);
    });

    element(by.xpath('//*[@id="strMain"]/div[3]/div/div[2]/p/span')).getText().then(function (value) {
      console.log(value);
    });
  });

});

describe('login feature', function() {
var mbedAccountButton = element(by.xpath('//*[@id="login-form"]/div[2]/span[2]'));
var loginEmbedButton = element(by.id('login-with-mbed'));
var usernameField = element(by.id('id_username'));
var passwordField = element(by.id('id_password'));
var loginButton = element(by.xpath('//*[@id="login-form"]/div[3]/button'));
var errorMessage = element(by.xpath('/html/body/div/div/div/div/div[2]/div/form/ul'));



beforeEach(function() {
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.get('https://portal.mbedcloud.com')
    browser.driver.manage().window().maximize()

});

it('should enter username and password', function() {
      mbedAccountButton.click();
      loginEmbedButton.click();
      browser.driver.sleep(10000);
      usernameField.sendKeys('cloudportal33');
      passwordField.sendKeys('mbedcloud123');
      loginButton.click();
      
    
     });

    it('should enter incorrect username and password', function() {
        mbedAccountButton.click();
        loginEmbedButton.click();
        browser.driver.sleep(10000);
        usernameField.sendKeys('cloudportal334');
        passwordField.sendKeys('mbedcloud123');
        loginButton.click();
        expect(errorMessage.getText()).toEqual('Your account has been blocked after multiple consecutive login attempts. We " " ve sent you an email with instructions on how to unblock it.');
        browser.driver.sleep(50000);
      });
    
});
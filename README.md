Ensure that the following dependencies are installed:
Java SDK and JRE (preferably 1.8 )
node.js 8
Google Chrome (latest version)
Visual studio code

Install from window command line
npm install -g webdriver-manager
webdriver-manager update
webdriver-manager start (please make sure the selenium server is running on http://localhost:4444/wd/hub
Selenium server should be running in the background before running the test

Install from visual studio code terminal
npm install

To run the test

protractor conf.js

Question 2: 
 
Explain what measures you will take to make web automation tests robust? 

As a QA who has strong desire for quality, I would consider the folowings measures:
1) Having a proper reporting module
2) Proper common component implementation
3) Seperating test module from actual functionalities e.g Config files, TestUtils, Hooks and POM
4) Creating repo and CI pipiline
5) Test data module
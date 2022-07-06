const { Builder,By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
let fs = require("fs");
const chromedriver = require("chromedriver");

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
//  proxyServer = new BrowserMobProxyServer();
//     proxyServer.start();

//     // capture content as a HAR (HTTP Archive)
//     // to process when test is complete
//     proxyServer.enableHarCaptureTypes(CaptureType.REQUEST_CONTENT,
//                                       CaptureType.RESPONSE_CONTENT);
//     proxyServer.newHar();
// ant-btn ant-btn-block
(async function openChromeTest() {
	try {
		let options = new chrome.Options();
		let driver = await new Builder()

			.setChromeOptions(options)
			.forBrowser("chrome")
			.build();

		await driver.get("https://food.grab.com/sg/en/");


		function takeScreenshot(){
			let encodedString = await driver.takeScreenshot();
			await fs.writeFileSync("../images/image.png", encodedString, "base64");

		}
		//  by using above function take a screen  shot at any time



		// await driver
		// 	.manage()
		// 	.getCookie("location")
		// 	.then(function (cookie) {
		// 		console.log("cookie details => ", cookie);
		// 	});

		await driver.quit();
	} catch (error) {
		console.log(error);
	}
})();






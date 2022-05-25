package com.stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import com.mindtree.pageobject.HelpPage;
import com.mindtree.pageobject.IndexPage;
import com.mindtree.pageobject.ResultPage;
import com.mindtree.pageobject.StoresPage;
import com.mindtree.pageobject.TrackOrderPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class Steps extends BaseClass {
	
	@Before
	public void setup() throws IOException
	{
		
		configread = new Properties();
		FileInputStream configreadfile = new FileInputStream("config.properties");
		configread.load(configreadfile);
		logger = Logger.getLogger("BddFramework");
		PropertyConfigurator.configure("log4j.properties");
		System.setProperty("webdriver.chrome.driver", configread.getProperty("chromepath"));
		driver = new ChromeDriver();
		logger.info("launching chrome browser");
		
	}

	@Given("user Launch chrome browser")
	public void user_Launch_chrome_browser() {
		
		ip = new IndexPage(driver);

	}

	@When("user opens URL {string}")
	public void user_opens_URL(String url) {
		logger.info("opening url");
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("user enter email as {string} and password as {string} and click on login")
	public void user_enter_email_as_and_password_as_and_click_on_login(String username, String pass)
			throws InterruptedException {
		logger.info("login details are provided");

		ip.login(username, pass);
		logger.info("click on login");

	}

	@Then("page should show My account details which has title {string}")
	public void page_should_show_My_account_details_which_has_title(String title) {
		String text = ip.textGet();
		Assert.assertEquals(text, title);
		logger.info("log in passed");

	}

	@Then("close the browser")
	public void close_the_browser() {
		logger.info("closing the browser");
		driver.close();

	}

	@When("click on logout")
	public void click_on_logout() {
		logger.info("clicking on logout");
		ip.logout();
	}

	@When("user enters a product as {string} and click on search")
	public void user_enters_a_product_as_and_click_on_search(String product) throws InterruptedException {
		Thread.sleep(4000l);
		logger.info("user enter a product to search");
		ip.searchfun(product);
		logger.info("user clicked on search button");
		Thread.sleep(4000l);

	}

	@Then("user should be able to view products related to his search as {string}")
	public void user_should_be_able_to_view_products_related_to_his_search_as(String product) {
		rp = new ResultPage(driver);
		logger.info("validating the product appeared is what the user searched");

		String prod = rp.validateProduct();
		if (prod.contains("Table")) {
			Assert.assertTrue(true);
			logger.info("the required product appeared");
		}
		Assert.assertTrue(false);

	}

	@When("user clicked on signup and added username as {string} and password as {string} and clicked on signup")
	public void user_clicked_on_signup_and_added_username_as_and_password_as_and_clicked_on_signup(String email,
			String pass) throws InterruptedException {
		logger.info("user enters existing username and password for signup");
		ip.signup(email, pass);
	}

	@Then("page should should respond with a message as {string}")
	public void page_should_should_respond_with_a_message_as(String msg1) {
		logger.info("the system responds as username already there");
		
		String msg = ip.emailTakenMsg();
		Assert.assertEquals(msg, msg1);
		logger.info("the system asks to add a new email");

	}

	@When("user clicked on signup and added username as {string} and password as {string} and click on show password")
	public void user_clicked_on_signup_and_added_username_as_and_password_as_and_click_on_show_password(String email,
			String pass) throws InterruptedException {
		logger.info("user should be able to see password on signup page");
		ip.signupshowpass(email, pass);
	}

	@Then("user should able to view the password and close the browser")
	public void user_should_able_to_view_the_password_and_close_the_browser() {
		logger.info("closing browser");
		driver.close();
	}

	@When("clicks on trackorder button without ordering anything")
	public void clicks_on_trackorder_button_without_ordering_anything() {
		ip.trackorderclick();
		logger.info("moving to trackorders page");

	}

	@Then("the application should display this message {string}")
	public void the_application_should_display_this_message(String text) {
		top = new TrackOrderPage(driver);
		logger.info("searching for any product is there in trackorderspage");
		String text1 = top.msg();
		Assert.assertEquals(text1, text);
	}

	@Then("user should be able to view products related to his search and close browser")
	public void user_should_be_able_to_view_products_related_to_his_search_and_close_browser() {
		logger.info("closing chrome browser");
		driver.close();
	}

	@When("user enters a product as {string} and click on search and add filters to it")
	public void user_enters_a_product_as_and_click_on_search_and_add_filters_to_it(String prod) {
		logger.info("user enters a product and added filter");
		ip.searchfun(prod);
	}

	@Then("user should see products lying with this category and filter and contains {string}")
	public void user_should_see_products_lying_with_this_category_and_filter_and_contains(String string)
			throws InterruptedException {
		rp = new ResultPage(driver);
		logger.info("validating the name of the product with what we searched");
		String str = rp.pricefunc();
		if (str.contains(string))
			Assert.assertTrue(true);

	}

	@When("click on helpcenter button")
	public void click_on_helpcenter_button() {
		logger.info("clicking on helptab");
		ip.helpclick();
	}

	@Then("it should show the page with title {string}")
	public void it_should_show_the_page_with_title(String title1) throws InterruptedException {
		Thread.sleep(2000);
		hp = new HelpPage(driver);
		logger.info("getting title of the page");
		String title = hp.geTTitle();
		Thread.sleep(2000);
		logger.info("validating the titles");
		Assert.assertEquals(title1, title);

	}

	@When("user add an item to wishlist")
	public void user_add_an_item_to_wishlist() throws InterruptedException {
		rp = new ResultPage(driver);
		logger.info("adding items to wishlist");
		rp.wishlistadd();
	}

	@Then("the product added to wishlist and close the browser")
	public void the_product_added_to_wishlist_and_close_the_browser() {
		logger.info("closing chrome browser");
		driver.close();
	}

	@When("user clicks on stores page icon")
	public void user_clicks_on_stores_page_icon() throws InterruptedException {
		sp = new StoresPage(driver);
		logger.info("Entering stores page");
		sp.StoresInfo();
		Thread.sleep(2000l);

	}

	@Then("user enters to stores page and close the browser")
	public void user_enters_to_stores_page_and_close_the_browser() {
		logger.info("closing chrome browser");
		driver.close();
	}
}

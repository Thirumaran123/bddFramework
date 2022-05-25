package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class IndexPage {
	public WebDriver ldriver;
	
	public IndexPage(WebDriver rdriver) {
		ldriver=rdriver;
		PageFactory.initElements(rdriver,this);
		
	}
	
	@FindBy(xpath = "//input[@id='search']")
	WebElement search;

	@FindBy(id = "search_button")
	WebElement searchbtn;

	@FindBy(xpath = "//*[contains(@class,'header-icon-link user')]")
	WebElement account;

	@FindBy(xpath = "//a[text()='Log In']")
	WebElement loginOption;
	
	@FindBy(xpath="//a[text()='Logout']")
	WebElement logoutOption;
	
	@FindBy(xpath="//a[text()='Profile']")
	WebElement profileOption;

	@FindBy(xpath = "//a[text()='Sign Up']")
	WebElement signupOption;

	@FindBy(xpath = "//input[@placeholder='Email Address']")
	WebElement loginUsername;

	@FindBy(xpath = "//input[@placeholder='Password']")
	WebElement loginPass;

	@FindBy(xpath = "//input[@id='ul_site_login']")
	WebElement login;

	@FindBy(xpath = "//input[@id='spree_user_email']")
	WebElement signupUsername;

	@FindBy(xpath = "//input[@id='spree_user_password'][2]")
	WebElement signupPass;

	@FindBy(xpath = "//input[contains(@class,'button primary signup')]")
	WebElement signup;
	
	@FindBy(xpath="//a[contains(@class,'inherit')]")
	WebElement helpbtn;
	
	@FindBy(xpath="//*[@id=\"header\"]//ul[1]/li[2]/a")
	WebElement trackorderbtn;
	
	@FindBy(xpath="//*[@id=\"ulerrors\"]/ul/li")
	WebElement emailAlreadyTakenMsg;
	
	@FindBy(xpath="//a[text()='Show Password']")
	WebElement showpass;
	@FindBy(xpath = "//*[@id=\"content\"]//h1")
	WebElement text1;
	
	public void login(String email,String pass) throws InterruptedException
	{
		account.click();
		loginOption.click();
		Thread.sleep(4000l);
		loginUsername.sendKeys(email);
		loginPass.sendKeys(pass);
		login.click();
		}
	
	public String textGet()
	{
		account.click();
		profileOption.click();
		String t = text1.getText();
		return t;
	}
	public void logout()
	{
		account.click();
		logoutOption.click();
	}
	public void searchfun(String prod)
	{
		search.sendKeys(prod);
		searchbtn.click();
		
	}
	public String emailTakenMsg()
	{
		return emailAlreadyTakenMsg.getText();
	}
	public void signup(String uname,String pass) throws InterruptedException
	{
		account.click();
		signupOption.click();
		Thread.sleep(4000l);
		signupUsername.sendKeys(uname);
		signupPass.sendKeys(pass);
		signup.click();
	}
	public void signupshowpass(String uname,String pass) throws InterruptedException
	{
		account.click();
		signupOption.click();
		Thread.sleep(4000l);
		signupUsername.sendKeys(uname);
		signupPass.sendKeys(pass);
		showpass.click();
		Thread.sleep(4000l);
	}
	public void trackorderclick()
	{
		trackorderbtn.click();
	}
	public void helpclick()
	{
		helpbtn.click();
	}



}

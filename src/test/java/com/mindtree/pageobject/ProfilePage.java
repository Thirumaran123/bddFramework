package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProfilePage {
	public WebDriver ldriver;
	
	@FindBy(xpath = "//*[@id=\"content\"]//h1")
	WebElement text1;
	
	public ProfilePage(WebDriver rdriver) {
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	public String profileDetail()
	{
		String te = text1.getText();
		return te;
	}
	

}

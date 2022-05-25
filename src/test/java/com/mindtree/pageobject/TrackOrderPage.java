package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TrackOrderPage {
	public WebDriver ldriver;
	@FindBy(xpath="//h3[text()='We are yet to receive your first order']")
	WebElement msg1;
	
	public TrackOrderPage(WebDriver rdriver) {
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	public String msg()
	{
		String text = msg1.getText();
		return text;
	}

}

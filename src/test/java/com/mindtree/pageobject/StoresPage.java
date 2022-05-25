package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StoresPage {
	public WebDriver ldriver;

	public StoresPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//*[@id=\"header\"]/section/div/ul[2]//a")
	WebElement storestile;

	@FindBy(xpath = "//button[text()='View Details']")
	WebElement storesclick;

	public void StoresInfo() {
		storestile.click();
		storesclick.click();
	}

}

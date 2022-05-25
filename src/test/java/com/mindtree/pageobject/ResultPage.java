package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class ResultPage {
	public WebDriver ldriver;

	public ResultPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);

	}

	@FindBy(xpath = "//*[@class='product-img-default']")
	WebElement searchresult;

	@FindBy(xpath = "//*[@class='icofont icofont-heart_outline_thick wishicon']")
	WebElement wishl;

	@FindBy(xpath = "//li[@data-group='category']//div[@class='gname']")
	WebElement pricefilter;

	@FindBy(xpath = "//input[@id='filters_primary_category_Table_Lamps']")
	WebElement pricecategory;

	@FindBy(xpath = "//div[@class='product-title product-title-sofa-mattresses']//span[@class]")
	WebElement productName;

	public String validateProduct() {
		String strr = productName.getText();
		return strr;
	}

	public String pricefunc() throws InterruptedException {
		pricefilter.click();
		Thread.sleep(4000l);
		pricecategory.click();
		Thread.sleep(4000l);
		String name1 = productName.getText();
		return name1;
	}
	public void wishlistadd() throws InterruptedException
	{
		Thread.sleep(2000l);
		wishl.click();
		Thread.sleep(2000l);
	}
	

}

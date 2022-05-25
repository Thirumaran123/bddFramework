package com.mindtree.pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HelpPage {
	
		public WebDriver ldriver;
		
		public HelpPage(WebDriver rdriver) {
			ldriver=rdriver;
			PageFactory.initElements(rdriver,this);}
		
		@FindBy(xpath="//h1[text()='Help Center']")
		WebElement text;
		public String geTTitle()
		{
			String text1 = text.getText();
			return text1;
		}

			

}

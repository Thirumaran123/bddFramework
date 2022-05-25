package com.stepDefinitions;

import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.mindtree.pageobject.HelpPage;
import com.mindtree.pageobject.IndexPage;
import com.mindtree.pageobject.ResultPage;
import com.mindtree.pageobject.StoresPage;
import com.mindtree.pageobject.TrackOrderPage;

public class BaseClass {
	public WebDriver driver;
	public IndexPage ip;
	public ResultPage rp;
	public TrackOrderPage top;
	public HelpPage hp;
	public StoresPage sp;
	
	public static Logger logger;
	public Properties configread;

}

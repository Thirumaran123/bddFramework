package com.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features=".//Features/",glue="com.stepDefinitions",dryRun=false,plugin= {"pretty","html:test-output"},
monochrome=true)
public class TestRunner {

}

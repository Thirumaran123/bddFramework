Feature: Stores feature 

Scenario: Successfully navigate to stores page 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And user clicks on stores page icon 
	Then user enters to stores page and close the browser
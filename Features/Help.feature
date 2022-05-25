Feature: Helpcenter feature 
Scenario: user able to move to helpcenterpage 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And click on helpcenter button 
	Then it should show the page with title "Help Center" 
	And close the browser 
	
Feature: Login 

Scenario: Successfully Login with Valid credentials 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	Then page should show My account details which has title "My Account" 
	And close the browser 
	
	

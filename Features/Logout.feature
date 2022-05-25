Feature: Logout 

Scenario: Successfully Logout the account 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And click on logout 
	Then close the browser 
	
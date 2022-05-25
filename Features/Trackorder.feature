Feature: Trackorder 
Scenario: Validate trackorders functionality 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And clicks on trackorder button without ordering anything 
	Then the application should display this message "WE ARE YET TO RECEIVE YOUR FIRST ORDER" 
	And close the browser 
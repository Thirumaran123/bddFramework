Feature: Signup 
Scenario: Successfull signup with invalid credentials 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user clicked on signup and added username as "abc123err@gmail.com" and password as "Abcdef@123" and clicked on signup 
	Then page should should respond with a message as "Email has already been taken" 
	And close the browser 
	
Scenario: validate showpassword function is working 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user clicked on signup and added username as "abc123err@gmail.com" and password as "Abcdef@123" and click on show password
	Then user should able to view the password and close the browser
	
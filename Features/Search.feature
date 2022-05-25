Feature: Search 
Scenario: Search for a product 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And user enters a product as "Table" and click on search 
	Then user should be able to view products related to his search and close browser 
	
Scenario: Add filters to the search 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login 
	And user enters a product as "Table" and click on search and add filters to it 
	Then user should see products lying with this category and filter and contains "Table Lamp" 
	And close the browser 
	
	

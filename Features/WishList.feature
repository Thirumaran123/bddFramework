Feature: WishList feature 

Scenario: Successfully adding item to wishlist 
	Given user Launch chrome browser 
	When user opens URL "https://www.urbanladder.com/" 
	And user enter email as "abc123err@gmail.com" and password as "Abcdef@123" and click on login
	And user enters a product as "Table" and click on search 
	And user add an item to wishlist
	Then the product added to wishlist and close the browser
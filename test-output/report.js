$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Help.feature");
formatter.feature({
  "name": "Helpcenter feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user able to move to helpcenterpage",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on helpcenter button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_helpcenter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it should show the page with title \"Help Center\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.it_should_show_the_page_with_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully Login with Valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should show My account details which has title \"My Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_should_show_My_account_details_which_has_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully Logout the account",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on logout",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Search.feature");
formatter.feature({
  "name": "Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search for a product",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a product as \"Table\" and click on search",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_a_product_as_and_click_on_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view products related to his search and close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_be_able_to_view_products_related_to_his_search_and_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add filters to the search",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a product as \"Table\" and click on search and add filters to it",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_a_product_as_and_click_on_search_and_add_filters_to_it(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see products lying with this category and filter and contains \"Table Lamp\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_see_products_lying_with_this_category_and_filter_and_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Signup.feature");
formatter.feature({
  "name": "Signup",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfull signup with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicked on signup and added username as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and clicked on signup",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_clicked_on_signup_and_added_username_as_and_password_as_and_clicked_on_signup(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should should respond with a message as \"Email has already been taken\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.page_should_should_respond_with_a_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate showpassword function is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicked on signup and added username as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on show password",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_clicked_on_signup_and_added_username_as_and_password_as_and_click_on_show_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to view the password and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_should_able_to_view_the_password_and_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Stores.feature");
formatter.feature({
  "name": "Stores feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully navigate to stores page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on stores page icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_clicks_on_stores_page_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters to stores page and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_enters_to_stores_page_and_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Trackorder.feature");
formatter.feature({
  "name": "Trackorder",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate trackorders functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on trackorder button without ordering anything",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.clicks_on_trackorder_button_without_ordering_anything()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application should display this message \"WE ARE YET TO RECEIVE YOUR FIRST ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_application_should_display_this_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/WishList.feature");
formatter.feature({
  "name": "WishList feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully adding item to wishlist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_Launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://www.urbanladder.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"abc123err@gmail.com\" and password as \"Abcdef@123\" and click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enter_email_as_and_password_as_and_click_on_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a product as \"Table\" and click on search",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_enters_a_product_as_and_click_on_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add an item to wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_add_an_item_to_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product added to wishlist and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.the_product_added_to_wishlist_and_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});
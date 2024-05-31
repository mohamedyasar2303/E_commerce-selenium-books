// <reference types="Cypress" />
import{ Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import all_functionCy from "../../Test_path/all_function.cy";
import all_input_type_valueCy from "../../Test_path/all_input_type_value.cy";
import all_urls from "../../Test_path/all_urls";
import xpath_CssCy from "../../Test_path/xpath_Css.cy";


      Given("visiting the website",()=>{
      cy.visit(all_urls.website_url)
      cy.wait(3000)
      cy.viewport(1200, 780)

      })

     // Click on My Account Menu
     Then("click on my account menu",()=>{
     cy.get(xpath_CssCy.my_account_menu_button).click({force:true})
     cy.log("click on my account")
     })

     When("enter invalid email id, and password and enter the regester button and clear the email id and enter the valid email id and passoword in the input filed with random function method",()=>{
     cy.get(xpath_CssCy.enter_emailid_in_Register_input_field).type(all_input_type_valueCy.enter_invalid_emailid)
     cy.get(xpath_CssCy.enter_password_in_the_registered).type(all_input_type_valueCy.enter_incorrect_password)
     cy.get(xpath_CssCy.enter_registered_button).click({force:true})
     cy.log("enter invalid email id and incorrect password")
     cy.wait(3000)
     cy.get(xpath_CssCy.enter_emailid_in_Register_input_field).clear()
     cy.log("clering previous mail")
     cy.wait(2000)
    // Filling the input field with the auto generated email in the register and the password
     cy.get(xpath_CssCy.enter_emailid_in_Register_input_field).type(all_functionCy.emailid)
     cy.get(xpath_CssCy.enter_password_in_the_registered).type(all_functionCy.passwords)
     cy.get(xpath_CssCy.enter_registered_button).click({force:true})
     cy.log("enter random email id and password in the registered page and click the registered button")
     cy.screenshot("register page");
     cy.wait(6000)
     })
     
     //logout after register the mail
     Then("clicking the logout button after the regrestation form",()=>{
     cy.xpath(xpath_CssCy.logout_button_after_registrarion).click({force:true})
     cy.log("click the logout link and get logout")
     cy.wait(2000)
     })

      //login
    When("enter the emailid and password in the  login field",()=>{
     cy.get(xpath_CssCy.enter_email_id_in_login).type(all_functionCy.emailid)
     cy.get(xpath_CssCy.enter_password_in_login).type(all_functionCy.passwords)
    })
    Then("click the login button",()=>{
     cy.get(xpath_CssCy.enter_login_button).click()
     cy.log("again log in")
     cy.screenshot("login page")
     cy.wait(2000)
    })
    
     //home page
     //click the shop menu
     Then("click the shop menu button",()=>{
     cy.get(xpath_CssCy.click_shop_button).click({force: true}) 
     cy.wait(2000)
     cy.log("click on shop menu")
     })

     // Now click on Home menu button
     Then("click the home menu button",()=>{
     cy.get(xpath_CssCy.click_home_menu_button).click()
     cy.wait(2000)
     cy.log("click on home menu")
     })
     
     //Test whether the Home page has Three Sliders only
     When("checking wheather the home page has 3 sliders only",()=>{
     cy.get(xpath_CssCy.home_page_3slider_only).should('not.have.length.gt', 3); 
     })

    //click on the image in the home page i am clicking javascripr image
    Then("click on the image in the home page i am clicking javascripr image",()=>{
     cy.get(xpath_CssCy.clicking_js_image).click({force:true}) 
     cy.wait(2000)
     cy.log("clicked on js image")
    })

    // Click on Description tab for the book you clicked on. i am clicking js book
    Then("clicked on the description tab the see about the book. i am clicking js book",()=>{
    cy.get(xpath_CssCy.js_book_description).click()
    cy.contains(xpath_CssCy.js_book_contain).click()
    })
    When("verify about the description tab",()=>{
    cy.get(xpath_CssCy.js_book_description_verifying).should('exist') 
    cy.wait(2000)
    cy.log("click on description")
    })
    Then("clicked on review tab to see how many person previously bot this book",()=>{
    cy.get(xpath_CssCy.js_book_review).click() 
    cy.get(xpath_CssCy.review_regarding_js_book).should('exist') //assert expected result is successfull
    cy.log("i am clicking review of the book")
    cy.wait(6000)
    })
    When("select the quality box field and clear the default value and generate the random value in the quality box field",()=>{
    cy.get(xpath_CssCy.select_quality_box_field).clear()
    cy.get(xpath_CssCy.select_quality_box_field).type(all_functionCy.quantity_number);
    cy.log("using random function for choose quantity of books")
    })
    Then("click the add to basket button",()=>{
    cy.get(xpath_CssCy.add_to_basket_button).click({force:true}) 
    cy.log("click on the add to basket button")
    cy.wait(4000)
    })
    Then("click the menu iteam tab button",()=>{
    cy.get(xpath_CssCy.menu_iteam).click({force:true}) 
    cy.log("menu iteam tab buttom")
    cy.wait(3000)
    })
      When("select the quality box field and clear the value from it and enter a book by using random function i am going to add 2 books",()=>{
      cy.get(xpath_CssCy.select_quality_box_field).invoke('val') // .invoke()--> method to force a hidden div to be 'display: block' so we can interact with its children elements.
      cy.get(xpath_CssCy.select_quality_box_field).clear().type(all_functionCy.extra_books);
      cy.log("add +2 with previous random value")
      cy.wait(2000)
      })
      Then("click the update basket button to see the changes",()=>{
      cy.get(xpath_CssCy.update_basket_button).click()
      cy.log("Now click on Update Basket to reflect those changes")
      })
      //i am going to include shop function here
      Then("click the shop button",()=>{
      cy.get(xpath_CssCy.click_shop_button).click({force: true}) 
      cy.log("click on the shop tab")
      cy.wait(3000)
      })
      //Click any of the product links available in the product category 
      Then("Click any of the product links available in the product category i am clicking on html book",()=>{
      cy.xpath(xpath_CssCy.html_book_in).click()
      cy.log("click on html book")
      cy.wait(3000)
      })
      //Click on Sort by Popularity item in Default sorting dropdown
      When("select sort by Popularity",()=>{
      cy.get(xpath_CssCy.default_sort_dropdown).select(1)
      cy.wait(2000)
      })
      Then("click sort by popularity",()=>{
      cy.contains("Sort by popularity").click({force: true})
      })
      //Click on Sort by Average ratings in Default sorting dropdown
      When("select sort by average",()=>{
      cy.get(xpath_CssCy.sort_by_average).select(2)
      cy.wait(2000)
      })
      Then("click sort by average",()=>{
      cy.contains("Sort by average rating").click({force: true})
      cy.wait(1000)
      })
      //Click on the Add To Basket button which adds that book to your basket
      Then("going to add html 5 book into the basket",()=>{
      cy.xpath(xpath_CssCy.add_to_basket_button_of_html_5_forms).click()
      cy.log("clicked on the html 5 forms add to basket button")
      cy.wait(2000)
      })
      //User can view that Book in the Menu item with price .
      Then("User can view that Book in the Menu item with price",()=>{
      cy.get(xpath_CssCy.after_click_the_book_view_buton).click()
      cy.log("clicked on the menu item tab")
      cy.screenshot("view the book in the menu iteam page")
      })

      // again merge the home with shop
      Then("remove the secong book from the grid which is in the checkout page",()=>{
      cy.get(xpath_CssCy.remove_second_book_iteam).click({ multiple: true })
      cy.log("Now click on Remove this icon in Check out page which removes that book from the grid")
      })
      // Enter the Coupon code as ‘krishnasakinala’ to get 50rps off on the total.
      When("now selecting the coupen code field the enterning the coupen code",()=>{
      cy.get(xpath_CssCy.coupen_code_field).type(all_input_type_valueCy.coupen_code)
      cy.log("coupen code krishnasakinala")
      cy.wait(2000)
      })
      Then("click the coupen code button if the book price is more than 450 the coupen code will reduce 50 rs from the final amount",()=>{
      cy.get(xpath_CssCy.coupen_code_button).click()
      cy.log("if book price is less then 450 coupen code not work")
      cy.wait(2000)
      })
      Then("click on Update Basket to reflect those changes",()=>{
      cy.get(xpath_CssCy.update_basket_button).click({force:true})
      cy.log("Now click on Update Basket to reflect those changes")
      })
      Then("Now click on Proceed to Check out button",()=>{
      cy.get(xpath_CssCy.proced_to_check_out_button).click()
      cy.log("Now click on Proceed to Check out button which navigates to payment gateway page.")
      cy.wait(3000)
      })
      When("enterning the fitst name , lastname , company name, email id, phonenumber,select Åland Islands from the drop down , fill the address in the billing page and enter city name, zipcode and text box",()=>{
      cy.log("start filling billing page")
      cy.get(xpath_CssCy.first_name_in).type(all_input_type_valueCy.first_name_billing_page)
      cy.get(xpath_CssCy.last_name_in).type(all_input_type_valueCy.last_name_billing_page)
      cy.log("enter first name and lastname")
      cy.get(xpath_CssCy.company_in).type(all_functionCy.company_name_tho)
      cy.log("enter random company name")
      cy.wait(3000)
      cy.xpath(xpath_CssCy.email_id_in).clear().type(all_functionCy.emailid)
      cy.get(xpath_CssCy.phone_number_in).type(all_functionCy.phonenumber)
      cy.get(xpath_CssCy.drop_down_in).select("Åland Islands", { force: true }).should("have.value","AX")
      cy.get(xpath_CssCy.address_in).type(all_input_type_valueCy.address_billibg_page)
      cy.log("enter emailid , phonenumber, and select drop down and address")
      cy.wait(2000)
      cy.get(xpath_CssCy.city_in).type(all_input_type_valueCy.city_billing_page)
      cy.get(xpath_CssCy.postcode_in).type(all_input_type_valueCy.post_code_billing_page)
      cy.get(xpath_CssCy.text_box_in).type(all_functionCy.TEXTBOX)
      cy.log("enter city name, zipcode and text box ")
      cy.wait(3000)
      })
      Then("clcik on cash on delivery button",()=>{
      cy.get(xpath_CssCy.cod_in).click({force:true})
      cy.log("click on cod button")
      cy.wait(1000)
      })
      Then("click on place the order button",()=>{
      cy.get(xpath_CssCy.place_order_button_in).click()
      cy.log("click on order button")
      cy.screenshot('myScreenshot')
      cy.log("screenshot taken")
      })
      Then("clicked on my account menu",()=>{
      cy.get(xpath_CssCy.my_account_menu_button).click({force:true})
      cy.log("click on my account")
      })
      Then("clicked on order link",()=>{
      cy.xpath(xpath_CssCy.order_link).click()
      cy.log(" Click on Orders link")
      cy.wait(2000)
      })
      Then("clicked on viewed button to see the order and clicked back button",()=>{
      cy.xpath(xpath_CssCy.view_button_on_order_link).click({force:true})
      cy.log("click view button")
      cy.wait(5000)
      cy.go("back")
      })
      Then("user clicked on address link to see the biling address and shipping address",()=>{
      cy.xpath(xpath_CssCy.address_link).click()
      cy.log("Click on Address link")
      cy.log("user can see the biling address and shipping address")
      cy.wait(1000)
      })
      Then("going the change the shipping address so i am going to click the edit button",()=>{
      cy.xpath(xpath_CssCy.shipping_address_edit_link).click()
      cy.log("click edit button on shipping address")
      })
      When("enter the firstname, lastname, company name, and select Åland Islands from the drop down , address , distict and enter zipcode",()=>{
      cy.get(xpath_CssCy.first_name_in_shipping_address).type(all_functionCy.FIRSTNAME)
      cy.get(xpath_CssCy.last_name_in_shipping_address).type(all_functionCy.LASTNAME)
      cy.get(xpath_CssCy.company_name_in_shipping_address).type(all_input_type_valueCy.company_name_shipping_address)
      cy.get(xpath_CssCy.select_drop_down_list_on_shipping_address).select("Åland Islands", { force: true }).should("have.value","AX")
      cy.get(xpath_CssCy.adderss_shipping_address).type(all_input_type_valueCy.address_shipping_address)
      cy.get(xpath_CssCy.distict_shipping_address).type(all_input_type_valueCy.distict_shipping_address)
      cy.get(xpath_CssCy.zip_code_shipping_address).type(all_input_type_valueCy.zip_code_shipping_address)
      cy.wait(3000)
      })
      Then("click the save shipping address button",()=>{
      cy.get(xpath_CssCy.save_address_button_shipping_address).click()
      cy.wait(3000)
      })
      // Click on Myaccount link Click on Account details
      Then("click on my account detail link to change the new passowrd",()=>{
      cy.xpath(xpath_CssCy.click_on_account_details_link).click()
      cy.log("click on account details link")
      cy.wait(3000)
      })
      When("enter the first name , lastname, emailid ,current password , new password , and conform passowrd",()=>{
      cy.get(xpath_CssCy.first_name_in_account_details).type(all_input_type_valueCy.first_name_in_account_details)
      cy.get(xpath_CssCy.last_name_in_account_details).type(all_input_type_valueCy.last_name_in_account_details)
      cy.get(xpath_CssCy.email_id_in_account_details).clear().type(all_functionCy.emailid)
      cy.get(xpath_CssCy.current_password_account_details).type(all_functionCy.passwords)
      cy.get(xpath_CssCy.new_password_account_details).type(all_functionCy.New_passoword_confrom_password)
      cy.get(xpath_CssCy.conform_password_account_details).type(all_functionCy.New_passoword_confrom_password)
      cy.log("in account details page i have changed my old passwoed and enter a new passsword")
      cy.wait(3000)
      })
      Then("clicked on save change button in the my account link page",()=>{
      cy.get(xpath_CssCy.save_change_button_account_details).click({force:true})
      cy.log("clicked on save change button")
      cy.wait(2000)
      })
      //logout
      Then("clicked on logout link to logout",()=>{
      cy.xpath(xpath_CssCy.logout_link).click()
      cy.log("clicked on logout link")
      cy.screenshot("logout page")
      })
      //login with new password
      Given("visiting the website",()=>{
        cy.visit(all_urls.website_url)
        cy.wait(3000)
        cy.viewport(1200, 780)
  
        })

        Then("click on my account menu",()=>{
          cy.get(xpath_CssCy.my_account_menu_button).click({force:true})
          cy.log("click on my account")
          })

      When("now user can see the login and regestion from now use going to enter the valid credintial in the login from user going to enter emaild id and new password in the login page",()=>{
      cy.get(xpath_CssCy.enter_email_id_in_login).type(all_functionCy.emailid)
     cy.get(xpath_CssCy.enter_password_in_login).type(all_functionCy.New_passoword_confrom_password)
     cy.log("enter email id and new password")
      })
      Then("clicked on login button after enter the valid credinitial",()=>{
     cy.get(xpath_CssCy.enter_login_button).click()
     cy.log("click login button")
     cy.screenshot("login after the new password is changed")
      })


     
     




     




















      



      
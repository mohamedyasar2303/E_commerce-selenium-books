module.exports={

    // 3.1) Click on My Account Menu
    my_account_menu_button:"ul#main-nav>li:nth-of-type(2)>a",   //css
    // Enter registered Email Address in Email-Address textbox  // email input field.
    enter_emailid_in_Register_input_field: "input[name='email']",
    // enter password in the passwrod input field in the registerd page.  //css
    enter_password_in_the_registered:"#reg_password", 
    //enter registered button  //css
    enter_registered_button: "input[name='register']",
    //logout after registration 
    logout_button_after_registrarion :" //a[contains(text(),'Logout')]" , //xpath
    //login field email_id
    enter_email_id_in_login : "input[name='username']" , //css
    //login field password
    enter_password_in_login : "#password" ,  //css
    //click the iframe log and coming back to home page     //css
    enter_iframe_log_button: "div#site-logo>a>img",
    //enter login button
    enter_login_button :"input[name='login']" ,

    //click the shop menu    //css
    click_shop_button: "#menu-item-40 > a",
    //click on home menu button  //css
    click_home_menu_button: "div#content>nav>a",
    //chech home page 3 slider only   //css
    home_page_3slider_only: ".slider",
    //clicking javascript image button  //css
    clicking_js_image: "img[alt='Mastering JavaScript']",
    // add to basket button     //css
    add_to_basket_button: "button[type='submit']",
    //javascript book description   //css
    js_book_description : "#product-165 > div.woocommerce-tabs.wc-tabs-wrapper > ul > li.description_tab.active > a",
    // using contains to see description  //css
    js_book_contain: "Description",
    // verifying description    //css
    js_book_description_verifying: "div#tab-description",
    // review the book   // using copy selector 
    js_book_review: "#product-165 > div.woocommerce-tabs.wc-tabs-wrapper > ul > li.reviews_tab > a",
    //There should be a Reviews regarding that book the user clicked on
    review_regarding_js_book : "#tab-description" ,
    //User can view that Book in the Menu item with price     //css
    menu_iteam: "#wpmenucartli > a" ,
    // quality input field
    select_quality_box_field: "input[type='number']",
    //removeing the secong book iteam from the basket
    remove_second_book_iteam:"a[data-product_id='181']",
    // select the coupen code input field  //css
    coupen_code_field :"input[name='coupon_code']",
    //click the apply coupen button
    coupen_code_button: "input[name='apply_coupon']",
    //click on Update Basket to reflect those changes
    update_basket_button : "input[name='update_cart']",
    //User can find the Total price of the book in the Check out grid.
    total_price_show: "#page-34 > div > div.woocommerce > div > div > table",
    //Proceed to Check out button which navigates to payment gateway page
    proced_to_check_out_button : "a.checkout-button.button",
    //add coupen code in payment gateway this is the line to show the coupen code
    link_for_coupen_code : "Click here to enter your code",

    //billing detail form
    
    first_name_in : "input#billing_first_name",
    last_name_in : "input#billing_last_name" ,
    company_in : "input#billing_company" ,
    email_id_in : "(//input[@type='email'])[1]",
    phone_number_in : "input[type='tel']",
    drop_down_in : "select[name='billing_country']",
    address_in : "input#billing_address_1" ,
    city_in : "#billing_city" ,
    postcode_in : "input#billing_postcode" ,
    text_box_in : "textarea[name='order_comments']" ,
    cod_in : "input[value='cod']" ,
    place_order_button_in : "input.button.alt" ,


    //shop

    html_book_in :"//a[contains(text(),'HTML')]",
    default_sort_dropdown :"select[name='orderby']",
    sort_by_average : "select[name='orderby']",
    add_to_basket_button_of_html_5_forms : "//a[@data-product_id='181']" , //xpath
    after_click_the_book_view_buton :"#wpmenucartli > a",

    //my account
    order_link : "//a[contains(text(),'Orders')] " ,
    view_button_on_order_link : "//table[contains(@class,'woocommerce-MyAccount-orders shop_table')]" ,
    address_link : "//a[contains(text(),'Addresses')]" ,
    // my account --> address --> shipping address
    shipping_address_edit_link : "(//a[@class='edit'])[2]" ,
    first_name_in_shipping_address : "input#shipping_first_name",
    last_name_in_shipping_address : "input#shipping_last_name" ,
    company_name_in_shipping_address : "input#shipping_company" ,
    select_drop_down_list_on_shipping_address : "select[name='shipping_country']" ,
    adderss_shipping_address : "input#shipping_address_1",
    distict_shipping_address : "input#shipping_city" ,
    zip_code_shipping_address : "input#shipping_postcode" ,
    save_address_button_shipping_address : "input.button" ,

    //account details
    click_on_account_details_link : "//a[contains(text(),'Account Details')]" ,
    first_name_in_account_details : "input[name='account_first_name']" ,
    last_name_in_account_details : "input[name='account_last_name']" ,
    email_id_in_account_details : "input[name='account_email']" ,
    current_password_account_details : "input[name='password_current']" ,
    new_password_account_details : "input[name='password_1']" ,
    conform_password_account_details : "input[name='password_2']",
    save_change_button_account_details : "input[value='Save changes']",


    //logout
    logout_link : "//a[contains(text(),'Logout')]",













    




    









    
    
    
}
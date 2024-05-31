// Enter registered Email Address in Email-Address textbox with random mail method.
const getRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const email = `test.${getRandomString(8)}@example.com`; 




  //random password
  const getRandomPassword = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const password = getRandomPassword(16); 
  const new_passoword_confrom_password= getRandomPassword(16);    
  
 
  



  
  //randomnumber for choose the quantity of books

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1;
  };
  
  const randomNumber = getRandomNumber();

  function addTwoFromPreviousValue(randomNumber) {
    const newValueAfterAddition = randomNumber + 2 
    return newValueAfterAddition;
  }
  
  
  const newValue = addTwoFromPreviousValue(randomNumber);
  
  
 
  


  
  // rondom name for payment gateway page.
  const getRandomStrings = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const company_name = getRandomStrings(8);




  //shipping addres -->name firsr and lastname

  // rondom name for payment gateway page.
  const getRandomNames = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  const firstname=getRandomNames(8);
  const lastname=getRandomNames(6);
  const textbox=getRandomNames(50);




  //random phone number for

  const getRandomPhoneNumber = () => {
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += Math.floor(Math.random() * 7); // Generate a random digit between 0 and 9
    }
    return result;
  };
  
  const phoneNumber = getRandomPhoneNumber();
  
  



module.exports={

    emailid:email ,
    passwords :password ,
    company_name_tho:company_name,
    phonenumber:phoneNumber,
    quantity_number:randomNumber,
    extra_books :newValue,
    TEXTBOX:textbox,
    FIRSTNAME:firstname,
    LASTNAME:lastname,
    New_passoword_confrom_password:new_passoword_confrom_password,

}




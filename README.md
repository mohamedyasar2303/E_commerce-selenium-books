
## E-Commerce Selenium Books
Here's a sample README file for your GitHub repository detailing your Cypress automation project:

---

This project involves automating various user scenarios on an e-commerce website using the Cypress automation tool with JavaScript and the Page Object Model (POM) design pattern. The scenarios include user registration, login, product purchase, applying a coupon, and order placement.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Test Scenarios](#test-scenarios)
- [Project Structure](#project-structure)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This automation project tests various functionalities of an e-commerce website where books are sold. The main functionalities tested are:
- User registration
- User login
- Product filtering and selection
- Adding and removing items from the cart
- Applying a coupon code
- Placing an order with shipping details
- User logout
- Re-registration and login

## Setup and Installation

### Prerequisites
- Node.js (version 12 or higher)
- npm (version 6 or higher)
- Cypress (version 10 or higher)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/e-commerce-cypress-automation.git
    cd e-commerce-cypress-automation
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Test Scenarios
The following test scenarios are covered in this project:
1. **User Registration:** Create a new user account with a unique email ID and password.
2. **User Login:** Log in with the newly created user credentials.
3. **Product Purchase:**
    - Filter the book products.
    - Add two books to the cart.
    - Remove one book from the cart.
4. **Applying Coupon:** Apply a coupon code to get a discount on the total price.
5. **Order Placement:** Place an order by providing shipping address details.
6. **User Logout:** Log out from the website.
7. **Re-Registration and Login:** Create another new user account and log in with the new credentials.

## Running the Tests

### Using Cypress Test Runner
1. Open Cypress Test Runner:
    ```sh
    npx cypress open
    ```
2. Click on the test file (`e-commerce.spec.js`) in the Cypress Test Runner to execute the tests.

### Running Tests in Headless Mode
To run the tests in headless mode, use the following command:
```sh
npx cypress run
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README file according to your project's specifics and personal preferences.
### Contact

Your Name - Mohamed Yasar - your-mohamedyasar2303@gmail.com

Project Link: https://practice.automationtesting.in

# Automatic Mailing System

## Project Description
The **Automatic Mailing System** is a web application built using **Node.js**, **Express.js**, **Nodemailer**, and **HTML**. It allows users to send emails automatically from a Gmail account to specified recipients. This system is designed to automate the process of sending notifications, newsletters, or any other form of mass mailing.

## Features
- Send emails to multiple recipients automatically.
- Secure login using Gmail's SMTP.
- User-friendly interface with HTML forms to input email content and recipients.
- Easy to set up and use.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) (Version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/Manoharyp/automatic-mailing-system.git
    ```

2. Navigate to the project directory:
    ```bash
    cd automatic-mailing-system
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file to securely store your email credentials:
    ```bash
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password-or-app-password
    ```

5. Start the server:
    ```bash
    node server.js
    ```

6. Open the app in your browser:
    - Go to [http://localhost:3000](http://localhost:3000)

## Usage
1. Enter the subject and body of the email in the provided form.
2. Add the recipient's email address.
3. Click the **"Send Email"** button to send the email to the specified recipient.

## Technologies Used
- **Node.js** - JavaScript runtime to build the backend.
- **Express.js** - Framework for building web applications.
- **Nodemailer** - Library to send emails through Gmail’s SMTP server.
- **HTML/CSS** - For creating the frontend interface.

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to fork this repository, make improvements, or add new features! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## Acknowledgements
- [Nodemailer](https://nodemailer.com/) for the email-sending functionality.
- [Express.js](https://expressjs.com/) for building the backend.
- [Node.js](https://nodejs.org/en/) for providing the runtime environment.

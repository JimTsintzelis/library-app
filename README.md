
 Library Management System

A comprehensive Library Management System built using a modern web stack. This application enables efficient management of books, user interactions, and financial transactions for both librarians and users. It includes features such as book searching, user authentication, borrowing and returning books, and integration with Stripe for secure payment processing.

--> Prerequisites
    Versions
- **Java JDK:** 21
- **Spring Boot:** 2.7.3
- **MySQL:** 8.0
- **React:** 18.2.0
- **Stripe API:** 9.14.0
- **Node.js:** 16.17.0
- **npm:** 8.15.1

--> Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Configuration](#backend-configuration)
- [Frontend Configuration](#frontend-configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

--> Features

- **User Authentication and Authorization:** Secure login and registration for users and admins using JWT (JSON Web Tokens).
- **Book Management:** CRUD operations for managing books, including adding, editing, and deleting entries.
- **Search and Filtering:** Advanced search and filtering options for books based on categories, availability, and more.
- **Borrowing and Returning:** Manage book borrowing, track borrowed books, and view borrowing history.
- **Stripe Integration:** Secure payment gateway for managing late fees and other transactions.
- **Email Notifications:** Automated email alerts for book reservations, reminders, and notifications.

--> Technologies Used

- **Backend:** Spring Boot, Spring Data JPA, Spring Security, Hibernate, Stripe API
- **Frontend:** React, React Hooks, React Router, Redux, Axios
- **Database:** MySQL (JPA Repository for ORM)
- **Others:** JSON Web Tokens (JWT), Maven (build automation), Keytool (for generating certificates), GitHub Actions (CI/CD)

--> Installation

--> Backend Configuration

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JimTsintzelis/library-app.git
   cd library-app/02-backend/spring-boot-library
   ```

2. **Configure the MySQL database:**
   Update the `src/main/resources/application.properties` file with your MySQL database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/library?useSSL=false
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   ```

3. **Generate a keystore:**
   If required, generate a keystore for security using:
   ```bash
   keytool -genkeypair -alias luv2code -keystore src/main/resources/luv2code-keystore.p12 -keypass secret -storeType PKCS12 -storepass secret -keyalg RSA -keysize 2048 -validity 365 -dname "C=US, ST=PA, L=Phila, O=LibraryApp, OU=Dev, CN=localhost"
   ```

4. **Run the backend service:**
   ```bash
   mvn spring-boot:run
   ```

--># Frontend Configuration

1. **Navigate to the frontend directory:**
   ```bash
   cd ../03-frontend/react-library
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Configure the `.env` file:**
   Create a `.env` file in the `react-library` directory and add your API base URL and Stripe public key:
   ```
   REACT_APP_API_BASE_URL=https://localhost:8080
   REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
   ```

4. **Start the frontend application:**
   ```bash
   npm start
   ```

--> Running the Application

- **Backend Service:** The Spring Boot backend will be available at `https://localhost:8080`.
- **Frontend Application:** The React frontend will be available at `https://localhost:3000`.

Ensure both services are running simultaneously for the application to function correctly.

--> Usage

1. Register as a new user or log in as an existing user.
2. Browse books, search for specific titles, and check their availability.
3. Borrow books and track borrowed items through your user dashboard.
4. Return borrowed books and pay any applicable fees through the integrated Stripe payment gateway.
5. Admins can add new books, manage existing entries, and handle user accounts.

--> Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

--> License

This project is licensed under the MIT License - see the [LICENSE.txt] file for details.


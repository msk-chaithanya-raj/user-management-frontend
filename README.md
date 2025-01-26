# **Project Documentation**

## **Frontend (Client-Side)**

### **Technologies Used:**

- **React**: Frontend framework to build user interfaces.
- **Axios**: For making HTTP requests to the backend.
- **Vite**: A modern build tool for React applications.

## **Component Overview**

### **Login.js**

The `Login.js` component is responsible for handling the user login. It allows users to input their credentials (email and password), which are then validated by the backend. If the credentials are correct, a JWT token is returned for authentication.

- **Features**:
  - Email and password input fields.
  - Handles form submission and API calls to log in.
  - Displays error messages for invalid credentials.

### **Register.js**

The `Register.js` component handles the user registration process. It allows users to create an account by providing their email, password, and role. It sends the registration data to the backend to create a new user.

- **Features**:
  - Email, password, and role input fields.
  - Handles form submission and API calls to register a new user.
  - Displays error or success messages.

### **Setup:**

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the frontend**:

   ```bash
   npm run dev
   ```

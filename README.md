# Job Portal

![Project Status](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
**![Frontend Deployed with Surge](https://img.shields.io/badge/Frontend_Deployed-Surge-21B072?logo=netlify&logoColor=white)** <!-- Changed badge -->
![Backend Deployed with Vercel](https://img.shields.io/badge/Backend_Deployed-Vercel-black?logo=vercel)
![Built with React](https://img.shields.io/badge/Built%20With-React-61DAFB?logo=react&logoColor=white)
![Backend Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

---

**Official Name:** Job Portal  
**Primary Purpose:** Showcase skills and connect with potential recruiters and clients.

## 📋 Description

The Job Portal is designed to bridge the gap between job seekers and employers. With an intuitive interface and comprehensive features, it allows users to effectively showcase their skills and connect with potential employers. The portal offers functionalities that enable seamless job searching and application processes, catering to both applicants and employers.

## ✨ Key Features

- **Authentication:**
  - Email/password login
  - Google login
  - Protected routes for secure access

- **Job Search:**
  - Filter jobs by location and salary range

- **Application Management:**
  - Detailed forms for applying to jobs
  - Manage submitted applications

- **Employer Tools:**
  - Review applications
  - Add and manage job postings

- **User Experience:**
  - Friendly error messages
  - Loading indicators to improve experience

- **Security:**
  - Secure session management using JWT tokens

## 🛠️ Technologies Used

### Frontend
- Tailwind CSS
- DaisyUI
- React
- React Router DOM
- React Icons
- Framer motion
- Lottie React
- SweetAlert2
- Axios

### Backend
- Node.js
- Express.js
- Firebase Authentication
- Google Authentication
- MongoDB
- JWT
- Cookie-Parser

### Deployment
- Vercel for backend
- Surge for frontend

### Version Control
- GitHub

## 🚀 Live Demos

Experience the application live!

*   **Frontend (User Interface):** [Client](https://modern-branch-job-portal.surge.sh/)
*   **Backend (API Server):** [Server](https://vercel.com/sarowar-sagors-projects/job-portal-server)

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sarowar-Sagor/Job-portal.git
   ```
2.  **Navigate into the project directory:**
    ```bash
    cd Job-portal
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
4. **Set up the environment file:**

   - Create a `.env.local` file in the `client` directory.
   - Add your Firebase configuration keys. These are prefixed with `VITE_` for use with the Vite build tool.


  ```env
   # Firebase Configuration
   VITE_API_KEY=<your_firebase_api_key>
   VITE_AUTH_DOMAIN=<your_firebase_auth_domain>
   VITE_PROJECT_ID=<your_firebase_project_id>
   VITE_STORAGE_BUCKET=<your_firebase_storage_bucket>
   VITE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
   VITE_APP_ID=<your_firebase_app_id>
   ```

### Running the Development Server

1.  **Start the development server:**

    ```bash
    npm run dev
    # OR
    yarn dev
    ```
    
3.  **Open your browser:**
    Visit `http://localhost:5173` to see your portfolio running locally.

## 📧 Contact

Feel free to reach out to me for collaborations, questions, or just to say hello!

*   **Email:** `sarowarsagor760@gmail.com`

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

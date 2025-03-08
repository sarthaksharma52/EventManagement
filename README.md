# Centralized College Event Management System

**The Centralized College Event Management System** is a MERN stack application built to streamline event management within a college. It allows college clubs to apply for hosting events, faculty members to approve them hierarchically, and students to browse, register, and pay for events.

## Features

- **Club Event Applications**: College clubs can propose events for approval.
- **Hierarchical Approval System**: Events go through multiple approval stages (Club Coordinator → Club Director → Higher Authorities).
- **Event Listing**: Students can browse ongoing and upcoming events.
- **Event Registration**: Students can register for events and make online payments.
- **Admin Dashboard**: Faculty members can review, approve, or reject event proposals.

## Technologies Used

- **Frontend**: React.js (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Payment Gateway**: (To be integrated - Stripe/Razorpay/etc.)
- **State Management**: Redux (Optional)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd event-management
   ```

2. Install dependencies:
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     PAYMENT_GATEWAY_KEY=<your_payment_key>
     PORT=5000
     ```

4. Start the application:
   ```bash
   # Start the backend
   cd backend
   npm start

   # Start the frontend
   cd ../frontend
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Folder Structure

- `backend/`: Contains the server-side code, API routes, and database models.
- `frontend/`: Contains the client-side application built with React.js.

## Future Enhancements

- **Automated Notification System** (Email/SMS alerts)
- **Event Analytics Dashboard**
- **QR Code-based Check-in System**

## License
MIT License


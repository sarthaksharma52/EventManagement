Centralized College Event Management System

Description

The Centralized College Event Management System is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It streamlines the process of organizing and managing events within a college. The system allows college clubs to apply for event hosting, undergo hierarchical approval from faculty members, and enable students to view, register, and pay for events online.

Features

Club Event Applications: College clubs can propose events for approval.

Hierarchical Approval System: Events go through multiple approval stages (Club Coordinator → Club Director → Higher Authorities).

Event Listing: Students can browse ongoing and upcoming events.

Event Registration: Students can register for events and make online payments.

Admin Dashboard: Faculty members can review, approve, or reject event proposals.

Tech Stack
Frontend: React.js (Vite)

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Token)

Payment Gateway: (To be integrated - Stripe/Razorpay/etc.)

State Management: Redux (Optional)

Installation & Setup
Prerequisites
Ensure you have the following installed:

Node.js

MongoDB (Local or Atlas)

Backend Setup
  cd backend
  npm install
  npm start
  
Frontend Setup
  cd frontend
  npm install
  npm run dev
  
Environment Variables
  Create a .env file in the root of the backend with the following:

MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PAYMENT_GATEWAY_KEY=<your-payment-key>

Usage

1.Clubs submit event proposals.
2.Faculty members review and approve/reject proposals hierarchically.
3.Approved events are listed for students to view.
4.Students register and pay for events.


Future Enhancements
  1.Automated Notification System (Email/SMS alerts)
  2.Event Analytics Dashboard
  3.QR Code-based Check-in System

License
MIT License

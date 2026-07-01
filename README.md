Notification App

Overview :
This project is a React-based notification application that fetches notifications from a REST API and displays them in a clean user interface. Users can filter notifications by category.

Features :
Fetch notifications from REST API
Display notification count
Filter notifications by:
All
Placement
Result
Event
Loading indicator
Error handling
Responsive UI
Material UI components
Tech Stack
React
Vite
JavaScript
Material UI
Fetch API
Project Structure
src/
├── api/
│   └── notifications.js
├── components/
│   ├── NotificationCard.jsx
│   └── NotificationFilter.jsx
├── hooks/
│   └── useNotifications.js
├── pages/
│   └── NotificationsPage.jsx
├── App.jsx
├── main.jsx
└── index.css
Installation
npm install
Run the Project
npm run dev

The application will run at:
http://localhost:5173

Functionality :
Retrieves notifications from the API.
Displays notifications as cards.
Filters notifications by category.
Shows loading and error states.

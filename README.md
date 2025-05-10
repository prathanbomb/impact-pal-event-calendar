# Impact Pal Event Calendar

This is a Next.js application for displaying an event calendar.

## Features

*   Displays a calendar with events.
*   Shows event details on hover.
*   Modern UI.

## Technologies Used

*   Next.js
*   React
*   Tailwind CSS
*   Firebase (for deployment)
*   React Icons
*   NextUI (for UI components)

## Getting Started

1.  **Prerequisites:**
    *   Node.js and npm (or yarn) installed.
    *   Firebase CLI installed (for deployment).

2.  **Installation:**

    ```bash
    git clone [your-repository-url]
    cd impact-pal-event-calendar
    npm install
    # or
    yarn install
    ```

3.  **Running the application:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

This application is deployed to Firebase Hosting.

1.  **Build the application:**

    ```bash
    npm run build
    # or
    yarn build
    ```

2.  **Deploy to Firebase:**

    ```bash
    npm run deploy
    # or
    yarn deploy
    ```

    Make sure you have initialized Firebase in your project using `firebase init`.

## Project Structure

```
impact-pal-event-calendar/
├── .firebaserc          # Firebase configuration file
├── firebase.json        # Firebase hosting configuration
├── node_modules/        # Project dependencies
├── package.json         # Project dependencies and scripts
├── public/              # Static assets (e.g., images)
├── src/
│   ├── app/             # Next.js application files
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── manifest.js
│   │   ├── page.js      # Main page component
│   │   └── providers.js
│   ├── components/      # React components
│   │   └── Calendar.js  # Calendar component
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## License

[Your License Here - e.g., MIT]

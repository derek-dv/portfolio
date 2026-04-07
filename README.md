# Portfolio

This codebase is a standard Next.js application using the app router, TypeScript, and Tailwind CSS.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd portfolio
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the Next.js development server, run:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:

```
npm run build
```

To serve the production build locally:

```
npm start
```

### Environment Variables

The contact form uses a Next.js API route and expects these environment variables:

- `COMMUNICATION_SERVICES_CONNECTION_STRING`
- `SENDER_EMAIL_ADDRESS`

### Folder Structure

- `app/`: Next.js app router pages, layout, and API routes.
- `src/`: Shared React components, styles, and data.
- `public/`: Contains static assets served by Next.js.
- `package.json`: Contains project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: Documentation for the project.

### License

This project is licensed under the MIT License.

# Web Graph Client

This project is a web application that fetches data from an API and displays it in various predefined graphs. It is built using React and TypeScript.

## Features

- Fetches data from a specified API endpoint.
- Allows users to select different types of graphs to visualize the data.
- Utilizes a graphing library to render the graphs.

## Project Structure

```
web-graph-client
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.tsx            # Main application component
│   ├── api
│   │   └── index.ts       # API request functions
│   ├── components
│   │   ├── GraphDisplay.tsx # Component for displaying graphs
│   │   └── GraphSelector.tsx # Component for selecting graph type
│   ├── types
│   │   └── index.ts       # TypeScript interfaces
│   └── styles
│       └── App.css        # CSS styles for the application
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/web-graph-client.git
   ```
2. Navigate to the project directory:
   ```
   cd web-graph-client
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.
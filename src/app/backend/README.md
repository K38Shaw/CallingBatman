# Backend Service (Node.js with Jest Testing)

This directory contains the backend service for the fullstack application. It is a Node.js-based service.

## Setup Instructions

### Environment Variables

- Create a `.env` file in this directory.
- Add the following environment variables:

  ```bash
  PORT=8000
```

### Docker Setup
1. The Dockerfile fefines the configuration for the Node.js backend service.
2. Build and run the container:
```
docker-compose up --build
```
### Running the Backend Locally
You can also run the backend locally without Docker:
1. Install dependencies:
```
npm install
```
2. Start the backend:
```
npm start
```
### Testing
Tests are located in the __tests__ directory. Run the tests with:
```
npm test
```
### API Structure
src/
├── app.js          # Main Express.js application




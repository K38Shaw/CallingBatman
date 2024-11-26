
# GT-Jest-TEMPLATE

This project is a fullstack application with a **Node backend**, orchestrated using **Docker Compose**.

## Project Structure

```
├── README.md                # Main project documentation
├── docker-compose.yml       # Defines services for backend and client
├── azure-pipelines.yml      # Azure DevOps pipeline for CI/CD
├── .env                     # Root environment variables (shared between backend and client)
├── .gitignore               # Git ignore rules for the entire project
├── src
│   └── app
│       ├── backend
│          ├── __tests__            # Unit/Integration tests for backend
│          ├── README.md            # Backend-specific documentation
│          ├── .env                 # Backend-specific environment variables
│          ├── Dockerfile           # Docker setup for the backend
│          ├── .dockerignore        # Ignore files for backend Docker context
│          └── src                  # Source code for the backend
│          └── logs/                # Directory for logs, can be mounted to host
│       
```

## Setup Instructions

## Branch Naming Conventions

In this project, all branches must follow the naming conventions listed below to ensure consistent and clear communication of branch purposes:

- **Main Branch**:  
  Branch name: `main`  
  Purpose: The stable and production-ready branch containing the latest version of the application.

- **Release Branches**:  
  Branch name format: `Release-ReleaseNumber`  
  Example: `Release-1.0`  
  Purpose: Used for preparing and finalizing a release version, ensuring stability before merging into the main branch.

- **Version Branches**:  
  Branch name format: `V-VersionNumber`  
  Example: `V-2.0.1`  
  Purpose: Maintains a versioned codebase, primarily for bug fixes or patches related to a specific version.

- **Feature Branches**:  
  Branch name format: `Feature-FeatureNumber-ResourceName`  
  Example: `Feature-0000-JohnDoe`  
  Purpose: Created for working on new features or improvements. Once the feature is complete, it will be merged into the relevant version or release branch.

- **User Story Branches**:  
  Branch name format: `US-UserStoryNumber-ResourceName`  
  Example: `US-0000-JohnDoe`  
  Purpose: These branches are tied to specific user stories in Azure DevOps, and they help track progress on a particular resource or component.


## Branch Naming Conventions

In this project, all branches must follow the naming conventions listed below to ensure consistent and clear communication of branch purposes:

- **Main Branch**:  
  Branch name: `main`  
  Purpose: The stable and production-ready branch containing the latest version of the application.

- **Release Branches**:  
  Branch name format: `Release-ReleaseNumber`  
  Example: `Release-1.0`  
  Purpose: Used for preparing and finalizing a release version, ensuring stability before merging into the main branch.

- **Version Branches**:  
  Branch name format: `V-VersionNumber`  
  Example: `V-2.0.1`  
  Purpose: Maintains a versioned codebase, primarily for bug fixes or patches related to a specific version.

- **Feature Branches**:  
  Branch name format: `Feature-FeatureNumber-ResourceName`  
  Example: `Feature-0000-JohnDoe`  
  Purpose: Created for working on new features or improvements. Once the feature is complete, it will be merged into the relevant version or release branch.

- **User Story Branches**:  
  Branch name format: `US-UserStoryNumber-ResourceName`  
  Example: `US-0000-JohnDoe`  
  Purpose: These branches are tied to specific user stories in Azure DevOps, and they help track progress on a particular resource or component.


### Prerequisites

To run this project, ensure you have the following installed:

- **Git** for cloning the repository: [Download Git](https://git-scm.com/downloads)
- **Docker** for container management: [Download Docker](https://www.docker.com/get-started)
- **Docker Compose** for orchestrating multi-container Docker applications: [Docker Compose installation](https://docs.docker.com/compose/install/)

### Downloading the Project

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/goodlandtech/GT-Jest-Template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd GT-Jest-Template
   ```

### Setting up Environment Variables

- **Global `.env` file**: Create a `.env` file in the root directory for shared environment variables between the backend and frontend.
- **Backend `.env` file**: Create a `.env` file in the `src/app/backend` directory for backend-specific environment variables.
- **Frontend `.env` file**: Create a `.env` file in the `src/app/frontend` directory for frontend-specific environment variables.

### Building and Running the Project

1. **Build and run the services** using Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. Access the frontend at `http://localhost:3000` and the backend at `http://localhost:8000`.

### Technologies Used


- **Jest** for testing  
- **Docker Compose** to manage containers




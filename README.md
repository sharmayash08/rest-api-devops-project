# REST API with Docker, Terraform, and Jenkins

This repository contains a simple REST API built with Node.js and Express.js. The project leverages Docker for containerization, Terraform for infrastructure provisioning, and Jenkins for creating a CI/CD pipeline.

## Features

- REST API built using Node.js and Express.js.
- Environment variables managed with a `.env` file.
- Dockerized application for consistent deployment.
- Infrastructure provisioned using Terraform.
- CI/CD pipeline configured with Jenkins for automated testing and deployment.

---

## Project Structure

```
├── src/               # API source code
├── Dockerfile         # Docker configuration
├── .env               # Environment variables file
├── terraform/         # Terraform configuration files
├── Jenkinsfile        # Jenkins pipeline configuration
├── package.json       # Node.js dependencies
└── README.md          # Project documentation
```

---

## Prerequisites

Ensure you have the following tools installed on your machine:

- **Node.js** (v16.x or later)
- **Docker**
- **Terraform**
- **Jenkins**
- **Git**

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory. Define the necessary variables as per the example below:
```
PORT=3000
```

### 4. Build and Run the Application with Docker

#### a. Build Docker Image
```bash
docker build -t rest-api .
```

#### b. Run Docker Container
```bash
docker run -p 3000:3000 --name rest-api-container rest-api:latest
```

---

## Infrastructure Provisioning with Terraform

### 1. Initialize Terraform
```bash
cd terraform
terraform init
```

### 2. Plan Infrastructure Changes
```bash
terraform plan
```

### 3. Apply Infrastructure Changes
```bash
terraform apply
```
> Confirm with `yes` when prompted.

---

## CI/CD Pipeline with Jenkins

### 1. Create a Jenkins Pipeline

- Open Jenkins and create a new pipeline job.
- Connect your repository to Jenkins.
- Add the Jenkinsfile to your repository root


### 2. Configure Jenkins Environment

- Set up Jenkins credentials for Docker , AWS and Git
- Install necessary plugins: `Docker`, `Pipeline`, and `Git` plugins.

### 3. Trigger the Pipeline

- Trigger the pipeline manually or set up webhook integration for automatic builds.

---

## Testing

### Run Tests Locally
```bash
npm test
```

### Run API Tests with Postman or Curl

#### Example Request:
```bash
curl -X GET http://localhost:3000/
```

---

## Cleanup

### Stop and Remove Docker Containers
```bash
docker stop $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Destroy Infrastructure
```bash
cd terraform
terraform destroy
```
> Confirm with `yes` when prompted.

---

## Contributing

Feel free to submit issues or pull requests to improve this project.

---

## License

This project is licensed under the MIT License.


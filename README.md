# Task Manager API

![API Testing Screenshot](./api-screenshot.png) *(Add Postman/curl test screenshot later)*

A robust Node.js backend for task management applications, featuring:

- JWT authentication
- MySQL database integration
- RESTful API design
- Error handling and validation

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/tasks` | GET | Get all tasks |
| `/api/tasks` | POST | Create new task |
| `/api/tasks/:id` | PATCH | Update task |
| `/api/tasks/:id` | DELETE | Delete task |

## Technologies Used
- Node.js 18+
- Express 5.x
- MySQL2 (with connection pooling)
- JWT authentication
- BcryptJS (password hashing)
- Dotenv (environment variables)

## Database Schema
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

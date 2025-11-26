# Coursify
**Live Demo:** [https://coursify50.netlify.app/](https://coursify50.netlify.app/)

Coursify is a modern web application for managing and exploring online courses. Built with **Next.js** and **JavaScript** on the frontend, and **Express.js** with **MongoDB** on the backend, it provides a smooth experience for adding, viewing, and managing courses.

---

## Features

- **Add Course** (Protected) – Only authenticated users can add new courses.
- **View Courses** – Browse all available courses.
- **Course Details** (Protected) – Access detailed information about a course (requires login).
- **Manage Courses** (Protected) – Edit or delete courses (requires login).

---

## Tech Stack

- **Frontend:** Next.js, JavaScript, Swiper.js (for carousel)
- **Backend:** Express.js, MongoDB
- **Authentication:** Clerk Authentication
- **Styling:** Tailwind CSS, DaisyUI

---


---

## Routes Summary

| Route             | Method | Description                          | Protected |
|------------------|--------|--------------------------------------|-----------|
| `/addCourse`      | POST   | Add a new course                      | Yes       |
| `/courses`        | GET    | Get all courses                       | No        |
| `/details/:id`    | GET    | Get details of a specific course      | Yes       |
| `/manageCourse`   | GET/DELETE | Manage existing courses          | Yes       |

---

## Installation (Local Setup)

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/sohancse53/coursify-next-client.git
cd coursify-next-client
npm install



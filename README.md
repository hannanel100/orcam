# ~~Redacted Company Name~~ Home Task Sveltkit App

This repository contains the solution for the ~~Redacted Company Name~~ Home Task implemented using Sveltkit, a framework for building web applications with Svelte.

## Table of Contents

- [~~Redacted Company Name~~ Home Task Sveltkit App](#redacted-company-name-home-task-sveltkit-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Usage](#usage)


## Introduction

The ~~Redacted Company Name~~ Home Task Sveltkit App is a single-page application built using Sveltkit, TypeScript, and Svelte Router. It allows users to view a list of users and access their details. The application also includes an About page providing additional information.

## Features

The ~~Redacted Company Name~~ Home Task Sveltkit App offers the following features:

1. Users List: Displays a paginated list of users fetched from the DB using Prisma.
2. User Details: Fetches and displays the details of a selected user from the db using Prisma
3. Routing: Utilizes the Svelte Router for seamless navigation between pages.
4. About Page: Presents information about the application.

## Technologies

1. Svelte
2. Sveltkit
3. Typescript
4. Prisma
5. PostgresSql

## Getting Started

To get started with the ~~Redacted Company Name~~ Home Task Sveltkit App, follow these steps:

1. Clone the repository: `git clone https://github.com/hannanel100/sveltekit-home-task.git`
2. Navigate to the project directory: `cd sveltekit-home-task`
3. Install the dependencies: `npm install`
4. Initialize prisma: `npx prisma init`
5. Replace .env.example with your own connection variables and change to .env
6. Run `npx prisma migrate dev --init` this will initialize the tables and seed the db
7. Build the application: `npm run build`
8. Start the application: `npm run start`

## Usage

Once the application is up and running, you can access it by opening the following URL in your web browser: `http://localhost:5173`

The application consists of the following pages:

1. Users List: Displays a paginated list of users fetched from the db using the fetchUsers function witch accept a limit, skip and sort parameters that are used for pagination and sorting. The list includes basic information about each user, such as name and email. Clicking on a user will navigate to the User Details page.

2. User Details: Fetches and displays the details of a selected user. The user details include additional information such as address, phone number, etc. The user hash is passed as a route parameter to fetch the specific user's details using the fetchUser function to fetch users from db.

3. About Page: Provides information about the ~~Redacted Company Name~~ Home Task Sveltkit App.



# Orcam Home Task Sveltkit App

This repository contains the solution for the Orcam Home Task implemented using Sveltkit, a framework for building web applications with Svelte.

## Table of Contents

- [Orcam Home Task Sveltkit App](#orcam-home-task-sveltkit-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [APIs](#apis)


## Introduction

The Orcam Home Task Sveltkit App is a single-page application built using Sveltkit, TypeScript, and Svelte Router. It allows users to view a list of users and access their details. The application also includes an About page providing additional information.

## Features

The Orcam Home Task Sveltkit App offers the following features:

1. Users List: Displays a paginated list of users fetched from the Users List API.
2. User Details: Fetches and displays the details of a selected user using the Fetch User Details API.
3. Routing: Utilizes the Svelte Router for seamless navigation between pages.
4. About Page: Presents information about the application.

## Getting Started

To get started with the Orcam Home Task Sveltkit App, follow these steps:

1. Clone the repository: `git clone https://github.com/hannanel100/orcam.git`
2. Navigate to the project directory: `cd orcam`
3. Install the dependencies: `npm install`
4. Configure the application by setting up the required environment variables.
5. Build the application: `npm run build`
6. Start the application: `npm run start`

## Usage

Once the application is up and running, you can access it by opening the following URL in your web browser: `http://localhost:5173`

The application consists of the following pages:

1. Users List: Displays a paginated list of users fetched from the Users List API. The list includes basic information about each user, such as name and email. Clicking on a user will navigate to the User Details page.

2. User Details: Fetches and displays the details of a selected user. The user details include additional information such as address, phone number, and registration date. The user ID is passed as a route parameter to fetch the specific user's details using the Fetch User Details API.

3. About Page: Provides information about the Orcam Home Task Sveltkit App.

## APIs

The Orcam Home Task Sveltkit App utilizes the following APIs:

1. Users List API:
   - Endpoint: `https://admin.dev.orcam.io/api/v8/users?page={page}&size={size}&sort=email:desc`
   - Method: GET
   - Headers: `Authorization: accessKey {accessKey}`
   - Description: Fetches a paginated list of users. Replace `{page}` with the desired page number, `{size}` with the number of users per page, and `{accessKey}` with the API access key.

2. User Details API:
   - Endpoint: `https://admin.dev.orcam.io/api/v8/users/{userId}`
   - Method: GET
   - Headers: `Authorization: accessKey {accessKey}`
   - Description: Fetches the details of a specific user. Replace `{userId}` with the ID of the user to retrieve, and `{accessKey}` with the API access key.


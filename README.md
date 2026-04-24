# Vue 3 + TypeScript + Vite

## Overview

This application tracks the food you eat during the day. The home page lists all logged meal entries.
Click the meal title or image to open the details page, where you can view more information and go to edit.

This application is built in Vue with local dummy meal data. Future versions will use real data from a REST service.

### Donut Health Ranking

Each meal can be ranked from 1 to 5 using donut icons (instead of stars):

- On the gallery page, each meal card includes a clickable donut ranking control.
- On the details page, the same ranking control is available and stays in sync with gallery updates.
- Rankings are applied immediately when clicked.

### Supported Operations

This version of the app currently supports **RUD** operations (not Create):

- **Read**: View meals in gallery and details pages.
- **Update**: Edit meal name, description, image URL, and health rank.
- **Delete**: Delete a meal from the edit page with a confirmation prompt.
- **Not included**: Create/new meal flow is not implemented yet.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm run dev
   ```

## Deployment Link

[https://assignment-5-vuejs.onrender.com/](https://assignment-5-vuejs.onrender.com/)

## CHAT PROMPT Reflections

My reflections on the prompts used to complete this assignment can be found here [AI-reflections.md](AI-reflections.md)

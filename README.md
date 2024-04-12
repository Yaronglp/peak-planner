# Peak Planner

## Table of Contents
1. [Overview](#overview)
2. [Setup & Scripts](#setup--scripts)
   - [Setup](#setup)
   - [Scripts](#scripts)
3. [Specs](#specs)
   - [UI Design](#ui-design)
     - [Components Overview](#components-overviewhigh-level)
     - [Component Structure](#component-structurehigh-level)
     - [FSM Structure](#fsm-structure)
     - [FSM Init Flow](#init-flow)
4. [Future Tasks](#future-tasks)
   - [Short Run](#short-run)
   - [Long Run](#long-run)

## Overview
Peak Planner is a task management application designed to help users efficiently manage their daily tasks.
The application is using a finite state machine (FSM) for seamless state transitions and task updates.

## Setup & Scripts

### Setup:

1. Clone the repository: ```git clone https://your-repository-url```
2. Run the right node version\
  2.1. Using nvm, run ```nvm use``` to switch to the node version required for the project.\
  2.2  Else, verify you are running the node version specified in the ```.nvmrc```.
3. Install dependencies by running ```npm install```.

### Scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm start:server`

Runs a local JSON server, allowing CRUD operations on a mock database located in the project (under the DB folder).

### `npm plop`

A micro-template generator for creating new components.

### `npm test:unit`

Launches Jest in interactive watch mode for performing unit tests.

### `npm test:e2e`

Launches Cypress to conduct end-to-end tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

# Specs
## UI Design:
### Components overview(High Level):
![alt text](/assets/comp-overview.png)

### Component structure(High Level):
![alt text](/assets/comp-structure.png)

### FSM structure:
![alt text](/assets/finite-state-machine.png)

### Init flow:
![alt text](/assets/finite-state-machine-init.png)

## Future tasks:
### Short run
- [ ] Dialog for Deleting Tasks - Implement a confirmation dialog to verify if the user intends to delete a task.
- [ ] Offline Capabilities with LocalStorage - Enable CRUD operations offline, saving changes to LocalStorage. Sync with the server once online.
- [ ] Sortable Table Columns - Integrate column sorting functionality using the UI library.
- [ ] Due Date for Tasks - Introduce a 'Due Date' property for tasks, implementing date handling functionality.
- [ ] Error Component - enhance error message while action failed. 
- [ ] Theme Customization - Allow users to choose a theme based on media preferences or saved settings.
- [ ] Extract FSM into a different package.
- [ ] Multi-Select Operations - Allow multiple tasks to be selected for bulk actions such as delete or priority change.

### Long run
- [ ] Live update - Polling/SSE/Websocket to reflect task changes made by other users.
- [ ] Mentions - Enable mentioning of users in task descriptions to notify involved parties.
- [ ] Notifications - Send email notifications for task updates, using tools like Mailchimp.
- [ ] Permission system - Develop a permission system with roles like Admin, Editor, and Viewer.
- [ ] Comments - Ability to write comments on tasks, for collaborations, discussion and clarifications.
- [ ] Support i18n for multiple language

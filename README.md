## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm plop`

Micro template generator to create new components.

### `npm test:unit`

Launches Jest in interactive watch mode to perform unit tests.

### `npm test:e2e`

Launches Cypress to perform e2e tests.

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

## Future tasks:
### Short run
- [ ] Dialog while delete task - Open dialog and verify if the user sure to perform the deletion action.
- [ ] LocalStorage - Ability to work offline - view / create / edit / delete - the idea is to perform crud actions and to save it to LS, when the user back to be online, after fetch tasks, there will be a side effect to sync between the latest data from the LS.
- [ ] Sort table by different columns - Could be achieved by the UI library.
- [ ] Add new property for task's due date - add Date type for the Task entity and support date functionality.
- [ ] Support Theme change - use media preferred or saved preference for the user Theme selection.
- [ ] Extract FSM into a different package.
- [ ] Multiple Items - Capability to check more than one task and perform actions like delete, change prioritization etc.

### Long run
- [ ] Live update - Polling/SSE/Websocket to get updates when other users are changing tasks.
- [ ] Mentions - Ability to add mentions in tasks and to inform other users.
- [ ] Notifications - Send emails on collaborations or changes by tags or assignee changes for tasks - can be achieved by Mailchimp or any other vendor.
- [ ] Permission system - capability to implement roles like Admin, Editor, Viewer
- [ ] Comments - Ability to write comments on tasks, for collaborations, discussion and clarifications.
- [ ] Support i18n for multiple language

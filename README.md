# Eco Kitchen

A full stack app created in React that is mobile first designed to helps users manage their food consumption, reduce waste and save money. A one-stop app that lets you add items to your kitchen, discover recipes, track expiry dates or manage your shopping list. Created in an agile team of 6 called console.loggers() and planned, prepared and presented to industry professionals in 5 weeks.

## Setup and Usage 

Available to view on netlify live server - https://eco-kitchen.netlify.app/

Recommended viewing is for mobile devices, if opening on desktop then use mobile simulator or head over to Developer Tools (Ctrl+Shift+I) in the browser settings (Google Chrome) and toggle the device toolbar to iPhone 12 Pro.

**Known Bugs/Errors:**

- Adding more than 1 item to pantry, fridge or shopping list causes it delete incorrectly if using the tick button to say the item is used. Bin button can be used to waste item to delete instead. **FIXED**

- Refreshing the page invalidates the session token so must go back to initial landing page to sign back in



## Tech Stack

**Client:** React, JavaScript, HTML, CSS, Supabase, Chart.js, Jest, Netlify


## Git Branching Strategy

### Branches

- `main`: Contains the Minimum Viable Product (MVP). Only well-tested and reviewed code that is considered ready for production is merged into this branch.
- `development`: Serves as the staging area for integrating code from the `frontend` and `backend` branches.
- `frontend`: Contains complete features that form part of the app's frontend.
- `backend`: Contains complete features that form part of the app's backend.

### Best Practices

- Pull the latest changes from the parent branch frequently.
- Keep feature branches focused – one branch per feature.
- Write meaningful commit messages.
- Resolve merge conflicts as soon as they arise.
- Communicate with your team members.

### Workflow

1. **Create Feature Branch**: Create a new branch off from either `frontend` or `backend` for your new feature. Name it descriptively, e.g., `feature/navbar`.

2. **Work on your Feature**: Make changes, commit them, and push the branch to GitHub.

3. **Create Pull Request**: Once the feature is complete, create a pull request to merge it into `frontend` or `backend`.

4. **Code Review and Testing**: Other team members review the code and provide feedback. Make any necessary changes.

5. **Merge to Development**: When the feature is stable, merge it into the `development` branch.

6. **Final Review and Merge to Main**: After thorough testing and when the `development` branch is production-ready, merge it into the `main` branch.

### Example

1. **Create a new feature branch from frontend**

git checkout frontend

git pull origin frontend

git checkout -b feature/navbar

**...work on the feature...**

2. **Push your feature branch to the remote repository**

git push origin feature/navbar

3. **Create a pull request to merge into frontend:** Use github for this

4. **Review code, conduct tests, and merge into frontend**

5. **Merge frontend into development once it's stable**

git checkout development

git pull origin development

git merge frontend

git push origin development

6. **After thorough testing, merge development into main for production**

git checkout main

git pull origin main

git merge development

git push origin main



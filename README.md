# Console-loggers-App

DEVELOPMENT BRANCH ahia
note by carrie & saynab

test by carrie


# Problem Statement

“In the UK, many households waste a significant portion of their food costs due to poor planning, lack of culinary ideas, and poor use of leftovers. There is no current solution that solves these problems simultaneously.

<p>
Our challenge is to make an easy-to-use app to helps users manage their food consumption, reduce waste and save money.”

Welcome to our project! This document describes our Git branching strategy, which is designed to ensure that new features are properly tested before they are merged into the main branch.

# Git Branching Strategy

## Branches

- `main`: Contains the Minimum Viable Product (MVP). Only well-tested and reviewed code that is considered ready for production is merged into this branch.
- `development`: Serves as the staging area for integrating code from the `frontend` and `backend` branches.
- `frontend`: Contains complete features that form part of the app's frontend.
- `backend`: Contains complete features that form part of the app's backend.

## Best Practices

- Pull the latest changes from the parent branch frequently.
- Keep feature branches focused – one branch per feature.
- Write meaningful commit messages.
- Resolve merge conflicts as soon as they arise.
- Communicate with your team members.

## Workflow

1. **Create Feature Branch**: Create a new branch off from either `frontend` or `backend` for your new feature. Name it descriptively, e.g., `feature/navbar`.

2. **Work on your Feature**: Make changes, commit them, and push the branch to GitHub.

3. **Create Pull Request**: Once the feature is complete, create a pull request to merge it into `frontend` or `backend`.

4. **Code Review and Testing**: Other team members review the code and provide feedback. Make any necessary changes.

5. **Merge to Development**: When the feature is stable, merge it into the `development` branch.

6. **Final Review and Merge to Main**: After thorough testing and when the `development` branch is production-ready, merge it into the `main` branch.

## Example

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

7. Testing revert by carrie

# develoment is a secondary main but breakable and won't effect main
 - Front end
    - Page branches
- back end
    - page branches
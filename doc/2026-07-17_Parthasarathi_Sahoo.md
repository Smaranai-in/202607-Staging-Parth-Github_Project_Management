# Daily Learning Report

**Name:** Parthasarathi Sahoo  
**Date:** 17 July 2026  
**Topic:** GitHub Issues, Labels, Branching Strategy and Pull Request Workflow

---

# Objective

Today's objective was to understand how GitHub is used in software development teams for project management and collaboration. The focus was on learning GitHub Issues, Feature and Bug management, Labels, Assignees, Branching Strategy, Pull Requests, and Automatic Issue Closing.

---

# 1. GitHub Issues

## What I Learned

GitHub Issues are used to manage project tasks, feature requests, bug reports, and improvements. Instead of maintaining tasks in Excel or chat messages, development teams create Issues so every task can be tracked.

Each Issue contains:
- Title
- Description
- Labels
- Assignee
- Comments
- Status (Open/Closed)

This helps the entire team understand what needs to be developed or fixed.

## Practical Work

I created multiple Issues representing project requirements such as:

- User Login
- User Registration
- Dashboard
- User Profile
- Forgot Password

I also created Bug Issues such as:

- Login button not working
- Dashboard loading slowly
- Profile image not displaying

---

# 2. Feature List and Bug List

## What I Learned

A Feature represents new functionality that will be developed.

Examples:
- Login
- Registration
- Dashboard

A Bug represents an issue in existing functionality.

Examples:
- Login button not responding
- Dashboard performance issue

Instead of maintaining separate documents, GitHub organizes both Features and Bugs using Issue Labels.

## Practical Work

I created Feature and Bug Issues separately and categorized them using labels.

---

# 3. Labels and Priority Management

## What I Learned

Labels help organize Issues based on their type and importance.

I learned how labels help filter Issues quickly in large projects.

Labels created:

- feature
- bug
- priority: high
- priority: medium
- priority: low

This enables developers and project managers to identify critical work easily.

## Practical Work

Applied labels to every Issue based on its type and priority.

---

# 4. Assignees

## What I Learned

Assignees define who is responsible for completing an Issue.

This improves accountability because every task has an owner.

## Practical Work

Assigned Issues to myself to simulate a real development workflow.

---

# 5. Git Branching Strategy

## What I Learned

Developers should never work directly on the main branch.

A separate branch is created for every feature or enhancement.

Benefits include:

- Isolated development
- Safe collaboration
- Easier code review
- No impact on production code

## Practical Work

Created a development branch:

enhancement/User-Login

and performed all development work inside this branch.

---

# 6. Git Commit

## What I Learned

A commit represents a snapshot of project changes.

Commits help maintain project history and allow developers to understand what changes were made.

## Practical Work

Modified the README file and committed the changes using Git.

---

# 7. Git Push

## What I Learned

Git Push uploads local commits to the remote GitHub repository.

This allows other team members to access the latest work.

## Practical Work

Successfully pushed my development branch to GitHub.

---

# 8. Pull Request

## What I Learned

A Pull Request (PR) is created after completing development work.

It allows reviewers to inspect the code before merging it into the main branch.

The Pull Request process improves code quality through review and discussion.

## Practical Work

Created a Pull Request for the User Login feature with an appropriate title and description.

---

# 9. Automatic Issue Closing

## What I Learned

GitHub automatically closes an Issue when a Pull Request containing keywords such as:

Closes #1

is merged.

This automates project tracking and reduces manual work.

## Practical Work

Added **Closes #1** inside the Pull Request description.

After merging the Pull Request, GitHub automatically closed Issue #1.

---

# Workflow Understood

The complete workflow practiced today is:

Requirement
↓

Create Issue
↓

Assign Developer
↓

Create Development Branch
↓

Develop Feature
↓

Commit Changes
↓

Push Branch
↓

Create Pull Request
↓

Code Review
↓

Merge Pull Request
↓

Issue Closed Automatically

---

# Challenges Faced

Initially, I was confused about the relationship between Issues, Branches, and Pull Requests.

I also learned the difference between Feature branches and Feature Issues and understood how GitHub manages project tasks through Issues rather than branches.

---

# Key Takeaways

Today's learning helped me understand how software companies manage project development using GitHub.

I learned the complete workflow from creating Issues to automatically closing them after successful Pull Request merging.

This practical session provided hands-on experience with GitHub's project management features and improved my understanding of collaborative software development.

---

# Next Learning Plan

Tomorrow I will learn:

- GitHub Projects
- GitHub Milestones
- GitHub Wiki
- Project Planning
- Sprint Management
- Task Tracking
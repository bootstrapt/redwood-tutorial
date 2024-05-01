# Redwood Tutorial App

This is my implementation of the Redwood Tutorial App.

Features:
- Blog feed and article views
- Blog posting, editing, and deleting with Role Based Access Control (RBAC)
- Basic commenting system with RBAC moderation
- Basic access control: login, signup, and logout
- Contact page

Improvements to the standard tutorial:
- added admin role to moderator delete comment function
- added corresponding storybook views and test coverage
- all tests pass

Improvements needed:
- complete test coverage: add adminPosts
- don't show ellipsis on summary if body length < 100
- account management
- user management (admin only)
- contact us form response view (admin only)

## Setup

The [tutorial itself](https://redwoodjs.com/docs/tutorial/chapter1/prerequisites) contains instructions for getting this repo up and running, but here is a summary of the commands:

```bash
git clone https://github.com/redwoodjs/redwood-tutorial
cd redwood-tutorial
yarn install
yarn rw prisma migrate dev
yarn rw prisma db seed
yarn rw dev
```

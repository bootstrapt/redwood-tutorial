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
- add name to signup form
- complete test coverage: add adminPosts
- don't show ellipsis on summary if body length < 100
- account management
- user management (admin only)
- contact us form response view (admin only)

Notes:
- comments tests fail after db migration `add userId to post`
- `web/src/components/Post/EditPostCell/EditPostCell.js` did not have the function `EditPostById`, it also does not appear in their [repo](https://github.com/redwoodjs/redwood-tutorial/blob/4f17151f7fffb03593f9451bf5e307676e569b3c/web/src/components/Post/EditPostCell/EditPostCell.js#L7)
- added missing user-related fields to scenarios and tests, see commit history
- Redwood mentions you can update but kept it at same version for tutorial

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

Resetting dev database:
```bash
yarn rw prisma migrate reset
```

Adding admin user role:
```bash
yarn rw c
> db.user.update({ where: { id: 1 } , data: { roles: 'admin' } })
```

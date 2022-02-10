### Transearch is an example app using MongoDB Atlas Search

This project is about the MongoDB Atlas Search and a quick view of how easy it is to integrate it into your future projects. This project was initialized with my Next.js starter template. What this project does is like an account manager in charge of a company

```cmd
  // use the below code to clone the Next.js starter, Folder must be empty
  git clone https://github.com/viewcrunch/NextJs-starter-template.git .
  // cloning without the . will create a folder with the cloned repo
  git clone https://github.com/viewcrunch/NextJs-starter-template.git
```

> Update your remote origin
> `git remote set-url origin https://github.com/viewcrunch/Transearch.git` > `git branch -M main ` > `git push -u origin main `

Now you can run `npm install` or `npm i` to install packages in package.json

## Prerequisite

A basic understanding of the following is required to fully understand this code or learn from this project:

1. Javascript
2. MongoDB
3. Node.js
4. Next.js (better still React.js can help)
5. Fetcher

## About

Live preview can be found on Vercel [Transearch](https://transearch.vercel.app/) and [a post about the poroject on Medium](https://viewcrunch.medium.com/a-practical-example-using-mongodb-atlas-search-144ab2d4ed78).

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas Search](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

# Auth

This app uses a basic email/password auth, neglecting the http header, and using a direct redux store to store server result after auth. You don't need to have used redux to follow allow in this project.

Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.

# 🐈‍⬛ SPACE CATS - LOCAL SETUP

**_Space Cats_** is set up to deploy the application locally or via a hosting service.

_.env_ files in both the _frontend_ and _backend_ packages dictate the behaviour of **_Space Cats_**.

## 🐈‍⬛ SPACE CATS - BACKEND ENVIRONMENT VARIABLES

Create a _.env_ file in the root of the _backend_ directory and set the following variables:

```
NODE_ENV=PRODUCTION

FRONTEND_PROD_URL=https://space-cats.vercel.app

FRONTEND_LOCAL_URL=http://localhost:3000
```

The application will run locally if the _NODE_ENV_ variable does not equal _production_.

It would help if you also assigned values for the variables _PORT_, _TOKEN_KEY_ and _MONGO_URL_.

They are required for the application to run seamlessly.

## 🐈‍⬛ SPACE CATS - FRONTEND ENVIRONMENT VARIABLES

Create a _.env_ file in the root of the _frontend_ directory and set the following variables:

```
REACT_BACK_END_URL=https://space-cats-production.up.railway.app

REACT_APP_ENV=PRODUCTION
```

The application will run locally if the _REACT_APP_ENV_ variable does not equal _production_.

If the web server URL does not work, please use [backup web server](deployments.md) instead.

## 🐈‍⬛ SPACE CATS - BUILDING THE APPLICATION

To build the _backend_ from the _root_ directory, type in:

```
npm run start:backend
```

Likewise, to build the _frontend_ from the _root_ directory, use the command:

```
npm run start:backend
```

## 🐈‍⬛ SPACE CATS - TESTING THE APPLICATION

To run the _backend_ tests from the _root_ directory:

```
npm run test:backend
```

Likewise, to run the _frontend_ tests from the _root_ directory:

```
npm run test:frontend
```

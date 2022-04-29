# Global Requisites

* node (>= 10.5.0)
* tsc (>= 3.0.1)
* typescript (>= 3.0.1)
* mongoose (>= 3.6.2)

# App Structure

```bash
├── dist
├── public
├── src
│   ├── controllers
│   │   ├── Api
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── Auth
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── Account.ts
│   │   └── Home.ts
│   ├── exception
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── interfaces
│   │   ├── models
│   │   │   └── user.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── models
│   │   └── User.ts
│   ├── providers
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── routes
│   │   ├── Api.ts
│   │   └── Web.ts
│   ├── services
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── index.ts
├── views
│   ├── includes
│   ├── modals
│   ├── pages
│   ├── partials
│   ├── static
│   │   ├── css/*.css
│   │   └── js/*.js
│   └── layout.pug
├── .env
├── .gitignore
├── nodemon.json
├── package.json
├── README.md
├── tsconfig.json
└── tslint.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

Create .env file by copy from .env.example

```bash
cp .env.example .env
```

```bash
# Without Docker

# Note: It is assumed here that you have MongoDB running in the background and that you have created the database.

# Install NPM dependencies.
# Note: You can review the list of dependencies from the below link.
# https://github.com/faizahmedfarooqui/nodets/network/dependencies
npm install;

# Run the app
npm run start;
```

```bash
# With Docker

# Note: It is assumed here that you have Docker running in the background.

# Run the app in docker as a foreground process
docker-compose up

# Run the app in docker as a background process
docker-compose up -d
```


# API Routes:
```bash
  #With apis need auth. please add token in to Authorization key (Headers): Format; `Bearer ${token}`

  #payload Login: object with keys [email, password]
  #payload Register: object with keys [email, password, confirmPassword]
```
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/auth/login
  POST   | /api/auth/register
#Need auth
  GET   | /api/users/
  GET | /api/users/:id
+--------+-------------------------+
```

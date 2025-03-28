# Logs API

A simple API that where you can list and create logs in a database.

## Setup

### Prerequisites

* [Docker](https://www.docker.com/)
* [nvm](https://github.com/nvm-sh/nvm) - With node version `22.14.0`
* [Yarn](https://yarnpkg.com/)

1. Clone the Repository

  ```sh
    git clone https://github.com/FelixSundqvist/logs-api
    cd logs-api
  ```

2. Create `.env` file from `.env.example`
  ```sh
    cat .env.example > .env
  ```
3. Install dependencies

  ```sh 
    yarn
  ```

4. Start the database

  ```sh
    docker compose up
  ```

5. Open a new terminal window and start the server

```sh
 yarn dev 
```

6. Open http://localhost:3000 in a browser

## Stack

- Node
- Express.js
- Docker
- Typescript
- EJS
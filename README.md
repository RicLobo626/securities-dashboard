## Full Stack Exercise

### Project Setup and Instructions

#### 1. Install Docker

- Ensure Docker is installed on your system.  
  You can download it from [the official Docker website](https://www.docker.com/).

#### 2. Prepare the Environment Files

- Rename all environment files by removing the `.example` suffix.

  For example: `.env.example` → `.env`

#### 3. Running the backend

Navigate to the backend folder:

```sh
cd backend
```

Install dependencies

```sh
npm install
```

Start the development and test databases using Docker Compose:

```sh
docker compose -f docker-compose.db.yml up -d
```

Initialize the databases:

```sh
npm run migrate:reset
```

```sh
npm run migrate:deploy-test
```

To start in development mode:

```sh
npm run dev
```

To run the tests:

```sh
npm test
```

To run the linter:

```sh
npm run lint
```

To start in production mode:

```sh
npm run build
```

```sh
npm start
```

#### 4. Running the frontend

Navigate to the frontend folder:

```sh
cd frontend
```

Install dependencies

```sh
npm install
```

To start in development mode:

```sh
npm run dev
```

To run the tests:

```sh
npm test
```

To run the linter:

```sh
npm run lint
```

To start in production mode:

```sh
npm run build
```

```sh
npm run preview
```

#### 5. Running full production

Navigate to the prod folder:

```sh
cd prod
```

Execute the following command:

```sh
docker compose up
```

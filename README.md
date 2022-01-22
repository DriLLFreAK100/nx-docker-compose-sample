# Nx Docker-Compose Example

#### Purpose

This repo is intended to demonstrate how we can leverage [docker-compose](https://docs.docker.com/compose/) with [Nx Monorepo](https://nx.dev/) to spin up a single dev environment that consists of multiple Apps in one go.

#### Expectation

From a dev perspective, you should now be able to:

1. Scaffold entire dev environment with just one "docker-compose up" command
2. Get the same Hot Module Reload (HMR) development experience like what we normally do with those watch mode command, in this case - "nx serve app-xx"

#### Samples Included

1. app-1 (React App)
2. app-2 (React App)
3. app-3 (Angular App)
4. api-1 (Express App)

#### How To Run

1. Run "npm install" to install the dependencies like any other Node-based projects
2. Run "docker-compose up" to spin up all the services defined in the docker-compose.yml
3. You can now access the individual apps in dev mode
   a. localhost:4201 (app-1)
   b. localhost:4202 (app-2)
   c. localhost:4203 (app-3)

#### Notes

This repo is developed on a Windows machine. If there is anything that does not work on other OS like macOS, Linux, etc., please feel free to file an issue or even better, drop PR for it.

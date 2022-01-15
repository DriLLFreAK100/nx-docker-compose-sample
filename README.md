# Nx Docker-Compose Example

This repo is intended to demonstrate how we can leverage [docker-compose](https://docs.docker.com/compose/) with [Nx Monorepo](https://nx.dev/) to spin up a single dev environment that consists of multiple Apps in one go.

From a dev perspective, the expectation for this will be:

1. Scaffold entire dev environment with just a simple "docker-compose up"
2. Get the same Hot Module Reload (HMR) development experience like what we normally do with those watch mode command, in this case - "nx serve app-xx"

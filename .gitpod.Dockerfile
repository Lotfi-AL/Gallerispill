image:
  file: .gitpod.Dockerfile

# List the ports you want to expose and what to do when they are served. See https://www.gitpod.io/docs/config-ports/
ports:
  - port: 8080
    onOpen: open-preview

# List the start up tasks. You can start them in parallel in multiple terminals. See https://www.gitpod.io/docs/config-start-tasks/
tasks:
  - init: npm install # runs during prebuild
    command: npm start
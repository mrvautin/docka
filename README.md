# docka

`docka` is a little CLI helper for common Docker commands. It makes repetitive commands like `docker-compose ...` into short and easy to type/remember commands. It's also really easy to extend and add any additional commands
which make your daily developer life easier.

## Installing

`npm i docka -g`

## Usage

### # logs

Tails the logs for a given container

**Usage**:

`docka logs <container>`

---

### # start

Starts all or a specific container

**Usage**:

`docka start <container>` (optional)

---

### # stop

Starts all or a specific container

**Usage**:

`docka stop <container>` (optional)

---

### # restart

Restarts all or a specific container

**Usage**:

`docka restart <container>` (optional)

---

### # ssh

Give ssh (bash) access to a container

**Usage**:

`docka ssh <container>`

---

### # ps

Lists all containers

**Usage**:

`docka ps`

---

### # build

Builds Docker containers with docker-compose file

**Usage**:

`docka build`

---

### # images

Lists all Docker images

**Usage**:

`docka images`

---

### # prune

WARNING: This removes all stopped containers

**Usage**:

`docka prune`

---

### # cleanup

WARNING: This removes all dangling (non used/tagged) images

**Usage**:

`docka cleanup`

---

### # killall

WARNING: This stops and removes ALL containers.

**Usage**:

`docka killall`

---

### # stats

Gets the running stats of all containers

**Usage**:

`docka stats`

---

### # version

Shows the app version

**Usage**:

`docka -v`

---


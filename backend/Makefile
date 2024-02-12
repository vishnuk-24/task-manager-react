# Makefile

# Variables
IMAGE_NAME = task_manager_image
CONTAINER_NAME = task_manager_container
DOCKER_FILE = Dockerfile

# Build Docker image
build:
	docker build -t $(IMAGE_NAME) -f $(DOCKER_FILE) .

# Run Docker container
run:
	docker run -d --name $(CONTAINER_NAME) --rm -p 8000:8000 $(IMAGE_NAME)

# Stop Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove Docker container
rm:
	docker rm $(CONTAINER_NAME)

# Remove Docker image
rmi:
	docker rmi $(IMAGE_NAME)

# Rebuild Docker image and container
rebuild: stop rm rmi build run

.PHONY: build run stop rm rmi rebuild

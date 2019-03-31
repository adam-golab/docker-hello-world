# Simple http 'hello world' for load balancer testing
[![Docker Pulls](https://img.shields.io/docker/pulls/adamgolab/hello-world.svg)](https://hub.docker.com/r/adamgolab/hello-world/)

This image is a simple 'Hello World' in an HTTP server to be used to test load balancers. When receive an request (GET /) this image will return the `Hello World`.

It shows `Hello <WORLD>` for every request, so it is possible to customize the response. Useful for checking a load balancer configuration.

## Running a simple test
    docker run --rm -it -p 8000:80 adamgolab/hello-world

Will result in a single instance running on the provided via env PORT.

## Configuration

|Environment Variable|Default|Description|
|:-----:|:-----:|:----------|
|PORT|8000|Set the Listen Port to access the hello-world container.|
|WORLD|World|Set the string that will be concatenated to Hello in the response.|

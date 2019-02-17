
all: build
build:
	@./generate

build-ts:
	@./generate-ts-definition

test:
	node tests.js
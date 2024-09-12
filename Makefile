artifact_name := ch-account-ui

.PHONY: build
build: clean init build-app

.PHONY: build-app
build-app:
	npm run build

.PHONY: clean
clean:
	rm -rf out

.PHONY: npm-install
npm-install:
	npm i

.PHONY: init
init: npm-install

.PHONY: test
test: test-unit

.PHONY: test-unit
test-unit:
	npm test

.PHONY: security-check
security-check:
	npm install
	npm audit --audit-level=high

.PHONY: sonar
sonar:
	npm run sonar

.PHONY: package
package: build
ifndef version
	$(error No version given. Aborting)
endif
	$(info Packaging version: $(version))
	$(eval tmpdir := $(shell mktemp -d build-XXXXXXXXXX))
	cp -r ./out/* $(tmpdir)
	cd $(tmpdir) && zip -r ../$(artifact_name)-$(version).zip .
	rm -rf $(tmpdir)
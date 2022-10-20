# Playwright Integration Testing Platform

created on 15/10/2022 on Windows 10 Pro

### Dependencies
* Node v17.4.0 or newer
* NPM 8.3.1 or newer
* Playwright Version 1.27.1 or newer - `npm playwright install` to install Playwright Library and `npm init playwright@latest` to init Playwright [Playwright Library](https://playwright.dev/docs/library)
* Typescript Library - `npm install ts lib`


### Running Tests
Run `npx playwright test` to execute the tests via [Playwright](https://playwright.dev/)

* To run tests in a folder or a single file, use `npx playwright test [PATH]` [Command line](https://playwright.dev/docs/test-cli)
* To run test in headed browsers, use `--headed`
* To run the tests in debug mode, use `--debug`
* To control the maximum number of parallel work processes via command line, use `npx playwright test --workers [NUMBER]` [Parallelism and sharding](https://playwright.dev/docs/test-parallel)

A default HTML report is generated after each run in the playwright-report directory, the report will be automatically opened if any tests fail. To open it mannully, run `npx playwright show-report`

### Writing Tests
To be continued ...
# StaleNews

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

```bash
$ cd ~/src/myhtml/; time ng new StaleNews experimental-zoneless=true inline-style=true inline-template=true package-manager=yarn ssr=false style=css view-encapsulation=ShadowDom
Error: Unknown arguments: experimental-zoneless=true, inline-style=true, inline-template=true, package-manager=yarn, ssr=false, style=css, view-encapsulation=ShadowDom

real	0m0.244s
user	0m0.223s
sys	0m0.070s
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/; time ng new StaleNews --experimental-zoneless=true --inline-style=true --inline-template=true --package-manager=yarn --ssr=false --style=css --view-encapsulation=ShadowDom
 Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will show possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home directory.) yes
Appended `source <(ng completion script)` to `/home/kushal/.bashrc`. Restart your terminal or run the following to autocomplete `ng` commands:

    source <(ng completion script)
 
Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   no
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
CREATE StaleNews/README.md (1472 bytes)
CREATE StaleNews/.editorconfig (314 bytes)
CREATE StaleNews/.gitignore (587 bytes)
CREATE StaleNews/angular.json (2665 bytes)
CREATE StaleNews/package.json (1041 bytes)
CREATE StaleNews/tsconfig.json (915 bytes)
CREATE StaleNews/tsconfig.app.json (424 bytes)
CREATE StaleNews/tsconfig.spec.json (434 bytes)
CREATE StaleNews/.vscode/extensions.json (130 bytes)
CREATE StaleNews/.vscode/launch.json (470 bytes)
CREATE StaleNews/.vscode/tasks.json (938 bytes)
CREATE StaleNews/src/main.ts (250 bytes)
CREATE StaleNews/src/index.html (295 bytes)
CREATE StaleNews/src/styles.css (80 bytes)
CREATE StaleNews/src/app/app.component.spec.ts (1065 bytes)
CREATE StaleNews/src/app/app.component.ts (303 bytes)
CREATE StaleNews/src/app/app.config.ts (317 bytes)
CREATE StaleNews/src/app/app.routes.ts (77 bytes)
CREATE StaleNews/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint: 	git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
    Successfully initialized git.

real	0m36.165s
user	0m13.288s
sys	0m7.705s
```







































```
kushal@kusfedora2024:~$ cd ~/src/myhtml/StaleNews/; yarn run ng test --singleRun=false
yarn run v1.22.22
$ ng test --singleRun=false
Error: Unknown argument: singleRun
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; yarn run ng test --single-run=false
yarn run v1.22.22
$ ng test --single-run=false
Error: Unknown argument: single-run
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; yarn run ng test --watch=true
yarn run v1.22.22
$ ng test --watch=true
✔ Browser application bundle generation complete.
06 12 2024 11:08:59.305:WARN [karma]: No captured browser, open http://localhost:9876/
06 12 2024 11:08:59.319:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 12 2024 11:08:59.319:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 12 2024 11:08:59.323:INFO [launcher]: Starting browser Firefox
06 12 2024 11:09:00.208:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket q9HzsjQVPLEIzHeoAAAB with id 57034254
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to StaleNews!' to contain 'Hello, StaleNews'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (1 FAILED) (0.026 secs / 0.024 secs)
TOTAL: 1 FAILED, 2 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) AppComponent should have the 'StaleNews' title FAILED
	Expected 'Stale News' to equal 'StaleNews'.
	<Jasmine>
	1675/</<@main.js:34:23
	<Jasmine>
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to Stale News!' to contain 'Hello, StaleNews'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (2 FAILED) (0.017 secs / 0.016 secs)
TOTAL: 2 FAILED, 1 SUCCESS
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to Stale News!' to contain 'Hello, StaleNews'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (1 FAILED) (0.018 secs / 0.017 secs)
TOTAL: 1 FAILED, 2 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to Stale News!' to contain 'Hello, Stale News'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (1 FAILED) (0.018 secs / 0.015 secs)
TOTAL: 1 FAILED, 2 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.019 secs / 0.017 secs)
TOTAL: 3 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.017 secs / 0.016 secs)
TOTAL: 3 SUCCESS
^C
Firefox 133.0 (Linux x86_64) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.017 secs / 0.016 secs)
Firefox 133.0 (Linux x86_64) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)


kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; time sh update.sh
```
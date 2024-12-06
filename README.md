# StaleNews

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

```bash
kushal@kusfedora2024:~$ cd ~/src/myhtml/; ng new StaleNews
fs.js:44
} = primordials;
    ^

ReferenceError: primordials is not defined
    at fs.js:44:5
    at req_ (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/natives/index.js:143:24)
    at Object.req [as require] (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/natives/index.js:55:10)
    at Object.<anonymous> (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/yam/node_modules/graceful-fs/fs.js:1:37)
    at Module._compile (node:internal/modules/cjs/loader:1565:14)
    at Object..js (node:internal/modules/cjs/loader:1708:10)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)

Node.js v22.12.0
kushal@kusfedora2024:~/src/myhtml$ ls -a
.  ..  amazon-shipping-out-for-delivery
kushal@kusfedora2024:~/src/myhtml$ ls 
amazon-shipping-out-for-delivery
kushal@kusfedora2024:~/src/myhtml$ npm uninstall --global @angular-cli

up to date in 191ms
kushal@kusfedora2024:~/src/myhtml$ time npm install --global @angular/cli
npm error code EEXIST
npm error path /home/kushal/.nvm/versions/node/v22.12.0/bin/ng
npm error EEXIST: file already exists
npm error File exists: /home/kushal/.nvm/versions/node/v22.12.0/bin/ng
npm error Remove the existing file and try again, or run npm
npm error with --force to overwrite files recklessly.
npm error A complete log of this run can be found in: /home/kushal/.npm/_logs/2024-12-06T15_43_04_963Z-debug-0.log

real	0m7.480s
user	0m3.444s
sys	0m1.419s
kushal@kusfedora2024:~/src/myhtml$ npm uninstall --global angular-cli

removed 1124 packages in 898ms
kushal@kusfedora2024:~/src/myhtml$ time npm cache clean --force
npm warn using --force Recommended protections disabled.

real	0m0.361s
user	0m0.334s
sys	0m0.533s
kushal@kusfedora2024:~/src/myhtml$ time npm install --global yarn @angular/cli

added 272 packages, and changed 1 package in 8s

51 packages are looking for funding
  run `npm fund` for details

real	0m8.162s
user	0m3.342s
sys	0m1.063s
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/; time ng new StaleNews experimental-zoneless=true inline-style=true inline-template=true package-manager=yarn ssr=false style=css view-encapsulation=ShadowDom
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
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/StaleNews/; git remote add origin git@github.com:angularnineteen/angularnineteen.github.io.git
kushal@kusfedora2024:~/src/myhtml/StaleNews$ time yarn add karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter
yarn add v1.22.22
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
warning "karma-jasmine" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-chrome-launcher" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-jasmine-html-reporter" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
success Saved 8 new dependencies.
info Direct dependencies
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
info All dependencies
├─ colors@1.4.0
├─ is-docker@2.2.1
├─ is-wsl@2.2.0
├─ istanbul-lib-source-maps@3.0.6
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
Done in 1.93s.

real	0m2.041s
user	0m1.747s
sys	0m0.732s
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; sh update.sh

```

```
kushal@kusfedora2024:~$ cd ~/src/myhtml/; ng new StaleNews
fs.js:44
} = primordials;
    ^

ReferenceError: primordials is not defined
    at fs.js:44:5
    at req_ (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/natives/index.js:143:24)
    at Object.req [as require] (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/natives/index.js:55:10)
    at Object.<anonymous> (/home/kushal/.nvm/versions/node/v22.12.0/lib/node_modules/angular-cli/node_modules/yam/node_modules/graceful-fs/fs.js:1:37)
    at Module._compile (node:internal/modules/cjs/loader:1565:14)
    at Object..js (node:internal/modules/cjs/loader:1708:10)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)

Node.js v22.12.0
kushal@kusfedora2024:~/src/myhtml$ ls -a
.  ..  amazon-shipping-out-for-delivery
kushal@kusfedora2024:~/src/myhtml$ ls 
amazon-shipping-out-for-delivery
kushal@kusfedora2024:~/src/myhtml$ npm uninstall --global @angular-cli

up to date in 191ms
kushal@kusfedora2024:~/src/myhtml$ time npm install --global @angular/cli
npm error code EEXIST
npm error path /home/kushal/.nvm/versions/node/v22.12.0/bin/ng
npm error EEXIST: file already exists
npm error File exists: /home/kushal/.nvm/versions/node/v22.12.0/bin/ng
npm error Remove the existing file and try again, or run npm
npm error with --force to overwrite files recklessly.
npm error A complete log of this run can be found in: /home/kushal/.npm/_logs/2024-12-06T15_43_04_963Z-debug-0.log

real	0m7.480s
user	0m3.444s
sys	0m1.419s
kushal@kusfedora2024:~/src/myhtml$ npm uninstall --global angular-cli

removed 1124 packages in 898ms
kushal@kusfedora2024:~/src/myhtml$ time npm cache clean --force
npm warn using --force Recommended protections disabled.

real	0m0.361s
user	0m0.334s
sys	0m0.533s
kushal@kusfedora2024:~/src/myhtml$ time npm install --global yarn @angular/cli

added 272 packages, and changed 1 package in 8s

51 packages are looking for funding
  run `npm fund` for details

real	0m8.162s
user	0m3.342s
sys	0m1.063s
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/; time ng new StaleNews experimental-zoneless=true inline-style=true inline-template=true package-manager=yarn ssr=false style=css view-encapsulation=ShadowDom
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
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/StaleNews/; git remote add origin git@github.com:angularnineteen/angularnineteen.github.io.git
kushal@kusfedora2024:~/src/myhtml/StaleNews$ time yarn add karma-jasmine karma-jasmine karma-chrome-launcher karma-jasmine-html-reporter karma-coverage-istanbul-reporter karma-firefox-launcher karma-jasmine-html-reporter karma-spec-reporter
yarn add v1.22.22
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
warning "karma-jasmine" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-chrome-launcher" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
warning "karma-jasmine-html-reporter" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
success Saved 8 new dependencies.
info Direct dependencies
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
info All dependencies
├─ colors@1.4.0
├─ is-docker@2.2.1
├─ is-wsl@2.2.0
├─ istanbul-lib-source-maps@3.0.6
├─ karma-chrome-launcher@3.2.0
├─ karma-coverage-istanbul-reporter@3.0.3
├─ karma-firefox-launcher@2.1.3
└─ karma-spec-reporter@0.0.36
Done in 1.93s.

real	0m2.041s
user	0m1.747s
sys	0m0.732s
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; time sh update.sh
Fri Dec  6 10:55:28 AM EST 2024
update.sh: line 9: cd: /home/kushal/source/angulareighteen/: No such file or directory
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 490ms
Fri Dec  6 10:55:29 AM EST 2024
Fri Dec  6 10:55:29 AM EST 2024
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf > glob > inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
warning karma > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma > rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
warning karma > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 10.55s.

real    0m10.671s
user    0m3.241s
sys	0m0.999s
Fri Dec  6 10:55:40 AM EST 2024
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
fatal: couldn't find remote ref master
Enumerating objects: 34, done.
Counting objects: 100% (34/34), done.
Delta compression using up to 16 threads
Compressing objects: 100% (33/33), done.
Writing objects: 100% (34/34), 140.84 KiB | 8.80 MiB/s, done.
Total 34 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), done.
To github.com:angularnineteen/angularnineteen.github.io.git
 * [new branch]      master -> master
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.17s.
yarn run v1.22.22
$ ng update
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
    We analyzed your package.json and everything seems to be in order. Good work!
Done in 1.18s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-TWJD5ZBX.js    | main          | 182.73 kB |                49.49 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.49 kB

Application bundle generation complete. [2.382 seconds]

Output location: /home/kushal/src/myhtml/StaleNews/dist/stale-news

Done in 2.94s.
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Everything up-to-date
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
06 12 2024 10:55:55.603:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 12 2024 10:55:55.604:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 12 2024 10:55:55.608:INFO [launcher]: Starting browser Firefox
06 12 2024 10:55:56.524:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket ABNHUjNTTx-1Hso7AAAB with id 90134204
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to StaleNews!' to contain 'Hello, StaleNews'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (1 FAILED) (0.026 secs / 0.025 secs)
TOTAL: 1 FAILED, 2 SUCCESS
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn run v1.22.22
$ ng update @angular/core @angular/cli
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
Package '@angular/cli' is already up to date.
Done in 0.74s.
On branch master
nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Everything up-to-date
npm warn exec The following package was not found and will be installed: update-browserslist-db@1.1.1
Latest version:     1.0.30001687
Installed version:  1.0.30001687
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Everything up-to-date
* remote origin
  Fetch URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  Push  URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local ref configured for 'git push':
    master pushes to master (up to date)
Fri Dec  6 10:56:03 AM EST 2024

real	0m34.328s
user	0m26.981s
sys	0m4.832s
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/; time git clone git@github.com:angulareighteen/angulareighteen.github.io.git
Cloning into 'angulareighteen.github.io'...
remote: Enumerating objects: 932, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 932 (delta 0), reused 1 (delta 0), pack-reused 929 (from 1)
Receiving objects: 100% (932/932), 1.19 MiB | 4.60 MiB/s, done.
Resolving deltas: 100% (597/597), done.

real	0m0.878s
user	0m0.086s
sys	0m0.041s
kushal@kusfedora2024:~/src/myhtml$ cd ~/src/myhtml/StaleNews/; time sh update.sh
Fri Dec  6 10:59:39 AM EST 2024
update.sh: line 9: cd: /home/kushal/source/angulareighteen/: No such file or directory
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 335ms
Fri Dec  6 10:59:40 AM EST 2024
Fri Dec  6 10:59:40 AM EST 2024
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma-coverage-istanbul-reporter > istanbul-lib-source-maps > rimraf > glob > inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
warning karma > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning karma > rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
warning karma > rimraf > glob@7.2.3: Glob versions prior to v9 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning "@angular-devkit/build-angular > @vitejs/plugin-basic-ssl@1.1.0" has unmet peer dependency "vite@^3.0.0 || ^4.0.0 || ^5.0.0".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm@5.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular-devkit/build-angular > @angular/build > @inquirer/confirm > @inquirer/type@3.0.1" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts@7.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 9.47s.

real    0m9.591s
user    0m3.356s
sys	0m0.990s
Fri Dec  6 10:59:50 AM EST 2024
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   angular.json

no changes added to commit (use "git add" and/or "git commit -a")
[master d9595b8] add all files
 1 file changed, 4 insertions(+), 1 deletion(-)
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 339 bytes | 339.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   c1ddacc..d9595b8  master -> master
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.17s.
yarn run v1.22.22
$ ng update
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
    We analyzed your package.json and everything seems to be in order. Good work!
Done in 0.91s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-TWJD5ZBX.js    | main          | 182.73 kB |                49.49 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.49 kB

Application bundle generation complete. [1.038 seconds]

Output location: /home/kushal/src/myhtml/StaleNews/docs

Done in 1.44s.
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/

nothing added to commit but untracked files present (use "git add" to track)
warning: in the working copy of 'docs/3rdpartylicenses.txt', CRLF will be replaced by LF the next time Git touches it
[master 8989cc9] add all files
 6 files changed, 352 insertions(+)
 create mode 100644 docs/3rdpartylicenses.txt
 create mode 100644 docs/favicon.ico
 create mode 100644 docs/index.html
 create mode 100644 docs/main-TWJD5ZBX.js
 create mode 100644 docs/prerendered-routes.json
 create mode 100644 docs/styles-5INURTSO.css
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 16 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 63.72 KiB | 15.93 MiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:angularnineteen/angularnineteen.github.io.git
   d9595b8..8989cc9  master -> master
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
06 12 2024 10:59:59.063:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 12 2024 10:59:59.064:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 12 2024 10:59:59.067:INFO [launcher]: Starting browser Firefox
06 12 2024 10:59:59.969:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket yk1GZIZKVEiSRCusAAAB with id 17533925
Firefox 133.0 (Linux x86_64) AppComponent should render title FAILED
	Expected 'Welcome to StaleNews!' to contain 'Hello, StaleNews'.
	<Jasmine>
	1675/</<@main.js:40:55
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 3 of 3 (1 FAILED) (0.031 secs / 0.023 secs)
TOTAL: 1 FAILED, 2 SUCCESS
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn run v1.22.22
$ ng update @angular/core @angular/cli
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
Package '@angular/cli' is already up to date.
Done in 0.91s.
On branch master
nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Everything up-to-date
Latest version:     1.0.30001687
Installed version:  1.0.30001687
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
On branch master
nothing to commit, working tree clean
On branch master
nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Everything up-to-date
* remote origin
  Fetch URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  Push  URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local ref configured for 'git push':
    master pushes to master (up to date)
Fri Dec  6 11:00:05 AM EST 2024

real	0m25.877s
user	0m13.426s
sys	0m3.577s
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; time sh update.sh

```
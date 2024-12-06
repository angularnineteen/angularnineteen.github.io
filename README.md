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
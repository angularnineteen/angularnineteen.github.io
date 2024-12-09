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
Fri Dec  6 11:11:50 AM EST 2024
update.sh: line 9: cd: /home/kushal/source/angulareighteen/: No such file or directory
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 500ms
Fri Dec  6 11:11:51 AM EST 2024
Fri Dec  6 11:11:51 AM EST 2024
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
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.2" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.2" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 9.70s.

real    0m9.820s
user    0m3.018s
sys	0m1.028s
Fri Dec  6 11:12:01 AM EST 2024
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md
	modified:   src/app/app.component.spec.ts
	modified:   src/app/app.component.ts
	modified:   src/index.html

no changes added to commit (use "git add" and/or "git commit -a")
[master d808523] add all files
 4 files changed, 96 insertions(+), 583 deletions(-)
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 16 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 1.33 KiB | 1.33 MiB/s, done.
Total 8 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   651604f..d808523  master -> master
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
Done in 0.90s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-CTRIPDWL.js    | main          | 182.73 kB |                49.55 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.55 kB

Application bundle generation complete. [1.064 seconds]

Output location: /home/kushal/src/myhtml/StaleNews/docs

Done in 1.47s.
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   docs/index.html
	deleted:    docs/main-TWJD5ZBX.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/main-CTRIPDWL.js

no changes added to commit (use "git add" and/or "git commit -a")
warning: in the working copy of 'docs/3rdpartylicenses.txt', CRLF will be replaced by LF the next time Git touches it
[master 5ab1be0] add all files
 2 files changed, 3 insertions(+), 3 deletions(-)
 rename docs/{main-TWJD5ZBX.js => main-CTRIPDWL.js} (99%)
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 16 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 54.48 KiB | 18.16 MiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   d808523..5ab1be0  master -> master
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
06 12 2024 11:12:10.689:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
06 12 2024 11:12:10.689:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 12 2024 11:12:10.692:INFO [launcher]: Starting browser Firefox
06 12 2024 11:12:11.608:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket 7wNvLlNCuzt8pVt2AAAB with id 15888944
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.029 secs / 0.02 secs)
TOTAL: 3 SUCCESS
Done in 3.32s.
yarn run v1.22.22
$ ng update @angular/core @angular/cli
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
Package '@angular/cli' is already up to date.
Done in 0.84s.
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
Fri Dec  6 11:12:17 AM EST 2024

real	0m26.962s
user	0m13.572s
sys	0m3.700s
kushal@kusfedora2024:~/src/myhtml/StaleNews$ 
kushal@kusfedora2024:~/src/myhtml/StaleNews$ cd ~/src/myhtml/StaleNews/; time sh update.sh
```











```sh
$ time sh /home/kushal/src/myhtml/angularnineteen.github.io/update.sh
Sun Dec  8 09:15:20 PM EST 2024
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 480ms
Sun Dec  8 09:15:21 PM EST 2024
Sun Dec  8 09:15:21 PM EST 2024
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
warning "@angular/cli > @inquirer/prompts > @inquirer/confirm@5.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.2.0" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 10.30s.

real    0m10.415s
user    0m3.393s
sys	0m1.052s
Sun Dec  8 09:15:31 PM EST 2024
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   yarn.lock

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/notes/2024/12/08/dtrace.txt
	docs/notes/2024/12/08/hello.toml

no changes added to commit (use "git add" and/or "git commit -a")
[master 882e588] add all files
 3 files changed, 69 insertions(+), 3 deletions(-)
 create mode 100644 docs/notes/2024/12/08/dtrace.txt
 create mode 100644 docs/notes/2024/12/08/hello.toml
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 16 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (10/10), 7.77 KiB | 7.77 MiB/s, done.
Total 10 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   2f47aa9..882e588  master -> master
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
Done in 0.83s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-CTRIPDWL.js    | main          | 182.73 kB |                49.55 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.55 kB

Application bundle generation complete. [1.072 seconds]

Output location: /home/kushal/src/myhtml/angularnineteen.github.io/docs

Done in 1.48s.
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    docs/notes/2024/12/08/dtrace.txt
	deleted:    docs/notes/2024/12/08/hello.toml

no changes added to commit (use "git add" and/or "git commit -a")
[master 924bf23] add all files
 2 files changed, 66 deletions(-)
 delete mode 100644 docs/notes/2024/12/08/dtrace.txt
 delete mode 100644 docs/notes/2024/12/08/hello.toml
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (7/7), 493 bytes | 493.00 KiB/s, done.
Total 7 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   882e588..924bf23  master -> master
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
08 12 2024 21:15:40.675:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
08 12 2024 21:15:40.676:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 12 2024 21:15:40.679:INFO [launcher]: Starting browser Firefox
08 12 2024 21:15:41.599:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket mIZs43CFdldhhR7KAAAB with id 95617474
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.031 secs / 0.021 secs)
TOTAL: 3 SUCCESS
Done in 3.16s.
yarn run v1.22.22
$ ng update @angular/core @angular/cli
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
Package '@angular/cli' is already up to date.
Done in 0.81s.
On branch master
Your branch is up to date with 'origin/master'.

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
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
On branch master
Your branch is up to date with 'origin/master'.

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
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
Sun Dec  8 09:15:47 PM EST 2024

real	0m26.941s
user	0m13.470s
sys	0m3.527s
```

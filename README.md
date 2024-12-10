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


```bash
kushal@kusfedora2024:~$ cd ~/Documents/resume/; git --no-pager log --all --oneline
fe28737 (HEAD -> main) move to archive
30d4171 (dura/fe75e72f00719b355b51f8b3f0d327e3780ed782) dura auto-backup
fe75e72 add resume
16a16dd (dura/2759aa94acd1acfbcc4175b52a9651c52a9d3778) dura auto-backup
f1f8da0 dura auto-backup
2759aa9 add original
527f0e9 (dura/e7b0e9baff378869002c7b53b38d65db3e4f85d2) dura auto-backup
3d42ab2 dura auto-backup
de4d166 dura auto-backup
e9cbe44 dura auto-backup
b278150 dura auto-backup
e7b0e9b archive files
10ad895 (dura/083f61af6fdb6529dcda0ec6e51a57a276766d3c) dura auto-backup
e20ec5e dura auto-backup
fa3dae2 dura auto-backup
afb51ab dura auto-backup
06a7f93 dura auto-backup
083f61a customize for wingswept
fba6bfe (dura/b2361bc1c1777cb6a8746321d2c5d6ed5fd65f15) dura auto-backup
0ead4fc dura auto-backup
c68d408 dura auto-backup
b2361bc update resume
e7e3dd4 (dura/615e0ae96e8749ae4a23670b8c5364bc38b2dba8) dura auto-backup
270f896 dura auto-backup
ed6ff6a dura auto-backup
00de4ad dura auto-backup
615e0ae add pdf
279da52 (dura/7826369085ffbded100e6a9ea48e6f5163322f30) dura auto-backup
475a5ac dura auto-backup
be9eeed dura auto-backup
7826369 alter summary
5bb660d (dura/075d57b7424b049e957f77a831ef339e9e698c8e) dura auto-backup
075d57b generaate a generic summary
90623fe (dura/ac893741d2469e4485c56c4c2c7c8d357c7b9f0e) dura auto-backup
df5535b dura auto-backup
6974ea5 dura auto-backup
0ae3215 dura auto-backup
d40d4df dura auto-backup
ac89374 add colors
5b512e2 (dura/2495dc72be5181ad176fa407638d021bc02f83f8) dura auto-backup
8fabf7e dura auto-backup
953e5e5 dura auto-backup
06e6612 dura auto-backup
d489953 dura auto-backup
ebb22c6 dura auto-backup
eaf2d68 dura auto-backup
fc04657 dura auto-backup
e424efb dura auto-backup
71b929e dura auto-backup
03960c7 dura auto-backup
f4cd0f6 dura auto-backup
065802f dura auto-backup
875097c dura auto-backup
585581f dura auto-backup
511bd9b dura auto-backup
b6bcfd9 dura auto-backup
68a1da3 dura auto-backup
b4c4295 dura auto-backup
2495dc7 export pdf
0b6fe49 (dura/5f800600ec300e852961ab6ae3997bf62babf1e6) dura auto-backup
d9b0758 dura auto-backup
82fbe5d dura auto-backup
f6327c8 dura auto-backup
41f8aab dura auto-backup
efb427a dura auto-backup
24e0aad dura auto-backup
97e6f41 dura auto-backup
8bee392 dura auto-backup
4140fbf dura auto-backup
11b5f38 dura auto-backup
b3a6a43 dura auto-backup
69c3c36 dura auto-backup
b0be1fc dura auto-backup
d18451c dura auto-backup
556b4b1 dura auto-backup
a069f50 dura auto-backup
d79d087 dura auto-backup
fc598c3 dura auto-backup
5f80060 add resume to link locally
d69bbc3 (dura/0067051c7a803ccf665e85748b9b43ad22efbcc4) dura auto-backup
ddc28c1 dura auto-backup
6683146 dura auto-backup
ffa12f7 dura auto-backup
28f3364 dura auto-backup
3aed457 dura auto-backup
cc75eeb dura auto-backup
031ae1e dura auto-backup
54d38d0 dura auto-backup
4ce275a dura auto-backup
4854652 dura auto-backup
55718ee dura auto-backup
65ed05a dura auto-backup
639aff5 dura auto-backup
8955571 dura auto-backup
0067051 add hello world
124d18d (dura/6af7ee7947988d0f8e235c77378ac828855142e3) dura auto-backup
8c53428 dura auto-backup
6577a65 dura auto-backup
6af7ee7 add hello world
c90cb6f (dura/52dccc7aa04e40783b8db781f40a5841777f06f2) dura auto-backup
31343be dura auto-backup
52dccc7 init
kushal@kusfedora2024:~/Documents/resume$ ~/src/myhtml/angularnineteen.github.io/
.angular/     dist/         docs/         .git/         node_modules/ public/       src/          .vscode/      
kushal@kusfedora2024:~/Documents/resume$ ~/src/myhtml/angularnineteen.github.io/
bash: /home/kushal/src/myhtml/angularnineteen.github.io/: Is a directory
kushal@kusfedora2024:~/Documents/resume$ dura watch
/home/kushal/Documents/resume is already being watched
kushal@kusfedora2024:~/Documents/resume$ cd ~/src/myhtml/angularnineteen.github.io/
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ dura watch
Started watching /home/kushal/src/myhtml/angularnineteen.github.io
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ cd ~/src/myhtml/angularnineteen.github.io/; time sh /home/kushal/src/myhtml/angularnineteen.github.io/update.sh
Mon Dec  9 08:50:06 PM EST 2024
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 603ms
Mon Dec  9 08:50:07 PM EST 2024
Mon Dec  9 08:50:07 PM EST 2024
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
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.2.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.3" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 9.61s.

real    0m9.785s
user    0m3.444s
sys	0m1.262s
Mon Dec  9 08:50:17 PM EST 2024
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   update.sh
	modified:   yarn.lock

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	public/notes/2024/12/09/

no changes added to commit (use "git add" and/or "git commit -a")
[master 5e6da27] add all files
 6 files changed, 112 insertions(+), 7 deletions(-)
 create mode 100644 public/notes/2024/12/09/our-problem.pdf
 create mode 100644 public/notes/2024/12/09/our-problem.txt
 create mode 100644 public/notes/2024/12/09/our-problem.typ
 create mode 100644 public/notes/2024/12/09/richmond.txt
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (13/13), 13.49 KiB | 13.49 MiB/s, done.
Total 13 (delta 5), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (5/5), completed with 4 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   bb20526..5e6da27  master -> master
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.18s.
yarn run v1.22.22
$ ng update
Using package manager: yarn
Collecting installed dependencies...
Found 25 dependencies.
    We analyzed your package.json and everything seems to be in order. Good work!
Done in 1.08s.
yarn run v1.22.22
$ ng build
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-CTRIPDWL.js    | main          | 182.73 kB |                49.55 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.55 kB

Application bundle generation complete. [1.259 seconds]

Output location: /home/kushal/src/myhtml/angularnineteen.github.io/docs

Done in 1.75s.
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/notes/2024/12/09/

nothing added to commit but untracked files present (use "git add" to track)
[master 94dec83] add all files
 4 files changed, 105 insertions(+)
 create mode 100644 docs/notes/2024/12/09/our-problem.pdf
 create mode 100644 docs/notes/2024/12/09/our-problem.txt
 create mode 100644 docs/notes/2024/12/09/our-problem.typ
 create mode 100644 docs/notes/2024/12/09/richmond.txt
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 16 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (11/11), 13.05 KiB | 13.05 MiB/s, done.
Total 11 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   5e6da27..94dec83  master -> master
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
09 12 2024 20:50:28.608:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
09 12 2024 20:50:28.609:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 12 2024 20:50:28.613:INFO [launcher]: Starting browser Firefox
09 12 2024 20:50:29.573:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket SKbBF_o1oE2XB58sAAAB with id 11332877
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.028 secs / 0.026 secs)
TOTAL: 3 SUCCESS
Done in 5.80s.
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
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 16 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (16/16), 13.48 KiB | 13.48 MiB/s, done.
Total 16 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (6/6), completed with 3 local objects.
remote: 
remote: Create a pull request for 'dura/bb2052670805c59d84715d90c29ba9bb4babb2a3' on GitHub by visiting:
remote:      https://github.com/angularnineteen/angularnineteen.github.io/pull/new/dura/bb2052670805c59d84715d90c29ba9bb4babb2a3
remote: 
To github.com:angularnineteen/angularnineteen.github.io.git
 * [new branch]      dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 -> dura/bb2052670805c59d84715d90c29ba9bb4babb2a3
* remote origin
  Fetch URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  Push  URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  HEAD branch: master
  Remote branches:
    dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 tracked
    master                                        tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local refs configured for 'git push':
    dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 pushes to dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 (up to date)
    master                                        pushes to master                                        (up to date)
Mon Dec  9 08:50:36 PM EST 2024

real	0m29.679s
user	0m18.022s
sys	0m4.493s
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ cd ~/src/myhtml/angularnineteen.github.io/; time sh /home/kushal/src/myhtml/angularnineteen.github.io/update.sh
Mon Dec  9 08:52:58 PM EST 2024
0.40.1
Installing latest LTS version.
v22.12.0 is already installed.
Now using node v22.12.0 (npm v10.9.0)
v22.12.0
10.9.0

changed 1 package in 335ms
Mon Dec  9 08:52:59 PM EST 2024
Mon Dec  9 08:52:59 PM EST 2024
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
warning "@angular/cli > @inquirer/prompts > @inquirer/expand@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/input@4.1.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/editor@4.2.0" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/search@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/select@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/rawlist@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/number@3.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/checkbox@4.0.3" has unmet peer dependency "@types/node@>=18".
warning "@angular/cli > @inquirer/prompts > @inquirer/password@4.0.3" has unmet peer dependency "@types/node@>=18".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 9.85s.

real    0m9.974s
user    0m3.218s
sys	0m1.018s
Mon Dec  9 08:53:09 PM EST 2024
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 16 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 556 bytes | 556.00 KiB/s, done.
Total 8 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   94dec83..b1f5874  master -> master
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
main-CTRIPDWL.js    | main          | 182.73 kB |                49.55 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 182.73 kB |                49.55 kB

Application bundle generation complete. [1.078 seconds]

Output location: /home/kushal/src/myhtml/angularnineteen.github.io/docs

Done in 1.49s.
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   docs/notes/2024/12/09/our-problem.typ

no changes added to commit (use "git add" and/or "git commit -a")
[master 393bee3] add all files
 1 file changed, 1 insertion(+), 1 deletion(-)
From github.com:angularnineteen/angularnineteen.github.io
 * branch            master     -> FETCH_HEAD
Current branch master is up to date.
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 16 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 575 bytes | 575.00 KiB/s, done.
Total 8 (delta 4), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To github.com:angularnineteen/angularnineteen.github.io.git
   b1f5874..393bee3  master -> master
yarn run v1.22.22
$ ng test
✔ Browser application bundle generation complete.
09 12 2024 20:53:18.011:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
09 12 2024 20:53:18.012:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 12 2024 20:53:18.015:INFO [launcher]: Starting browser Firefox
09 12 2024 20:53:18.948:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket JG_TSCzlMujyZpNRAAAB with id 22802666
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.025 secs / 0.024 secs)
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
Done in 0.70s.
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
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 16 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 448 bytes | 448.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:angularnineteen/angularnineteen.github.io.git
 * [new branch]      dura/94dec830c4d8eba631efe85fdd9e078fd009fe24 -> dura/94dec830c4d8eba631efe85fdd9e078fd009fe24
 * [new branch]      dura/b1f587444e4d48c232f4918c520b328231d009f3 -> dura/b1f587444e4d48c232f4918c520b328231d009f3
* remote origin
  Fetch URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  Push  URL: git@github.com:angularnineteen/angularnineteen.github.io.git
  HEAD branch: master
  Remote branches:
    dura/94dec830c4d8eba631efe85fdd9e078fd009fe24 tracked
    dura/b1f587444e4d48c232f4918c520b328231d009f3 tracked
    dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 tracked
    master                                        tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local refs configured for 'git push':
    dura/94dec830c4d8eba631efe85fdd9e078fd009fe24 pushes to dura/94dec830c4d8eba631efe85fdd9e078fd009fe24 (up to date)
    dura/b1f587444e4d48c232f4918c520b328231d009f3 pushes to dura/b1f587444e4d48c232f4918c520b328231d009f3 (up to date)
    dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 pushes to dura/bb2052670805c59d84715d90c29ba9bb4babb2a3 (up to date)
    master                                        pushes to master                                        (up to date)
Mon Dec  9 08:53:25 PM EST 2024

real	0m26.647s
user	0m13.791s
sys	0m3.704s
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ yarn run ng serve --watch
yarn run v1.22.22
$ ng serve --watch
Initial chunk files | Names         | Raw size
main.js             | main          |  1.64 kB | 
styles.css          | styles        | 95 bytes | 

                    | Initial total |  1.74 kB

Application bundle generation complete. [0.760 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
Re-optimizing dependencies because lockfile has changed
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
^C
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ yarn run ng test --watch
yarn run v1.22.22
$ ng test --watch
✔ Browser application bundle generation complete.
09 12 2024 21:09:20.748:WARN [karma]: No captured browser, open http://localhost:9876/
09 12 2024 21:09:20.762:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
09 12 2024 21:09:20.762:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 12 2024 21:09:20.766:INFO [launcher]: Starting browser Firefox
09 12 2024 21:09:21.694:INFO [Firefox 133.0 (Linux x86_64)]: Connected on socket yuBjHx7TpOVOgKcuAAAB with id 49744052
Firefox 133.0 (Linux x86_64): Executed 3 of 3 SUCCESS (0.028 secs / 0.026 secs)
TOTAL: 3 SUCCESS
✔ Browser application bundle generation complete.
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) AppComponent should have a paragraph explaining what stale news is FAILED
	Expected null to be truthy.
	<Jasmine>
	1675/</<@main.js:46:59
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 4 of 4 (1 FAILED) (0.024 secs / 0.022 secs)
TOTAL: 1 FAILED, 3 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) AppComponent should have a paragraph explaining what stale news is FAILED
	Expected null to be truthy.
	<Jasmine>
	1675/</<@main.js:46:59
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 4 of 4 (1 FAILED) (0.023 secs / 0.021 secs)
TOTAL: 1 FAILED, 3 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64): Executed 4 of 4 SUCCESS (0.022 secs / 0.021 secs)
TOTAL: 4 SUCCESS
^C
Firefox 133.0 (Linux x86_64) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
Firefox 133.0 (Linux x86_64): Executed 4 of 4 SUCCESS (0.022 secs / 0.021 secs)
Firefox 133.0 (Linux x86_64) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
^C^C
kushal@kusfedora2024:~/src/myhtml/angularnineteen.github.io$ cd ~/src/myhtml/angularnineteen.github.io/; time sh /home/kushal/src/myhtml/angularnineteen.github.io/update.sh
```
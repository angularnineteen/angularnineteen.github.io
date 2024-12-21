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







































## Please help. I am trying my first unit tests in zoneless angular 19 and I ran into a problem.  Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: ''. Current value: 'Lorem Ipsum'.

I have an angular 19 application, zoneless, inline-style, inline-template, no server-side rendering, and single component module
ng new StaleNews --experimental-zoneless=true --inline-style=true --inline-template=true --package-manager=yarn --ssr=false --style=css --view-encapsulation=ShadowDom

I can post the link to the github repo if you think it is helpful.

I have a fairly simple component. Problem is that I can't add a test that I would like to add. here is the test
```ts
  // it('should handle Lorem Ipsum title', async () => {
  //   component.title = 'Lorem Ipsum';
  //   await fixture.whenStable();
  //
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const titles = compiled.querySelectorAll('h2');
  //   expect(titles.length).toBe(1);
  //   const title = titles[0];
  //   expect(title.textContent).toBe('Lorem Ipsum');
  // });
```

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stale-news-card',
  template: `
    <div class="card">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p><strong>Published on: </strong> {{ originalPublicationDate }}</p>
      <p><strong>Author(s): </strong> {{ authors.join(', ') }}</p>
      <p><strong>Canonical URL: </strong> <a [href]="canonicalUrl" target="_blank">{{ canonicalUrl }}</a></p>
      <p><strong>Republished on: </strong> {{ republishDate }}</p>
      <p><strong>Summary: </strong> {{ summary }}</p>
      <div>
        <strong>Details:</strong>
        <!-- <div *ngFor="let paragraph of longFormText"> -->
        <div>
          @for (item of longFormText; track item; let idx = $index, e = $even) {
            <p>Item #{{ idx }}: {{ item }}</p>
          }
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 16px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h2 {
        margin: 0;
        font-size: 1.5em;
      }
      h3 {
        margin: 0;
        font-size: 1.2em;
        color: #555;
      }
      p {
        margin: 8px 0;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `
  ]
})
export class StaleNewsCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() originalPublicationDate: string = '';
  @Input() authors: string[] = [];
  @Input() canonicalUrl: string = '';
  @Input() republishDate: string = '';
  @Input() summary: string = '';
  @Input() longFormText: string[] = []; // Change to an array of strings
}
```

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaleNewsCardComponent } from './stale-news-card.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('StaleNewsCardComponent', () => {
  let component: StaleNewsCardComponent;
  let fixture: ComponentFixture<StaleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, StaleNewsCardComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should handle empty long form text', async () => {
    component.longFormText = [];
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs.length).toBe(5); // Only the static paragraphs should be rendered
  });

  it('should handle empty title', async () => {
    component.title = '';
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('h2');
    expect(titles.length).toBe(1);
    const title = titles[0];
    expect(title.textContent).toBe('');
  });

  // it('should handle Lorem Ipsum title', async () => {
  //   component.title = 'Lorem Ipsum';
  //   await fixture.whenStable();
  //
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const titles = compiled.querySelectorAll('h2');
  //   expect(titles.length).toBe(1);
  //   const title = titles[0];
  //   expect(title.textContent).toBe('Lorem Ipsum');
  // });
});
```

for context, here is my package.json
```json
{
  "name": "stale-news",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "karma-coverage-istanbul-reporter": "^3.0.3",
    "karma-firefox-launcher": "^2.1.3",
    "karma-spec-reporter": "^0.0.36",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.0.4",
    "@angular/cli": "^19.0.4",
    "@angular/compiler-cli": "^19.0.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.4.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "^3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "^5.1.0",
    "karma-jasmine-html-reporter": "^2.1.0",
    "typescript": "~5.6.2"
  }
}
```

here is the error I get

```
ERROR: 'ERROR', Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: ''. Current value: 'Lorem Ipsum'. Expression location: StaleNewsCardComponent component. Find more at https://angular.dev/errors/NG0100
RuntimeError@http://localhost:9876/_karma_webpack_/vendor.js:49169:5
throwErrorIfNoChangesMode@http://localhost:9876/_karma_webpack_/vendor.js:60253:9
bindingUpdated@http://localhost:9876/_karma_webpack_/vendor.js:69119:34
interpolation1@http://localhost:9876/_karma_webpack_/vendor.js:73176:35
ɵɵtextInterpolate1@http://localhost:9876/_karma_webpack_/vendor.js:79929:38
ɵɵtextInterpolate@http://localhost:9876/_karma_webpack_/vendor.js:79905:21
StaleNewsCardComponent_Template@ng:///StaleNewsCardComponent.js:66:32
executeTemplate@http://localhost:9876/_karma_webpack_/vendor.js:61970:15
refreshView@http://localhost:9876/_karma_webpack_/vendor.js:63555:22
detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:63764:16
detectChangesInViewIfAttached@http://localhost:9876/_karma_webpack_/vendor.js:63726:22
detectChangesInComponent@http://localhost:9876/_karma_webpack_/vendor.js:63715:32
detectChangesInChildComponents@http://localhost:9876/_karma_webpack_/vendor.js:63777:29
refreshView@http://localhost:9876/_karma_webpack_/vendor.js:63608:37
detectChangesInView@http://localhost:9876/_karma_webpack_/vendor.js:63764:16
detectChangesInViewWhileDirty@http://localhost:9876/_karma_webpack_/vendor.js:63475:24
detectChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63459:34
checkNoChangesInternal@http://localhost:9876/_karma_webpack_/vendor.js:63504:26
checkNoChanges@http://localhost:9876/_karma_webpack_/vendor.js:64087:29
_tick@http://localhost:9876/_karma_webpack_/vendor.js:71936:16
tick@http://localhost:9876/_karma_webpack_/vendor.js:71912:10
detectChanges@http://localhost:9876/_karma_webpack_/vendor.js:92201:24
1379/</<@http://localhost:9876/_karma_webpack_/main.js:463:13
asyncGeneratorStep@http://localhost:9876/_karma_webpack_/vendor.js:105118:17
_next@http://localhost:9876/_karma_webpack_/vendor.js:105132:27
9204/_asyncToGenerator/</<@http://localhost:9876/_karma_webpack_/vendor.js:105137:12
9204/_asyncToGenerator/<@http://localhost:9876/_karma_webpack_/vendor.js:105129:12
attempt@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7632:40
QueueRunner.prototype.run@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7670:27
runNext@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7574:16
attempt/next<@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7580:11
once/<@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7466:11
wrapInPromiseResolutionHandler/<@http://localhost:9876/base/node_modules/karma-jasmine/node_modules/jasmine-core/lib/jasmine-core/jasmine.js?86d98e11f43f2c8cfac9fb4806ed6c0aced74cbe:7731:9
Firefox 133.0 (Linux x86_64) StaleNewsCardComponent should handle Lorem Ipsum title FAILED
	Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: ''. Current value: 'Lorem Ipsum'. Expression location: StaleNewsCardComponent component. Find more at https://angular.dev/errors/NG0100 in vendor.js (line 49169)
	error properties: Object({ code: -100 })
	throwErrorIfNoChangesMode@vendor.js:60253:9
	bindingUpdated@vendor.js:69119:34
	interpolation1@vendor.js:73176:35
	ɵɵtextInterpolate1@vendor.js:79929:38
	ɵɵtextInterpolate@vendor.js:79905:21
	StaleNewsCardComponent_Template@ng:///StaleNewsCardComponent.js:66:32
	executeTemplate@vendor.js:61970:15
	refreshView@vendor.js:63555:22
	detectChangesInView@vendor.js:63764:16
	detectChangesInViewIfAttached@vendor.js:63726:22
	detectChangesInComponent@vendor.js:63715:32
	detectChangesInChildComponents@vendor.js:63777:29
	refreshView@vendor.js:63608:37
	detectChangesInView@vendor.js:63764:16
	detectChangesInViewWhileDirty@vendor.js:63475:24
	detectChangesInternal@vendor.js:63459:34
	checkNoChangesInternal@vendor.js:63504:26
	checkNoChanges@vendor.js:64087:29
	_tick@vendor.js:71936:16
	tick@vendor.js:71912:10
	detectChanges@vendor.js:92201:24
	1379/</<@main.js:463:13
	asyncGeneratorStep@vendor.js:105118:17
	_next@vendor.js:105132:27
	9204/_asyncToGenerator/</<@vendor.js:105137:12
	9204/_asyncToGenerator/<@vendor.js:105129:12
	<Jasmine>
Firefox 133.0 (Linux x86_64): Executed 8 of 8 (1 FAILED) (0.087 secs / 0.082 secs)
TOTAL: 1 FAILED, 7 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64): Executed 7 of 7 SUCCESS (0.083 secs / 0.078 secs)
TOTAL: 7 SUCCESS
✔ Browser application bundle generation complete.
Firefox 133.0 (Linux x86_64) StaleNewsCardComponent should handle Lorem Ipsum title FAILED
	Expected '' to be 'Lorem Ipsum'.
	<Jasmine>
	1379/</<@main.js:468:31
	asyncGeneratorStep@vendor.js:105118:17
	_next@vendor.js:105132:27
Firefox 133.0 (Linux x86_64): Executed 8 of 8 (1 FAILED) (0.087 secs / 0.082 secs)
TOTAL: 1 FAILED, 7 SUCCESS
```

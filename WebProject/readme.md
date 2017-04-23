<h2>Installing Angular 2.0 Release version for MS Visual Studio 2015 from null.</h2>
<ol>
<li>Install NPM Task Runner and Package Installer.</li>
<li>Create new empty web project.</li>
<li>Add package.json file to the solution root with next content
<pre>
{
    "name": "myproject",
    "version": "1.0.0",
    "devDependencies": {
        },
    "scripts": {
        "updateNpm": "npm install npm@latest"
    }
} 
</pre>
</li>
<li>Run "updateNpm" command from your taskrunner. <strong>Even if you have last npm - do this. This is important.</strong>
If you have already installed Node.js before skip this step. If not - go the Node.js and install latest version of node.js.
Inside Visual studio, go the Tools -> Options -> Projects and Solutions -> External web tools and set a path to the propper node.js version. Do not forget to move your new path up the hill.</li>
<li>Update your package json with dependencies, angular 2 needed. (With little overhead for the old browswers)
<pre>
{
  "name": "myproject",
  "repository": "https://github.com/Drag13/MvcWithAngular2",
  "license": "MIT",
  "version": "1.5.0",
  "devDependencies": {
    "typescript": "2.2.2",
    "typings": "2.1.1"
  },
  "dependencies": {
    "@angular/common": "~4.0.0",
    "@angular/compiler": "~4.0.0",
    "@angular/core": "~4.0.0",
    "@angular/forms": "~4.0.0",
    "@angular/http": "~4.0.0",
    "@angular/platform-browser": "~4.0.0",
    "@angular/platform-browser-dynamic": "~4.0.0",
    "@angular/router": "~4.0.0",
    "angular-in-memory-web-api": "~0.3.0",
    "systemjs": "0.19.40",
    "core-js": "^2.4.1",
    "rxjs": "5.0.1",
    "zone.js": "^0.8.4"
  },
  "scripts": {
    "postinstall": "typings install",
    "typings": "typings",
    "cmd": "npm typescript",
    "getNpmVersion": "npm -v",
    "getNodeVersion": "node -v",
    "updateNpm": "npm install npm@latest",
    "!install": "npm install"
  }
}</pre></li>

<li>Run install command from the Task runner.</li>
<li>Create app folder in the root of your solution. Add app.components.ts to the app folder.</li>
<li>Configure typescript for Visual studio. Close your project and open .csproj file in the text editor. Find PropertyGroup section and add two additional options: 
<pre>
&#60;TypeScriptExperimentalDecorators&#62;true&#60;/TypeScriptExperimentalDecorators&#62;
&#60;TypeScriptEmitDecoratorMetadata&#62;true&#60;/TypeScriptEmitDecoratorMetadata&#62;</pre>
<li>Save changes and open solution.</li>
<li>Open your project properties and go to the TypeScript setting. Pick CommonJS as module system.</li>
<li>Update app.component.ts with this code.
<pre>
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: 'My First Angular 2 App'
})
export class AppComponent { }  </pre></li>

<li>Add main.ts to the app folder.
<pre>import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);</pre></li>

<li>Add app.module.ts near the main.ts with the following code 
<pre>import { NgModule }      from '@angular/core';
     import { BrowserModule } from '@angular/platform-browser';
     import { AppComponent }   from './app.component';
    @NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
})
export class AppModule { }
</pre></li>

<li>Add index.html to the root of your project. Code for index.html could be found inside the repository. </li>

<li>Add systemjs.config.js to the root with next code.
<pre>/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
</pre></li>
<li>Press F5 to run your app. If you see My First Angular 2 App on your screen - all is ok. You can proceed developing.</li>
</ol>

<h2>Problems and solutions</h2>
<ol><li>
 <strong id="npm_lw">Problem: NPM version lower than 3</strong>
                <p>
                    <strong>Solution:</strong>
                    Find the location where the global NPM was installed (you can execute the npm root -g command).
                    Then substitute the pathway to Node NPM in the PATH environmental variable with the pathway to the global NPM.
                    Do not forget to do it for the system and for the user, as well as to reboot your workstation.
                </p>
</li>
 <li>
                <strong id="ndj_lw">Problem: Node.JS version lower than 5 </strong>
                <p>
                    <strong>Solution:</strong>
                    Find the location, where your node.js is installed, and copy the path there.
                    Now go to Tools -> Options -> Projects and Solutions -> External web tools and
                    add a new path there which directs the Studio to the necessary node version
                    (if there isn’t one, just download and install it).
                    Don’t forget to bring the new path to the top. Restart the Studio
                </p>
            </li>

            <li>
                <strong id="inst_err">
                    Problem: All package installing with errors.
                </strong>
                <p>
                    <strong>Solution: </strong>
                    Try command: "npm cache clear". This will remove all cached before packages and allows you to get clean and fresh
                    latest packages.
                </p>
            </li>

            <li>
                <strong id="cmpl_err">
                    Problem: VS throws compile error like: "TS2304: Cannot find name 'Map'".
                </strong>
                <p>
                    <strong>Solution: </strong>
                    Change TypeScript ECMAscript version to 6 version.
                    You can find it at Project properties, TypeScript compile options.
                </p>
            </li>

</ol>

   <h2>IIS settings for SPA application</h2>
         <p> Using app as SPA we have to configure IIS server to ignore requests except root and api.
            This can be achieved with adding custom rule in web.config. Example of this you can find below.</p>
        <pre>
    &#60;rewrite&#62;
      &#60;rules&#62;&#60;
        &#60;rule name="AngularJS Routes" stopProcessing="true"&#62;
            &#60;match url=".*" /&#62;
                &#60;conditions logicalGrouping="MatchAll"&#62;
                 &#60;add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" /&#62;
                 &#60;add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" /&#62;
                 &#60;add input="{REQUEST_URI}" pattern="^/(api)" negate="true" /&#62;
                 &#60;/conditions&#62;
            &#60;action type="Rewrite" url="/" /&#62;
        &#60;/rule&#62;
      &#60;/rules&#62;
    &#60;/rewrite&#62;
</pre>
        <p>More info can be find here: <a href="https://www.iis.net/learn/extensions/url-rewrite-module/creating-rewrite-rules-for-the-url-rewrite-module">IIS Url Rewrite Module</a></p>
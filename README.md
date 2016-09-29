# Angular2WebAppTemplate

<h1>This is web project configured for working with angular 2.0 RELEASE and Microsoft Visual Studio 2015</h1>
Short instruction how to run angular 2 with MS Visual Studio

<h2>Check list</h2>
<ol>
 <li>Manually restore NuGet packages for the project.</li>
            <li>
                Install <a href="https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941">NPM Task Runner.</a>
                This will allow you to run tasks described in package.json
            </li>
            <li>
                Check npm version for Studio. Using NPM Task Runner execute "getNpmVersion" command from package.json
                If it is higher then 3.X.X - all is ok. If not - see <a href="#npm_lw">"NPM version lower than 3"</a>chapter from readme.html.
            </li>

            <li>
                Check Node.JS version for Studio. Using NPM Task Runner execute "getNodeVersion" command from package.json
                If it is higher then 5.X.X - all is ok. If not - see <a href="#ndj_lw">"Node.JS version lower than 5"</a> chapter from readme.html.
            </li>
            <li>
                If all is ok - run application and have fun. If smth wrong happened - go to the <a href="#trbl"> Troubleshooting"</a> chapter.
            </li>
            <li>If you still have problems - try to install all from null.</li>
</ol>

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
  "version": "1.0.0",
  "devDependencies": {
    "gulp": "^3.9.1",
    "typescript": "2.0.3",
    "typings": "^1.0.4"
  },

  "dependencies": {
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/router": "3.0.0",
    "@angular/upgrade": "2.0.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.27",
    "zone.js": "^0.6.23",
    "angular2-in-memory-web-api": "0.0.20",
    "bootstrap": "^3.3.6"
  },

  "scripts": {
    "postinstall": "typings install",
    "typings": "typings",
    "cmd": "npm typescript",
    "getNpmVersion": "npm -v",
    "getNodeVersion": "node -v"
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

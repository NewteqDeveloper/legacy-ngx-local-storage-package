# ngx-local-storage 

[![NPM Version][npm-image]][npm-url]

> This is an angular library that provides a service to interact with local storage easily.
> Simply import the module and use NgxLocalStorageService to access local storage.


An Angular wrapper for local storage access.

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Library Information](#Library Generation Information)

## Installation
Install via npm:
```
npm install @newteq/ngx-local-storage --save
```

## Usage

#### 1. Import `NgxLocalStorageModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxLocalStorageModule } from 'ngx-localstorage';

@NgModule({
    imports: [
        BrowserModule,
        NgxLocalStorageModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### Configuration (`NgxLocalStorageModule.forRoot(localStorageConfig)`)

* localStorageConfig
  * Type: `NgxLocalStorageConfig`
  * __prefix__
    * Type: `string`
    * Determines the key prefix.
    * Default: __ngx-local-storage__
  * __defaultJsonConversion__
    * Type: `boolean`
    * Determines if the data is stored as a JSON object. (i.e. it is stored with `JSON.stringify()` and loaded with `JSON.parse()`)
    * Default: __true__
  
## API

### LocalStorageService

#### Methods

- `set(key: string, value: string): void`: Adds tha value with the given key or updates an existing entry.
- `get(key: string): string | null`: Gets the entry specified by the given key or null.
- `remove(key: string): void`: Removes the entry specified by the given key.
- `clear(): void`: Clears all entries of the applications local storage.

##### Example

```ts
import { LocalStorageService } from '@newteq/ngx-local-storage';

@Component({
  selector: 'app-storage-access',
  template: './storage-access.component.html'
})
export class StorageAccessComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {
  }
  
  ngOnInit(): void {
    this.localStorageService.clear(); // or any other API methods
  }
}
```

## Library Generation Information

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

[npm-image]: https://img.shields.io/npm/v/@newteq/ngx-local-storage.svg
[npm-url]: https://npmjs.org/package/@newteq/mgx-local-storage

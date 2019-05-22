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
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxLocalStorageModule} from 'ngx-localstorage';

@NgModule({
    imports: [
        BrowserModule,
        NgxLocalStorageModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### Configuration (`NgxLocalStorageModule.forRoot(moduleConfig)`)

* __prefix__
  * Type: `string`
  * Determines the key prefix.
  * Default: __ngx_local_storage__
* __allowNull__
  * Type: `boolean`
  * Determines if _null | 'null'_ values should be stored.
  * Default: __true__
  
## API

### LocalStorageService

#### Methods

- `count(): number`: Gets the number of entries in the applications local storage.
- `getKey(index: number): string | null`: Returns the nth (defined by the index parameter) key in the storage. The order of keys is user-agent defined, so you should not rely on it.
- `set(key: string, value: string, prefix?: string): void`: Adds tha value with the given key or updates an existing entry.
- `get(key: string, prefix?: string): string | null`: Gets the entry specified by the given key or null.
- `remove(key: string, prefix?: string): void`: Removes the entry specified by the given key.
- `clear(): void`: Clears all entries of the applications local storage.

_Promise-based_

- `asPromisable(): PromisableService`: provide the storage operations wrapped in a Promise
- `count(): Promise<number>`: Gets the number of entries in the applications local storage.
- `getKey(index: number): Promise<string | null>`: Returns the nth (defined by the index parameter) key in the storage. The order of keys is user-agent defined, so you should not rely on it.
- `set(key: string, value: string, prefix?: string): Promise<boolean>`: Adds tha value with the given key or updates an existing entry.
- `get(key: string, prefix?: string): Promise<string | null>`: Gets the entry specified by the given key or null.
- `remove(key: string, prefix?: string): Promise<boolean>`: Removes the entry specified by the given key.
- `clear(): Promise<boolean>`: Clears all entries of the applications local storage.

##### Example

```ts
import {LocalStorageService} from 'ngx-localstorage';

@Component({
  selector: 'app-storage-access',
  template: './storage-access.component.html'
})
export class StorageAccessComponent implements OnInit {

  constructor(private _storageService: LocalStorageService) {
  }
  
  ngOnInit(): void {
    console.log('Entries count: ', this._storageService.count())
  
    // Pomise-based
    this._storageService.asPromisable().count()
      .then(count => console.log('Entries count: ', count))
      .catch(error => console.error(error));
  }
}
```

## Library Generation Information

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

[npm-image]: https://img.shields.io/npm/v/@newteq/ngx-local-storage.svg
[npm-url]: https://npmjs.org/package/@newteq/mgx-local-storage

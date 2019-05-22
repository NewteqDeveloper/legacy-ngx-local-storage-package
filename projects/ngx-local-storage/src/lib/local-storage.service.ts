import { Injectable, Inject } from '@angular/core';
import { ConfigToken } from './config/config-token';
import { NgxLocalStorageConfig } from './config/ngx-local-storage-config';
import { defaultConfig } from './consts/config';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

	private readonly prefix: string;
	private readonly convertToFromJson: boolean;

	constructor(@Inject(ConfigToken) config?: NgxLocalStorageConfig) {
		if (config) {
			this.prefix = config.prefix || defaultConfig.prefix;
			this.convertToFromJson = config.defaultJsonConversion || defaultConfig.defaultJsonConversion;
		} else {
			this.prefix = defaultConfig.prefix;
			this.convertToFromJson = defaultConfig.defaultJsonConversion;
		}
	}
	
	public setItem(key: string, value: any, toJson: boolean = true) {
    let valueToStore: any;
    if (toJson) {
      valueToStore = JSON.stringify(value);
    } else {
      valueToStore = value;
    }
    localStorage.setItem(`${this.prefix}${key}`, valueToStore);
  }

  public getItem(key: string, fromJson: boolean = true) {
    const value = localStorage.getItem(`${this.prefix}${key}`);
    if (fromJson) {
      return JSON.parse(value);
    } else {
      return value;
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(`${this.prefix}${key}`);
	}
	
	public clear() {
		localStorage.clear();
	}
}

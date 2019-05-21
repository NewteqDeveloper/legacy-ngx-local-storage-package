import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxLocalStorageService {

	constructor() { }
	
	log() {
		console.log('hello world from npm');
	}
}

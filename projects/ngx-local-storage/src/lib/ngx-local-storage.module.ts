import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgxLocalStorageConfig } from './config/ngx-local-storage-config';
import { ConfigToken } from './config/config-token';
import { NgxLocalStorageService } from './ngx-local-storage.service';

export function provideStorageService(config: NgxLocalStorageConfig): NgxLocalStorageService {
  return new NgxLocalStorageService(config);
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class NgxLocalStorageModule {
	static forRoot(config? : NgxLocalStorageConfig): ModuleWithProviders {
		return {
			ngModule: NgxLocalStorageModule,
			providers: [
				{
					provide: ConfigToken,
					useValue: config,
				},
				{
					provide: NgxLocalStorageService,
					useFactory: provideStorageService,
					deps: [
						ConfigToken,
					]
				}
			]
		};
	}

	constructor(@Optional() @SkipSelf() parentModule: NgxLocalStorageModule) {
    if (parentModule) {
      throw new Error('NgxLocalStorageModule is already loaded. Please make sure that this is only imported once (usually via the AppModule)');
    }
  }
}

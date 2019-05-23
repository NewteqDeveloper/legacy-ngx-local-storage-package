import { InjectionToken } from '@angular/core';
import { NgxLocalStorageConfig } from './ngx-local-storage-config';

export const ConfigToken = new InjectionToken<NgxLocalStorageConfig>('config');

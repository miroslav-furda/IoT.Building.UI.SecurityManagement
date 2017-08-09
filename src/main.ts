import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './components/app/app.module';
import {APP_INITIALIZER} from "@angular/core";
import {LoginService} from "./services/login.service";

platformBrowserDynamic().bootstrapModule(AppModule);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ownerComponent } from './owner/owner.component';
import { kinderComponent } from './kinder/kinder.component';
import { clubComponent } from './club/club.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NotifierOptions, NotifierModule } from 'angular-notifier';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { CookieService } from 'ngx-cookie-service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ownerComponent,
    kinderComponent,
    clubComponent,
  
  ],
  imports: [
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule,
    TabsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NotifierModule.withConfig(notifierDefaultOptions),
    PaginationModule.forRoot(),
    
  ],
  providers: [CookieService,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],  bootstrap: [AppComponent]
})
export class AppModule { }

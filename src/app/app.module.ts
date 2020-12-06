import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from '@utils/utils.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './pages/content/content.component';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LayoutComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

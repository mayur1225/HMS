// angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { GuestComponent } from './components/layouts/guest/guest.component';
import { NavigationComponent } from './components/layouts/admin/navigation/navigation.component';
import { NavBarComponent } from './components/layouts/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './components/layouts/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './components/layouts/admin/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './components/layouts/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './components/layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './components/layouts/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './components/layouts/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavigationItem } from './components/layouts/admin/navigation/navigation';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GuestComponent,
    NavigationComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [NavigationItem,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

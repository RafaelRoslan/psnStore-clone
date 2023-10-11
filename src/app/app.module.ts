import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SonyBarComponent } from './components/sony-bar/sony-bar.component';
import { StoreNavbarComponent } from './components/store-navbar/store-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BigShowcaseComponent } from './components/big-showcase/big-showcase.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ItemShowcaseComponent } from './components/item-showcase/item-showcase.component';
import { SeeMoreComponent } from './components/see-more/see-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    SonyBarComponent,
    StoreNavbarComponent,
    FooterComponent,
    BannerComponent,
    BigShowcaseComponent,
    ShowcaseComponent,
    ItemShowcaseComponent,
    SeeMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

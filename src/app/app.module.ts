import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TweetsComponent } from "./tweets/tweets.component";
import { TradesComponent } from "./trades/trades.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { routes } from "./app.routes";
import { TweetsService } from "./tweets/tweets.service";
import { TradesService } from "./trades/trades.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TweetsComponent,
    TradesComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [TweetsService, TradesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

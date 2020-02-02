import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from "./app-routing.module";

// ENVIRONMENT
import { environment } from "../environments/environment";

// COMPONENTS
import { AppComponent } from "./app.component";
import { RoutingComponents } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, RoutingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CadastroPage } from './contato/cadastro/cadastro.page';
import { ListarPage } from './contato/listar/listar.page';
import { SessaoPage } from './contato/sessao/sessao.page';
import { AutorizarPage } from './contato/autorizar/autorizar.page';
import { ListarSecaoPage } from './contato/listar-secao/listar-secao.page';
import { ReceberPage } from './contato/receber/receber.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuth} from 'angularfire2/auth';

@NgModule({
  declarations: [AppComponent, CadastroPage, ListarPage, SessaoPage, AutorizarPage, ListarSecaoPage, ReceberPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyAPAciTBLmosYXrRdEQDHUrc6H9yGuxSv0",
    authDomain: "icone-e3916.firebaseapp.com",
    databaseURL: "https://icone-e3916.firebaseio.com",
    projectId: "icone-e3916",
    storageBucket: "icone-e3916.appspot.com",
    messagingSenderId: "956262214826",
    appId: "1:956262214826:web:b827e135998b835c32b4d3",
    measurementId: "G-22Y9444LZ9"
  }),AngularFireDatabaseModule],
  providers: [
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

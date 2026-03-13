import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Prova } from './componenti/prova/prova';
import { ProvaData } from './componenti/prova-data/prova-data';
import { Highlight } from './directives/highlight';
import { ProvaPersonaService } from './componenti/prova-persona-service/prova-persona-service';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { Home } from './componenti/home/home';

@NgModule({
  declarations: [App, Prova, ProvaData, Highlight, ProvaPersonaService, About, Contact, Home],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}

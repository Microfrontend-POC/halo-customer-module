import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

import { CustomerModuleComponent } from "./customer-module/customer-module.component";

@NgModule({
  declarations: [CustomerModuleComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [CustomerModuleComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CustomerModuleComponent, {
      injector: this.injector
    });
    customElements.define("customer-module", el);
  }
}

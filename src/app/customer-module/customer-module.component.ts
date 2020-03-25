import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "halodoc-customer-module",
  template: `
    <p class="highlight">
      customer-module works!
    </p>
  `,
  styleUrls: ["./customer-module.css"],
  encapsulation: ViewEncapsulation.Native
})
export class CustomerModuleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

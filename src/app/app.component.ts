import { Component } from "@angular/core";
import { Test1 } from "./test";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Sri Ram Ede";
  name = "King";
  dataobj = new Test1();
}

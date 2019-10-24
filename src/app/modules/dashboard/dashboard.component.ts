import { Component, OnInit } from "@angular/core";
import { View } from "@syncfusion/ej2-schedule";
import { PageService } from "src/app/shared/services/page.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.setTextLocation("relative");
  }
  public setView: View = "Month";
}

import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/shared/services/page.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.scss"]
})
export class AdminLoginComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.setTextLocation("none");
  }
}

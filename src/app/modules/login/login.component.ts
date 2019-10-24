import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/shared/services/page.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.setTextLocation("none");
  }
}

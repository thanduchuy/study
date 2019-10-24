import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PageService } from "src/app/shared/services/page.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  myStyles = {
    display: "none"
  };
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.text.subscribe((data) => {
      if (data === "none") {
        this.myStyles = {
          display: "none"
        };
      } else {
        this.myStyles = {
          display: "relative"
        };
      }
    });
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-admin-in-put",
  templateUrl: "./admin-in-put.component.html",
  styleUrls: ["./admin-in-put.component.scss"]
})
export class AdminInPutComponent implements OnInit {
  @Input() place: string;
  constructor() {}

  ngOnInit() {}
}

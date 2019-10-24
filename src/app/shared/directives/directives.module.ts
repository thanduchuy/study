import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { MatInputModule } from "@angular/material/input";
import { ButtonComponent } from "./button/button.component";
import { MatButtonModule } from "@angular/material/button";
import { CalenderComponent } from "./calender/calender.component";
import { AdminInPutComponent } from "./admin-in-put/admin-in-put.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AdminBtnComponent } from "./admin-btn/admin-btn.component";
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CalenderComponent,
    AdminInPutComponent,
    CheckboxComponent,
    AdminBtnComponent
  ],
  imports: [MatInputModule, CommonModule, MatButtonModule, MatCheckboxModule],
  exports: [
    InputComponent,
    ButtonComponent,
    AdminInPutComponent,
    CheckboxComponent,
    AdminBtnComponent
  ]
})
export class DirectivesModule {}

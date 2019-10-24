import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { SharedModule } from "../shared/shared.module";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from "./login/login.component";
@NgModule({
  declarations: [DashboardComponent, AdminLoginComponent, LoginComponent],
  imports: [MatInputModule, CommonModule, SharedModule],
  exports: [AdminLoginComponent, LoginComponent]
})
export class ModulesModule {}

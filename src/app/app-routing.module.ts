import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'TeacherLogin',component:TeacherLoginComponent},
  {path:'Teacher',component:TeacherComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'Admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

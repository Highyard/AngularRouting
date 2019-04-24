import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ElectivesComponent } from './electives/electives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { AdministrationComponent } from './administration/administration.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent },
  {path: 'school', component: SchoolComponent },
  {path: 'administration', component: AdministrationComponent },
  {path: 'electives', component: ElectivesComponent, children: [
    {path: 'students/:id', component: StudentsComponent}
    ]},

  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

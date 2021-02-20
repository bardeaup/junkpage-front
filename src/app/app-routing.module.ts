import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MusiqueComponent } from './musique/musique.component';

const routes: Routes = [
  {path: '', component: JournalComponent},
  {path: 'junkadminpage', component: LoginComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'musique', component: MusiqueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

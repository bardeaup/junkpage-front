import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalEditorComponent } from './admin/journal-editor/journal-editor.component';
import { ArticleEditorComponent } from './admin/article-editor/article-editor.component';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MusiqueComponent } from './musique/musique.component';

const routes: Routes = [
  {path: '', component: JournalComponent},
  {path: 'junkadminpage', component: LoginComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'musique', component: MusiqueComponent},
  {path: 'edit-journal', component: JournalEditorComponent},
  {path: 'edit-article/:id', component: ArticleEditorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

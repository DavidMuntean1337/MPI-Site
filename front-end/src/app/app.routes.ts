import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FirstChapterComponent} from './first-chapter/first-chapter.component';
import {FirstChapterAdminComponent} from './first-chapter-admin/first-chapter-admin.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {CreatePostFormComponent} from './create-post-form/create-post-form.component';
import {PostFormModelComponent} from './post-form-model/post-form-model.component';
import {PostFormModelAdminComponent} from './post-form-model-admin/post-form-model-admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin/home', component: HomeAdminComponent },
  { path: ':chapter', component: FirstChapterComponent },
  { path: 'admin/:chapter', component: FirstChapterAdminComponent },
  { path: 'admin/create-post/:chapter', component: CreatePostFormComponent },
  { path: ':chapter/:id', component: PostFormModelComponent },
  { path: 'admin/:chapter/:id', component: PostFormModelAdminComponent }
];

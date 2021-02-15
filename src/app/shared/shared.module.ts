import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';


import { GithubPaginatorComponent } from './components/github-paginator/github-paginator.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { LoadingWidgetComponent } from './components/loading-widget/loading-widget.component';
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
  declarations: [
    GithubPaginatorComponent,
    BackToTopComponent,
    LoadingWidgetComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatToolbarModule,
    GithubPaginatorComponent,
    BackToTopComponent,
    LoadingWidgetComponent,
    TagListComponent
  ]
})
export class SharedModule { }

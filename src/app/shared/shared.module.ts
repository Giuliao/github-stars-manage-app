import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { GithubPaginatorComponent } from './components/github-paginator/github-paginator.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { LoadingWidgetComponent } from './components/loading-widget/loading-widget.component';

@NgModule({
  declarations: [
    GithubPaginatorComponent,
    BackToTopComponent,
    LoadingWidgetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    GithubPaginatorComponent,
    BackToTopComponent,
    LoadingWidgetComponent
  ]
})
export class SharedModule { }

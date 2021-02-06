import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPaginatorComponent } from './github-paginator.component';

describe('GithubPaginatorComponent', () => {
  let component: GithubPaginatorComponent;
  let fixture: ComponentFixture<GithubPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

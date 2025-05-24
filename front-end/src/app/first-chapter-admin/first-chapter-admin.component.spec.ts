import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChapterAdminComponent } from './first-chapter-admin.component';

describe('FirstChapterAdminComponent', () => {
  let component: FirstChapterAdminComponent;
  let fixture: ComponentFixture<FirstChapterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChapterAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChapterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

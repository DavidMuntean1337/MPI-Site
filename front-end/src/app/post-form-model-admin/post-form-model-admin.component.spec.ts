import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormModelAdminComponent } from './post-form-model-admin.component';

describe('PostFormModelAdminComponent', () => {
  let component: PostFormModelAdminComponent;
  let fixture: ComponentFixture<PostFormModelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormModelAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormModelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

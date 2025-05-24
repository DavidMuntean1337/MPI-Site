import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormModelComponent } from './post-form-model.component';

describe('PostFormModelComponent', () => {
  let component: PostFormModelComponent;
  let fixture: ComponentFixture<PostFormModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

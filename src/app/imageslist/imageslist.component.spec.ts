import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslistComponent } from './imageslist.component';

describe('ImageslistComponent', () => {
  let component: ImageslistComponent;
  let fixture: ComponentFixture<ImageslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComoponentComponent } from './test-comoponent.component';

describe('TestComoponentComponent', () => {
  let component: TestComoponentComponent;
  let fixture: ComponentFixture<TestComoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComoponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductOverviewComponent } from './feature-product-overview.component';

describe('FeatureProductOverviewComponent', () => {
  let component: FeatureProductOverviewComponent;
  let fixture: ComponentFixture<FeatureProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureProductOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

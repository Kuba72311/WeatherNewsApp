import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimezonePage } from './timezone.page';

describe('TimezonePage', () => {
  let component: TimezonePage;
  let fixture: ComponentFixture<TimezonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimezonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

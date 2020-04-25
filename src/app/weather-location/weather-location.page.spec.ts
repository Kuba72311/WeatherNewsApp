import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherLocationPage } from './weather-location.page';

describe('WeatherLocationPage', () => {
  let component: WeatherLocationPage;
  let fixture: ComponentFixture<WeatherLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtraWeatherPage } from './extra-weather.page';

describe('ExtraWeatherPage', () => {
  let component: ExtraWeatherPage;
  let fixture: ComponentFixture<ExtraWeatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraWeatherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtraWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

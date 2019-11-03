import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MirrorComponent } from './mirror/mirror.component';
import { ClockComponent } from './clock/clock.component';
import { MenuComponent } from './menu/menu.component';
import { ControlComponent } from './control/control.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { MessagesComponent } from './messages/messages.component';
import { SocialComponent } from './social/social.component';
import { MusicComponent } from './music/music.component';
import { WeightComponent } from './weight/weight.component';
import { SleepComponent } from './sleep/sleep.component';
import { StepsComponent } from './steps/steps.component';
import { MirrorstatsComponent } from './mirrorstats/mirrorstats.component';
import { LightsourceComponent } from './lightsource/lightsource.component';
import { ActivityComponent } from './activity/activity.component';
import { DateComponent } from './date/date.component';
import { HealthComponent } from './health/health.component';
import { HealthCategoriesComponent } from './health-categories/health-categories.component';
import { MirrorTimeComponent } from './mirror-time/mirror-time.component';
import { OverviewComponent } from './overview/overview.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MirrorComponent,
    ClockComponent,
    MenuComponent,
    ControlComponent,
    CalendarComponent,
    NotificationsComponent,
    WeatherComponent,
    NewsComponent,
    MessagesComponent,
    SocialComponent,
    MusicComponent,
    WeightComponent,
    SleepComponent,
    StepsComponent,
    MirrorstatsComponent,
    LightsourceComponent,
    ActivityComponent,
    DateComponent,
    HealthComponent,
    HealthCategoriesComponent,
    MirrorTimeComponent,
    OverviewComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

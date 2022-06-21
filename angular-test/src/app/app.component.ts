import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';

  blueHandle = async () => {
    var blue_wrapper = await document.querySelector('.blue_wrapper')!;
    await blue_wrapper.classList.remove('active_right');
    await blue_wrapper.classList.toggle('active_left');

    var green_wrapper = document.querySelector('.green_wrapper')!;
    green_wrapper.classList.remove('disable');
    green_wrapper.classList.remove('active_right');
    green_wrapper.classList.toggle('active_left');

    //blue disable

    // setTimeout(() => {
    //   blue_wrapper.classList.toggle('disable');
    // }, 500);
  };

  greenHandle = () => {
    var blue_wrapper = document.querySelector('.blue_wrapper')!;
    blue_wrapper.classList.remove('disable');
    blue_wrapper.classList.remove('active_left');
    blue_wrapper.classList.toggle('active_right');

    var green_wrapper = document.querySelector('.green_wrapper')!;
    green_wrapper.classList.remove('active_left');
    green_wrapper.classList.toggle('active_right');

    // setTimeout(() => {
    //   green_wrapper.classList.toggle('disable');
    // }, 500);
  };
}

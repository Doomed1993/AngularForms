import {Hero} from './hero';
import {Component} from '@angular/core';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent{

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(17,'Dr. Who',this.powers[0],'Laughable');

  submitted: Boolean = false;

  onSubmit(){
    this.submitted= true;
  }

  get diagnostic(){
    return (JSON.stringify(this.model));
  }

  newHero(){
    this.model = new Hero(42, '', '');
}

}

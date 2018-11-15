import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppComponent }  from './app.component';
import { StartComponent } from './start.component';
import { GameComponent } from './game.component/game.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  StartComponent , GameComponent ],
  bootstrap:    [  StartComponent  ]
})
export class AppModule { }

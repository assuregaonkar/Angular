import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useSymbols = false;
  useNumbers = false;
  length = 0;
  onClickUseLetters(){
    this.useLetters = !this.useLetters;
  }
  onClickUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  onClickUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeLength(value : string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    } 
  }
  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}

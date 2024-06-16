import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ alias: 'disabled'})
  isDisabled: boolean = false;

  @Input({ required: true, alias: 'text'})
   buttonText: string = '';
  @Input({ required: true, alias: 'style'})
   buttonStyle: 'white' | 'purple' = 'white';

  @Output('clickedChild') buttonClickedEmit = new EventEmitter<void>();
  onButtonClicked(){
    this.buttonClickedEmit.emit();
  }

}

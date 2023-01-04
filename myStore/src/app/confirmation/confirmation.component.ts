import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  @Input() user:string='';
  @Input() totalPrice:any;

  @Output() clearBtn = new EventEmitter;

  constructor(){}

  ngOnInit(){}

  clickToClear(){
    this.clearBtn.emit()
  }

}

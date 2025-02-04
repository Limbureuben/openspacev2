import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EmailFormComponent } from '../email-form/email-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('slideUp', [
      state('void', style({ transform: 'translateY(100%)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openEmailDialog(): void {
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

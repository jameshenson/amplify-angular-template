import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';

// material componenets
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {  MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {ScrollingModule} from '@angular/cdk/scrolling';








Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, 
      TodosComponent, 
      AmplifyAuthenticatorModule, 
      MatSliderModule,
    /*  MatSidenavModule,
      BrowserAnimationsModule, 
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatTabsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSidenavModule,
      MatSortModule,
      MatTableModule,
      MatToolbarModule,      
      ReactiveFormsModule,
      MatStepperModule,
      MatCheckboxModule,
      MatRadioModule,
      MatNativeDateModule,
      MatSliderModule,
      MatTooltipModule,
      DragDropModule,
      MatGridListModule,
      MatTreeModule,
      ScrollingModule, */
    ],
  
})

export class AppComponent {
  title = 'amplify-angular-template';
    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}

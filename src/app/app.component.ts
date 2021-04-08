import { Component } from '@angular/core'; 
// this is the file that supports the root component of our angular appication 

// this is another declarator that we will incounter in angular. 
// The component decarator takes the javascript object as a parameter and 
// the selcetor arises from the app root.  
// the template url points to a file, an HTML file that contains the template to the component. 
// the template defines the view for the component.  
// the styleurls file contain all the scss stlying that can be used for the component. 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alrightbet';
}

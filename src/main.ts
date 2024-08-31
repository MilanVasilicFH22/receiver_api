import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Import necessary providers

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Ensure HttpClient is provided
}).catch(err => console.error(err));

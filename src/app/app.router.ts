import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientComponent } from './pages/client/client.component';


const routes: Routes = [
    //home
    {
        path: '',
        component: HomePageComponent
    },
    //Client
    {
        path: 'pages/client',
        component: ClientComponent
    }   
];

export const RoutingModule = RouterModule.forRoot(routes);

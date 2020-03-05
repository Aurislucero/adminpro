import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations:[
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    exports:[
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
    ]
})

export class SharedModule {}
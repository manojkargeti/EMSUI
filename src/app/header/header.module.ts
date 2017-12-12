import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { NgModule } from '@angular/core';
@NgModule({imports: [
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
})
export class headerModule {}
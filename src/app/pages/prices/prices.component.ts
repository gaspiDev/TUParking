import { Component, inject } from '@angular/core';
import { PricesService } from '../../services/prices.service';
import { ModalsServicesService } from '../../services/modals-services.service';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {
  pricesService = inject(PricesService);
  modalService = inject(ModalsServicesService)
  async editPrice(id: string){
    const newPrice = await this.modalService.modalEditPrice()
    await this.pricesService.updatePrice(id, newPrice!);
    this.pricesService.getPrices();
  }
}

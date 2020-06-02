import { Component, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    @ViewChild(IonSearchbar) searchbar: IonSearchbar;

    constructor() { }

    async scrollStart() {
        const el = await this.searchbar.getInputElement();
        el.blur();
    }

}

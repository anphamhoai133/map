import { EventEmitter } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
export declare class TrafficLayer extends BaseMapDirective {
    autoRefresh: any;
    options: any;
    initialized$: EventEmitter<any>;
    constructor(nguiMapComp: NguiMapComponent);
}

import {HttpClient} from '@angular/common/http';
import {Injectable, Optional} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Icon} from '../contract/icon.interface';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private url = 'assets/icons/icon-list.json';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
  }

  public registerIcons(): Observable<any> {
    return this.http.get<Icon[]>(this.url).pipe(map((icons: Icon[]) => {
      icons.map((icon: Icon) => {
        this.matIconRegistry.addSvgIcon(
          icon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
        );
      });
    }));
  }
}

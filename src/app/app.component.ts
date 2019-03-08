import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IQuestion } from './_core/types';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TitleService } from './_core/title.service';
import { Observable } from 'rxjs';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  questions: IQuestion[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  title$: Observable<string>;

  ngOnInit() {
    this.title$ = this._title.title$;
  }

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _title: TitleService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 560px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      'windows',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/windows.svg')
    );

    iconRegistry.addSvgIcon(
      'ubuntu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/ubuntu.svg')
    );

    iconRegistry.addSvgIcon(
      'linux',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/linux.svg')
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navigateHome() {
    this._router.navigate(['/']);
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(SettingsDialogComponent, {
      width: '20rem',
      data: { name: 'name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

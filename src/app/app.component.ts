import { Component, OnInit, ChangeDetectorRef, OnDestroy, Inject } from "@angular/core";
import { QuestionsService } from "./core/questions.service";
import { IQuestion } from "./core/types";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatIconRegistry, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { Router, ActivatedRoute, RouterOutlet } from "@angular/router";
import { TitleService } from "./core/title.service";
import { Observable } from "rxjs";
import {
  trigger,
  transition,
  query,
  style,
  animate
} from "@angular/animations";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  questions: IQuestion[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  title$: Observable<string>;

  ngOnInit() {
    this.title$ = this.title.title$;

    this.questions = this.questionsService.fromModule(
      this.questionsService.getModules()[0].name
    ).questions;
  }

  constructor(
    // private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private title: TitleService,
    private questionsService: QuestionsService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 425px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      "windows",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/windows.svg")
    );

    iconRegistry.addSvgIcon(
      "ubuntu",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/ubuntu.svg")
    );

    iconRegistry.addSvgIcon(
      "linux",
      sanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/linux.svg")
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navigateHome() {
    this.router.navigate(["/"]);
  }

  // public prepareOutlet(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '350px',
  //     data: { name: 'this.name', animal: 'this.animal' }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   });
  // }
 
}


// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

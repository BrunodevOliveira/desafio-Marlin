import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from "@angular/core";

import { fromEvent, Subscription } from "rxjs";
import { filter, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnDestroy, OnInit {
  constructor(private elementRef: ElementRef) {}

  isOpen = false;
  resize: Subscription;

  @HostListener("document:click", ["$event"]) onClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.checkIfNavDropDown();
    }
  }

  ngOnDestroy() {
    this.resize.unsubscribe();
  }

  ngOnInit() {
    this.resize = fromEvent(window, "resize")
      .pipe(
        throttleTime(500),
        filter(() => !!this.elementRef)
      )
      .subscribe(() => this.checkIfNavDropDown());
  }

  checkIfNavDropDown() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  onMenu() {
    this.isOpen = !this.isOpen;
  }
}

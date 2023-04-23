import {Component, OnInit} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  public safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/o_joulYVndM");
    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("./assets/TypeScript Tutorial for Beginners.mp4");
  }

  ngOnInit(): void {
  }
}

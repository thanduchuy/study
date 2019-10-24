import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PageService {
  private _text: BehaviorSubject<string> = new BehaviorSubject<string>("");
  text: Observable<string> = this._text.asObservable();
  setTextLocation(text: string) {
    this._text.next(text);
  }
  constructor() {}
}

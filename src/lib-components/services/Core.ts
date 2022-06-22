import { FormsAioItem } from "../models";

export class FormsAio {
  public _forms: { [key: string]: FormsAioItem } = {};

  public formGroup!: any;
  public _formsGroup: { [key: string]: any } = {};

  public _formsKeys: string[] | any = [];

  private _keyStart = "";
  public defaultErrors: any = {
    input: " is required ",
    "text-area": " is required",
    checkbox: ": Select at least one element",
    "checkbox-list": ": Select at least one element",
    select: ": Select at least one element",
  };

  public submitted = false;

  //   private subs: Subscription[] = [];

  private _formatID = (form: FormsAioItem, count: any) =>
    `${this._keyStart}${form.component}${
      count[form.component as never] !== 0
        ? "_" + count[form.component as never]
        : ""
    }`;

  private _formatEventID = (key: string, count: any) =>
    `on${key.Capitalize()}${count[key] !== 0 ? count[key] : ""}Change`;

  private opts: any;

  constructor(opts: any) {}

  private init() {
    if (this.opts.debug) {
      this.alertDebug();
    }
  }
}

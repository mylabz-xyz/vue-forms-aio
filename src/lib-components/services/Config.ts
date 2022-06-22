import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { AioTheme } from "../const";

export interface NgFormsAioConfig {
  theme?: AioTheme;
  displaySubmitBtn?: boolean;
  submitLabel?: string;
  opts?: {
    debug?: boolean;
    submitIfValid?: boolean;
  };
}

export const _defaultConfig: NgFormsAioConfig = {
  theme: "float-label-default",
  displaySubmitBtn: true,
  opts: {
    debug: true,
    submitIfValid: true,
  },
  submitLabel: "Submit",
};

export const NG_FORMS_AIO_CONFIG_TOKEN = new InjectionToken<
  BehaviorSubject<NgFormsAioConfig>
>("forms_aio_token");

@Injectable()
export class NgFormsAioService implements OnDestroy {
  private config: BehaviorSubject<NgFormsAioConfig> = new BehaviorSubject(
    _defaultConfig
  );
  private config$: Observable<NgFormsAioConfig> = this.config.asObservable();

  private subs: Subscription[] = [];

  constructor(
    @Optional()
    @Inject(NG_FORMS_AIO_CONFIG_TOKEN)
    _config?: BehaviorSubject<NgFormsAioConfig>
  ) {
    if (_config)
      this.subs.push(_config.subscribe((__config) => this.setConfig(__config)));

    console.log("hey i'm construct");
  }

  public getConfig$() {
    return this.config$;
  }

  public setConfig(config: NgFormsAioConfig) {
    console.log("forms aio service", config);
    const _config = this.config.getValue();
    this.config.next({ ..._config, ...config });
  }

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}

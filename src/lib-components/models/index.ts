export interface FormsAio extends Array<FormsAioItem> {}
export interface FormsAioOptions {
  submitIfValid?: boolean;
  debug?: boolean;
}

export interface FormsAioItem {
  /**
   * @description Label of form
   * @default
   * null;
   */
  label?: string | undefined;
  /**
   * @description Field type (only for input component)
   * @default
   * 'text';
   */
  type?: "text" | "password";
  /**
   * @description Component to use for form object
   */
  component: "input" | "text-area" | "checkbox" | "checkbox-list" | "select";
  /**
   * @description Actual or init value of form
   * @default
   * '' if type input;
   * 0 if type checkbox | select;
   */
  value?: string | number | [] | any | undefined;
  /**
   * @description Actual or init value of form (only for checkbox)
   * @default
   * '' if type input;
   * 0 if type checkbox | select;
   */
  values?: { value?: any; label?: any }[];
  /**
   * @description Last value of form
   * @default
   * '' if type AioInput;
   *  0 if type AioCheckbox;
   *  0 if type AioSelect;
   */
  oldValue?: string | number | string[] | number[] | undefined;
  /**
   * @description Calback called on any form change
   * @property value
   * @property formKey
   */
  onChange?: (value?: any, formKey?: any) => void;
  /**
   * @description Name is usefull to generate EventEmmiter
   * @description **If null type is used instead of name**
   * @description **If null and objects with same type, type and index is used**
   */
  id?: string;
  /**
   * @description Name is usefull to generate EventEmitter
   */
  required?: boolean;
  /**
   * TODO
   */
  controlType?: string;
  /**
   * TODO
   */
  options?: string;
  /**
   * TODO
   */
  validator?: any;
  /**
   * @description formControls feedback
   */
  formControlFeedBack?: {
    [key: string]: string;
    //@ts-ignore
    required?: string;
    //@ts-ignore
    pattern?: string;
  };

  /**
   * @description set col size for form element
   * @default col-12 (will take 100% of available width)
   */
  col?:
    | "col-1"
    | "col-2"
    | "col-3"
    | "col-4"
    | "col-5"
    | "col-6"
    | "col-7"
    | "col-8"
    | "col-9"
    | "col-10"
    | "col-11"
    | "col-12";
}

export interface AioBase extends FormsAioItem {
  label: string | undefined;
  _index: number | undefined;
}

export interface AioInput extends AioBase {}
export interface AioCheckbox extends AioBase {}
export interface AioSelect extends AioBase {}
export interface AioSelectInput extends AioBase {}

type MapSchema<T extends Record<string, keyof FormsAioItem>> = {
  -readonly [K in keyof T]: FormsAioItem[T[K]];
};

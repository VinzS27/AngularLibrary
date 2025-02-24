export class MyButtonConfig {
  customCssClass!: string;
  text!: string;
  icon?: string;

  constructor(btnCss: string, modifica: string, fasFaEdit: string) {
    this.customCssClass = btnCss;
    this.text = modifica;
    this.icon = fasFaEdit;
  }
}

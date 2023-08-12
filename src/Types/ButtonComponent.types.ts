export interface ButtonComponentProps {
  bgColor: string,
  content: string,
  handelClick?: () => void,
  isSubmitButton: boolean,
  extraClass?: string,
  shouldDisabel: boolean,
  canActivateLoader: boolean

}

export interface ButtonReducer {
  canActivateLoader: boolean,
  shouldButtonDisable: boolean
}  
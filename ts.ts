/**
 * #react #props.children
 * 
 */
type WithChildren<T = {}> =
  T & { children?: React.ReactNode };

type IProps = WithChildren<{
  title: string
}>

function App({ title, children }: IProps) {
}
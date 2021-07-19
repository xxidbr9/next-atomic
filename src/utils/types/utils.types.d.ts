export interface StandardProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** Primary content */
  children?: React.ReactNode;

  /** Additional style */
  style?: React.CSSProperties;
}

export type asElement = React.ElementType

export interface WithAsProps<As extends asElement | string = React.ElementType>
  extends StandardProps {
  /** You can use a custom element for this component, for replace wrapper tag */
  as?: As;
}
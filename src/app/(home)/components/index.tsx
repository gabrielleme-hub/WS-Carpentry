import { ComponentProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionsIndexProps extends ComponentProps<'section'> {}
export function SectionsIndex(props: SectionsIndexProps) {
  return <section {...props} />;
}

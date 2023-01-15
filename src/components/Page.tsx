import { forwardRef, PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = PropsWithChildren<{
  title?: string;
  meta?: string;
}>;

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | PokemonList`}</title>
      {meta}
    </Head>

    <div ref={ref} {...other}>
      {children}
    </div>
  </>
));

Page.displayName = 'Page';

export default Page;

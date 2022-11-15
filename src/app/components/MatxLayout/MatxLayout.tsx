import { MatxSuspense } from '@/app/components';
import useSettings from '@/app/hooks/useSettings';
import { MatxLayouts } from './index';

const MatxLayout = (props: any) => {
  const { settings }: any = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;

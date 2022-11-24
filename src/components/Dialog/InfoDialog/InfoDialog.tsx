import { useReactiveVar } from '@apollo/client';
import { ConfirmationDialog } from 'components/Dialog';
import { infoDialogConfigVar } from 'apollo/infoDialogStat';

const InfoDialog = () => {
  const config = useReactiveVar(infoDialogConfigVar);

  return <ConfirmationDialog {...config} />;
};

export default InfoDialog;

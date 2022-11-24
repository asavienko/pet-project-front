import { Fragment, useRef, useState } from 'react';
import { BaseDialog } from '..';
import Button from 'components/Buttons/Button';
import { T } from 'i18n/translate';

const SubscribeDialog = () => {
  const formRef = useRef<any>(null);
  const [canSubmit, setCanSubmit] = useState(false);

  const onClose = (event?: any, reason?: any) => {};

  return (
    <BaseDialog
      open={false}
      onClose={onClose}
      keepMounted={false}
      title={<T id="subscribeDialog.title" defaultMessage="Upgrade Plan" />}
      actions={
        <Fragment>
          <Button onClick={onClose} color="secondary">
            <T id="common.cancel" defaultMessage="Cancel" />
          </Button>
          <Button
            type="submit"
            loading={false}
            disabled={!canSubmit}
            onClick={formRef.current?.submit || undefined}
          >
            <T id="subscribeDialog.upgradePlan" defaultMessage="Upgrade plan" />
          </Button>
        </Fragment>
      }
    />
  );
};

export default SubscribeDialog;

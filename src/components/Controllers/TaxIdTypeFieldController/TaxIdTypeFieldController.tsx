import SearchSelectFieldController from '../SearchSelectFieldController';
import { TAX_IDS } from './constants';

type TProps = {
  control: any;
  name: string;
  label?: any;
  fullWidth?: boolean;
};

const TaxIdTypeFieldController = ({ control, name, label }: TProps) => {
  const options = TAX_IDS.map((taxId) => taxId.id);
  const taxIdMap: any = TAX_IDS.reduce(
    (acc, taxId) => ({ ...acc, [taxId.id]: taxId }),
    {}
  );

  return (
    <SearchSelectFieldController
      options={options}
      getOptionLabel={(taxId: string) => {
        const data = taxIdMap[taxId];

        if (!data) return '';

        const taxName = data.taxName.toUpperCase().replace('_', '-');
        return `${taxIdMap[taxId].country} ${taxName}`;
      }}
      name={name}
      label={label}
      control={control}
      autoHighlight
      onChange={() => {}}
    />
  );
};

export default TaxIdTypeFieldController;

import { Typography } from '@mui/material';
import styles from '../Error/Error.module.scss';
import { Container } from 'components/Layouts/PublicLayout';

const CookiesWarning = () => (
  <div className={styles.root}>
    <Container>
      <h1 className={styles.text404}>Error</h1>
      <Typography variant="h3" component="h2" mt={-6} mb={3}>
        Storage disabled
      </Typography>
      <Typography variant="body3">
        Please make sure cookies are enabled while using this site
      </Typography>
      <Typography variant="body3" component="p">
        If enabling cookies doesn't help try to enable localStorage and
        sessionStorage
      </Typography>
    </Container>
  </div>
);

export default CookiesWarning;

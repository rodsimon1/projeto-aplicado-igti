import useStyles from './styles';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <a className={classes.item} href="https://www.facebook.com/rodrigo.simon1">
        face
      </a>
      <a className={classes.item} href="https://www.instagram.com/rodrigo.simon1/">
        insta
      </a>
      <a className={classes.item} href="https://github.com/rodsimon1">
        Git
      </a>
    </div>
  );
};

export default Footer;

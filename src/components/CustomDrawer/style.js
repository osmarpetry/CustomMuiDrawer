import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  menuButton: {
      marginRight: 36,
  },
  hide: {
      display: 'none',
  },
  drawer: {
      top: '65px',
      flexShrink: 0,
      whiteSpace: 'nowrap',
  },
  drawerOpen: {
      top: '65px',
      width: '320px',
      [theme.breakpoints.up('sm')]: {
          width: ({width}) => width,
      },
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
  },
  drawerClose: {
      top: '65px',
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
      },
  },
  toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
  },
  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
  },
}));

export { useStyles }
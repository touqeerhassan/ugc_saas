import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import { AcademicCap as AcademicCapIcon } from '../../../icons/academic-cap';
import { Briefcase as BriefcaseIcon } from '../../../icons/briefcase';
import { Home as HomeIcon } from '../../../icons/home';
import { Mail as MailIcon } from '../../../icons/mail';

export const SocialAbout = (props) => {
  const {
    currentCity,
    currentName,
    currentJobTitle,
    DOB,
    gender,
    contact,
    previousJobTitle,
    profileProgress,
    quote,
    ...other
  } = props;

  return (
    <div {...other}>
      <Card>
        <CardHeader title="Profile Progress" />
        <Divider />
        <CardContent>
          <LinearProgress
            value={profileProgress}
            variant="determinate"
          />
          <Box sx={{ mt: 2 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              50% Set Up Complete
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardHeader title="About" />
          <Divider />
          <CardContent>
            <List>
               <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <BriefcaseIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography variant="subtitle2">
                      {currentName}
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <BriefcaseIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={(
                    <Typography variant="subtitle2">
                      {currentJobTitle}
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Past:
                      {previousJobTitle}
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <AcademicCapIcon fontSize="small" />
                </ListItemAvatar>
                 <ListItemText
                  primary={(
                    <Typography variant="subtitle2">
                                       {gender}

                    </Typography>
                  )}
                />
                
              </ListItem>
              <ListItem
                disableGutters
                divider
              >
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <HomeIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography>
                    <Typography variant="subtitle2">
                      Lives in
                      {' '}
                      <Link
                        color="textPrimary"
                        href="#"
                        variant="subtitle2"
                      >
                        {currentCity?.city} 
                         {/* {currentCity?.country}
                          {currentCity?.line1}
                           {currentCity?.line2}
                            {currentCity?.zip}
                             {currentCity?.state} */}
                      </Link>
                    </Typography>
                  </ListItemText>
                
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <MailIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Typography variant="subtitle2">
                      {DOB}
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: 'action.active' }}>
                  <MailIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={(
                    <Typography variant="subtitle2">
                      {contact}
                    </Typography>
                  )}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SocialAbout.propTypes = {
  currentCity: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  currentJobTitle: PropTypes.string.isRequired,
  DOB: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  previousJobTitle: PropTypes.string.isRequired,
  profileProgress: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired
};

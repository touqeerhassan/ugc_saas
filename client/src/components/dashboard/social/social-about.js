import PropTypes from "prop-types";
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
} from "@mui/material";
import { AcademicCap as AcademicCapIcon } from "../../../icons/academic-cap";
import { Briefcase as BriefcaseIcon } from "../../../icons/briefcase";
import { Home as HomeIcon } from "../../../icons/home";
import { Mail as MailIcon } from "../../../icons/mail";
import PersonIcon from "@mui/icons-material/Person";
import WcIcon from "@mui/icons-material/Wc";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export const SocialAbout = props => {
  console.log(props.currentSocialProfile);
  const {
    currentCity,
    currentSocialProfile,
    currentName,
    currentLastName,
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
          <LinearProgress value={profileProgress} variant="determinate" />
          <Box sx={{ mt: 2 }}>
            <Typography color="textSecondary" variant="subtitle2">
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
              <ListItem disableGutters divider>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <PersonIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle2">
                      {currentName} {currentLastName}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <BriefcaseIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="subtitle2">
                      {currentJobTitle}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <WcIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">{gender}</Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <HomeIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText disableTypography>
                  <Typography variant="subtitle2">
                    Lives in{" "}
                    <Link color="textPrimary" href="#" variant="subtitle2">
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
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <DateRangeIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="subtitle2">{DOB}</Typography>}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <ContactPageIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">{contact}</Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <ContactPageIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                     {currentSocialProfile?.amazon}
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <InstagramIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="subtitle2">{currentSocialProfile?.instagram}</Typography>}
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <TwitterIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                     
                      {currentSocialProfile?.twitter}
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <ContactPageIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                      {currentSocialProfile?.website}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar sx={{ color: "action.active" }}>
                  <YouTubeIcon fontSize="small" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                    {currentSocialProfile?.youtube}
                    </Typography>
                  }
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
  currentLastName: PropTypes.string.isRequired,
  currentJobTitle: PropTypes.string.isRequired,
  DOB: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  previousJobTitle: PropTypes.string.isRequired,
  profileProgress: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired,
  currentSocialProfile: PropTypes.string.isRequired
};

{
  /* secondary={(
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      Past:
                      {previousJobTitle}
                    </Typography>
                  )} */
}

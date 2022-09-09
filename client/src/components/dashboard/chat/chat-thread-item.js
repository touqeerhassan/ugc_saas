import PropTypes from "prop-types";
import { formatDistanceStrict } from "date-fns";
import locale from "date-fns/locale/en-US";
import {
  Avatar,
  AvatarGroup,
  Box,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { useAuth } from "../../../hooks/use-auth";

const formatDistanceLocale = {
  lessThanXSeconds: "{{count}}s",
  xSeconds: "{{count}}s",
  halfAMinute: "30s",
  lessThanXMinutes: "{{count}}m",
  xMinutes: "{{count}}m",
  aboutXHours: "{{count}}h",
  xHours: "{{count}}h",
  xDays: "{{count}}d",
  aboutXWeeks: "{{count}}w",
  xWeeks: "{{count}}w",
  aboutXMonths: "{{count}}m",
  xMonths: "{{count}}m",
  aboutXYears: "{{count}}y",
  xYears: "{{count}}y",
  overXYears: "{{count}}y",
  almostXYears: "{{count}}y",
};

const formatDistance = (token, count, options) => {
  options = options || {};

  const result = formatDistanceLocale[token].replace("{{count}}", count);

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};

export const ChatThreadItem = (props) => {
  const { active, thread, onSelect, ...other } = props;
  // To get the user from the authContext, you can use
  const { user } = useAuth();
  // const user = {
  //   id: "5e86809283e28b96d2d38537",
  // };

  const recipients = thread?.participants?.filter(
    (participant) => participant._id != user?.userData?._id
  );
  // console.log("Recipients");
  // console.log(recipients);
  const lastMessage =
    thread?.messages && thread?.messages[thread.messages.length - 1];
  const name = recipients?
    .reduce((names, participant) => [...names, participant.name], [])
    .join(", ");
  let content = "";

  if (lastMessage) {
    const author = lastMessage?.authorId == user?.userData?._id ? "Me: " : "";
    const message =
      lastMessage?.contentType === "image" ? "Sent a photo" : lastMessage?.body;

    content = `${author}${message}`;
  }

  return (
    <ListItem
      disableGutters
      disablePadding
      divider
      onClick={onSelect}
      sx={{
        backgroundColor: active && "action.selected",
        cursor: "pointer",
        overflow: "hidden",
        px: 2,
        py: 3,
      }}
      {...other}
    >
      <ListItemAvatar
        sx={{
          display: "flex",
          justifyContent: {
            sm: "flex-start",
            xs: "center",
          },
        }}
      >
        <AvatarGroup
          max={2}
          sx={{
            "& .MuiAvatar-root":
              recipients?.length > 1
                ? {
                    height: 26,
                    width: 26,
                    "&:nth-of-type(2)": {
                      mt: "10px",
                    },
                  }
                : {
                    height: 36,
                    width: 36,
                  },
          }}
        >
          {recipients?.map((recipient) => (
            <Avatar key={recipient?._id} src={recipient?.avatar}>
              {recipient?.name?.split(" ").map((n) => n[0])}
            </Avatar>
          ))}
        </AvatarGroup>
      </ListItemAvatar>
      <Box
        sx={{
          flexGrow: 1,
          mr: 2,
          overflow: "hidden",
        }}
      >
        <Typography noWrap variant="subtitle2">
          {name}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          {thread?.unreadCount > 0 && (
            <Box
              sx={{
                backgroundColor: "primary.main",
                borderRadius: "50%",
                height: 8,
                mr: 1,
                width: 8,
              }}
            />
          )}
          <Typography
            color="textSecondary"
            noWrap
            sx={{ flexGrow: 1 }}
            variant="subtitle2"
          >
            {content}
          </Typography>
        </Box>
      </Box>
      <Typography
        color="textSecondary"
        sx={{ whiteSpace: "nowrap" }}
        variant="caption"
      >
        {formatDistanceStrict(new Date(lastMessage?.createdAt || new Date()), new Date(), {
          addSuffix: false,
          locale: {
            ...locale,
            formatDistance,
          },
        })}
      </Typography>
    </ListItem>
  );
};

ChatThreadItem.propTypes = {
  active: PropTypes.bool,
  onSelect: PropTypes.func,
  thread: PropTypes.object.isRequired,
};

ChatThreadItem.defaultProps = {
  active: false,
};

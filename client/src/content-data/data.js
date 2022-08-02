import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreTime from "@mui/icons-material/moreTime";
import AspectRatio from "@mui/joy/AspectRatio";
import Sheet from "@mui/joy/Sheet";

import InfoIcon from "@mui/icons-material/Info";

const imageContents = [
  {
    id: "33747",
    title: "Selfie with creators",
    description: "Selfies with content creators",
    price: 20,
  },
  {
    id: "47576",
    title: "Selfie with creators",
    description: "Selfies with content creators",
    price: 30,
  },
  {
    id: "47571",
    title: "Selfie with creators",
    description: "Selfies with content creators",
    price: 40,
  },
  {
    id: "73471",
    title: "Selfie with creators",
    description: "Selfies with content creators",
    price: 50,
  },
];

const videoContents = [
  {
    id: "73471",
    title: "Product Demo",
    description: "Detailed on-camera demonstration",
    price: 20,
  },
  {
    id: "73441",
    title: "Product Demo",
    description: "Detailed on-camera demonstration",
    price: 30,
  },
  {
    id: "73001",
    title: "Product Demo",
    description: "Detailed on-camera demonstration",
    price: 40,
  },
  {
    id: "33491",
    title: "Product Demo",
    description: "Detailed on-camera demonstration",
    price: 50,
  },
];

const videoDurationContents = [
  {
    id: "28348",
    banner: "",
    time: 15,
    price: 0,
    icon: <AccessTime fontSize="large" />,
  },
  {
    id: "37473",
    banner: "Save 30%",
    time: 30,
    price: 18,
    icon: <MoreTime fontSize="large" />,
  },
  {
    id: "85848",
    banner: "Save 50%",
    time: 60,
    price: 30,
    icon: <MoreTime fontSize="large" />,
  },
];

const contentFormatContents = [
  { id: "38488", title: "Any", height: "100px", width: "120px", ratio: "" },
  {
    id: "63466",
    title: "Portrait",
    height: "192px",
    width: "108px",
    ratio: "16:9",
  },
  {
    id: "37747",
    title: "Landscape",
    height: "108px",
    width: "192px",
    ratio: "9:16",
  },
  {
    id: "37774",
    title: "Square",
    height: "100px",
    width: "100px",
    ratio: "1:1",
  },
];

const creatorLevels = [
  { id: "02839", title: "Level 1", price: 0 },
  { id: "02838", title: "Level 2", price: 4.5 },
  { id: "02837", title: "Level 3", price: 9 },
  { id: "02822", title: "Pro Level", price: 15 },
];

module.exports = {
  imageContents,
  videoContents,
  videoDurationContents,
  contentFormatContents,
  creatorLevels,
};

import {
  ADD_CAMPAIGN,
  ADD_PRODUCT_INFO,
  ADD_CONTENT,
  FETCH_CAMPAIGN_DATA,
} from "../actions";

const defaultCampaign = {
  brand: "",
  product: "",
  campaignName: "",
  selectedPayment: "reimbursement",
  shipping: 0,
  tax: 0,
  content: {
    contentType: 0,
    imageContent: {},
    videoContent: {},
    videoDuration: {},
    contentFormat: {},
    contentDescription: "",
    creatorLevel: {},
    noOfCreators: 1,
  },
  gender: "male",
};

function campaign(state = defaultCampaign, action) {
  switch (action.type) {
    case FETCH_CAMPAIGN_DATA:
      console.log(action.payload);
      var {
        brand,
        product,
        campaignName,
        selectedPayment,
        shipping,
        tax,
        content,
        gender,
      } = action.payload;
      return {
        ...state,
        brand,
        product,
        campaignName,
        selectedPayment,
        shipping,
        tax,
        content,
        gender,
      };
    case ADD_CAMPAIGN:
      var { brand, product, campaignName } = action.payload;
      return {
        ...state,
        brand,
        product,
        campaignName,
      };
    case ADD_PRODUCT_INFO:
      var { selectedPayment, shipping, tax } = action.payload;
      return {
        ...state,
        selectedPayment,
        shipping,
        tax,
      };
    case ADD_CONTENT:
      var { content, gender } = action.payload;
      return {
        ...state,
        content,
        gender,
      };
    default:
      return state;
  }
}

export default campaign;

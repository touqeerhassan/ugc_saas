import {
  ADD_BASIC_DETAILS,
  ADD_PROFILE_SPECIALIZATION,
  ADD_SOCIAL,
  ADD_CATEGORIES,
  ADD_BRAND_SELFIE,
  ADD_PRODUCT_DEMO,
} from "../actions";

const defaultCreator = {
  first: "",
  last: "",
  DOB: "",
  gender: "",
  contact: "",
  address: {
    country: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  },
  profile: "",
  specialization: "",
  social: {
    instagram: "",
    facebook: "",
    twitter: "",
    youtube: "",
    amazon: "",
    website: "",
  },
  categories: {
    primary: "",
    secondary: "",
    tertiary: "",
  },
  brandSelfie: "",
  productDemo: "",
};

function creator(state = defaultCreator, action) {
  switch (action.type) {
    case ADD_BASIC_DETAILS:
      console.log(action.payload);
      let { first, last, DOB, gender, contact, address } = action.payload;
      return {
        ...state,
        first,
        last,
        DOB,
        gender,
        contact,
        address,
      };
    case ADD_PROFILE_SPECIALIZATION:
      let { profile, specialization } = action.payload;
      return {
        ...state,
        profile,
        specialization,
      };
    case ADD_SOCIAL:
      let { social } = action.payload;
      return {
        ...state,
        social,
      };
    case ADD_CATEGORIES:
      let { categories } = action.payload;
      return {
        ...state,
        categories,
      };
    case ADD_BRAND_SELFIE:
      let { brandSelfie } = action.payload;
      return {
        ...state,
        brandSelfie,
      };
    case ADD_PRODUCT_DEMO:
      let { productDemo } = action.payload;
      return {
        ...state,
        productDemo,
      };
    default:
      return state;
  }
}

export default creator;

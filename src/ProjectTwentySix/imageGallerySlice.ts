import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Img = {
  id: "";
  created_at: "";
  updated_at: "";
  width: 0;
  height: 0;
  color: "";
  blur_hash: "";
  likes: 0;
  liked_by_user: false;
  description: "";
  user: {
    id: "";
    username: "";
    name: "";
    portfolio_url: "";
    bio: "";
    location: "";
    total_likes: 0;
    total_photos: 0;
    total_collections: 0;
    instagram_username: "";
    twitter_username: "";
    profile_image: {
      small: "";
      medium: "";
      large: "";
    };
    links: {
      self: "";
      html: "";
      photos: "";
      likes: "";
      portfolio: "";
    };
  };
  current_user_collections: [
    // The *current user's* collections that this photo belongs to.
    {
      id: 0;
      title: "";
      published_at: "";
      last_collected_at: "";
      updated_at: "";
      cover_photo: null;
      user: null;
    },
    // ... more collections
  ];
  urls: {
    raw: "";
    full: "";
    regular: "";
    small: "";
    thumb: "";
  };
  links: {
    self: "";
    html: "";
    download: "";
    download_location: "";
  };
};

type InitialState = {
  imgList: Img[];
  img: Img;
};

const initialState: InitialState = {
  imgList: [],
  img: {
    id: "",
    created_at: "",
    updated_at: "",
    width: 0,
    height: 0,
    color: "",
    blur_hash: "",
    likes: 0,
    liked_by_user: false,
    description: "",
    user: {
      id: "",
      username: "",
      name: "",
      portfolio_url: "",
      bio: "",
      location: "",
      total_likes: 0,
      total_photos: 0,
      total_collections: 0,
      instagram_username: "",
      twitter_username: "",
      profile_image: {
        small: "",
        medium: "",
        large: "",
      },
      links: {
        self: "",
        html: "",
        photos: "",
        likes: "",
        portfolio: "",
      },
    },
    current_user_collections: [
      // The *current user's* collections that this photo belongs to.
      {
        id: 0,
        title: "",
        published_at: "",
        last_collected_at: "",
        updated_at: "",
        cover_photo: null,
        user: null,
      },
      // ... more collections
    ],
    urls: {
      raw: "",
      full: "",
      regular: "",
      small: "",
      thumb: "",
    },
    links: {
      self: "",
      html: "",
      download: "",
      download_location: "",
    },
  },
};

const imageGallerySlice = createSlice({
  name: "imageGallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, () => {
        console.log("request pending");
      })
      .addCase(fetchImages.fulfilled, (state, action: PayloadAction<Img[]>) => {
        state.imgList = action.payload;
      })
      .addCase(fetchImages.rejected, () => {
        console.log("error");
      });
  },
});

export const fetchImages = createAsyncThunk(
  "imageGallery/fetchImages",
  async () => {
    return await axios
      .get(
        "https://api.unsplash.com/photos/?client_id=S6DfVwyVwLDOnxYJkkqqMzhht-_hQFtymBTIxo7TbAQ",
      )
      .then((r) => r.data);
  },
);

export default imageGallerySlice.reducer;

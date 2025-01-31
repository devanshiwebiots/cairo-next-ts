import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  flip: boolean;
  darkMode: boolean;
  toggleSidebar: boolean;
  pinedMenu: string[];
  layoutName: string;
  responsiveSearch: boolean;
  margin: number;
}

const initialState: LayoutState = {
  flip: false,
  darkMode: false,
  toggleSidebar: false,
  pinedMenu: JSON.parse("[]"),
  layoutName: "",
  responsiveSearch: false,
  margin: 0,
};

const LayoutSlice = createSlice({
  name: "LayoutSlice",
  initialState,
  reducers: {
    setFlip: (state) => {
      state.flip = !state.flip;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setToggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.toggleSidebar = action.payload;
    },
    setPinedMenu: (state, action: PayloadAction<string[]>) => {
      state.pinedMenu = action.payload;
    },
    handlePined: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        if (state.pinedMenu.includes(action.payload)) {
          const filterMenu = state.pinedMenu.filter((item) => item !== action.payload);
          state.pinedMenu = filterMenu;
        } else {
          state.pinedMenu = [...state.pinedMenu, action.payload];
        }
      }
    },
    headerResponsive: () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 1200) {
          document.getElementById("page-header")?.classList.add("close_icon");
          document.getElementById("sidebar-wrapper")?.classList.add("close_icon");
        } else {
          document.getElementById("page-header")?.classList.remove("close_icon");
          document.getElementById("sidebar-wrapper")?.classList.remove("close_icon");
        }
      });
    },
    handleResponsiveToggle: () => {
      const sidebarClass = document.getElementById("sidebar-wrapper");
      const headerClass = document.getElementById("page-header");
      const sidebar = sidebarClass?.classList.contains("close_icon");
      const header = headerClass?.classList.contains("close_icon");
      if (sidebar && header) {
        sidebarClass?.classList.remove("close_icon");
        headerClass?.classList.remove("close_icon");
      } else {
        sidebarClass?.classList.add("close_icon");
        headerClass?.classList.add("close_icon");
      }
    },
    setResponsiveSearch: (state) => {
      state.responsiveSearch = !state.responsiveSearch;
    },
    scrollToLeft: (state) => {
      state.margin += 500;
    },
    scrollToRight: (state) => {
      state.margin -= 500;
    },
  },
});

export const {
  setFlip,
  setDarkMode,
  setToggleSidebar,
  setPinedMenu,
  handlePined,
  handleResponsiveToggle,
  setResponsiveSearch,
  headerResponsive,
  scrollToLeft,
  scrollToRight,
} = LayoutSlice.actions;

export default LayoutSlice.reducer;

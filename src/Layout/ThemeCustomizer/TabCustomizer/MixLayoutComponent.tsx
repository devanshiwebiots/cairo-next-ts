import ConfigDB from "@/Config/ThemeConfig";
import { Mix_Layout } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setMixBackgroundLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import BgDark from "./BgDark";
import BgLight from "./BgLight";
import { Fragment } from "react";

const MixLayoutComponent = () => {
  const dispatch = useAppDispatch();
  const mixLayout = ConfigDB.data.color.mix_background_layout;

  const addMixBackgroundLayout = (mix_background_layout: string) => {
    ConfigDB.data.color.mix_background_layout = mix_background_layout;
    dispatch(setMixBackgroundLayout(mix_background_layout));
  };

  const handleCustomizerMix_Background = (value: string) => {
    addMixBackgroundLayout(value);
    if (value === "dark-sidebar") {
      document.body.classList.add("dark-sidebar");
      document.body.classList.remove("dark-only");
    } else if (value === "dark-only") {
      document.body.classList.add("dark-only");
      document.body.classList.remove("dark-sidebar");
    }
  };
  return (
    <Fragment>
      <h6>{Mix_Layout}</h6>
      <ul className="layout-grid customizer-mix">
        <BgLight handleCustomizerMix_Background={handleCustomizerMix_Background} mixLayout={mixLayout} />
        <BgDark handleCustomizerMix_Background={handleCustomizerMix_Background} mixLayout={mixLayout} />
      </ul>
    </Fragment>
  );
};

export default MixLayoutComponent;

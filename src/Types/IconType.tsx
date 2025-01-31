export interface FlagIconType {
    getITag:(tag: string) => void
    }
  
    export interface GetItagProp {
      abbrivation: string;
    }
  
    export interface IconsCommonProps {
      title: string;
      iconType: string[];
      parentCallback: Function;
    }
    

   export interface IconMarkUpProps {
      icons: {
        feathericon?: string;
        icon?: string;
      };
      itag: {
        iTag: string;
      };
    }
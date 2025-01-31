export interface BlogDetailsProp {
    text: string;
    title:string
  }
  
  export interface ComonLearningHeaderProp{
    heading:string
    isOpen:boolean
    setIsOpen: (parameter: boolean) => void;
  }

  export interface UserCommentPropsType {
    ImageSrc: string;
    text: string;
    userReplay?: boolean;
  }
  
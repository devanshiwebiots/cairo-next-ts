import { LanguagesData } from "@/Data/Layout";
import { ChangeLngType } from "@/Types/LayoutTypes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const router = useRouter();

  const changeLng = (item: ChangeLngType) => {
    i18n.changeLanguage(item.data);
  };

  useEffect(() => {
   LanguagesData.find((data) => data.data == currentLanguage);
    router.refresh();
  }, [currentLanguage, router]);

  return (
    <li className="onhover-dropdown">
      <div className="cart-box text-uppercase f-w-700">{currentLanguage}</div>
      <div className="language-dropdown onhover-show-div language-width">
        <ul className="language-list">
          {LanguagesData.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                changeLng(item);
              }}>
              <a className="text-decoration-none" data-lng={item.data}>
                <i className={item.logo} /> {item.language}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Languages;

import  { FC } from "react";
import { useTranslation } from "react-i18next";
import { TransletionResourcesConfig } from "../i18n/i18n";

interface TranslateProps {
  contentKey: string;
  children?: string;
}

const Translate: FC<TranslateProps> = (props) => {
  const { t, i18n } = useTranslation(TransletionResourcesConfig.ns);
  console.log(props);
  console.log(i18n.exists(props.contentKey, TransletionResourcesConfig));
  if (i18n.exists(props.contentKey, TransletionResourcesConfig)) {
    return t(props.contentKey, TransletionResourcesConfig);
  } else {
    return props.children;
  }
};

export default Translate;

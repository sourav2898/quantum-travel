import { useTranslation } from "react-i18next";

const Pages = () => {
  const { t } = useTranslation(["common"]);

  return [t("about"), t("news"), t("roadmap"), t("whitepaper"), t("team")];
};

export default Pages;

import { useTranslation } from "react-i18next";

const Pages = () => {
  const { t } = useTranslation(["common"]);

  return [t("about"), t("roadmap"), t("news"), t("whitepaper"), t("team")];
};

export default Pages;

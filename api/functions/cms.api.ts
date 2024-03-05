import { CmsTypes } from "@/interface/cmsinterface";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const fetchHome = async () => {
  const res = await axiosInstance.get<CmsTypes>(endpoints.cms.home);

  return res;
};

// export const fetchAboutUs = async () => {
//   const res = await axiosInstance.get(endpoints.cms.about);
//   return res;
// };

// // Faq
// export const faqQuery = () => {
//   const res = axiosInstance.get(endpoints.cms.faq);

//   return res;
// };

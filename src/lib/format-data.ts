import { UserSelect } from "@/type/form";
import { AllUser } from "@/type/user.type";

export const getComboboxFormatFromRawData = (
  usersData: AllUser[]
): UserSelect[] => {
  return usersData.map((userData) => ({
    value: userData.nickname || "",
    label: userData.name || "",
    pikminImageUrl: userData.pikmin.imageUrl,
  }));
};

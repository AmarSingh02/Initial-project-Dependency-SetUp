const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_URL,
    endPoints: {
      admin_access: "/admin_api",
      employee_access: "/employee_api",
    },
  },
};
export const getFullApiUrl = (endPoints) => `${config.api.baseUrl}${endPoints}`;
export default config;

export const registerAction = (data) => {
  return { type: "REGISTER", data: data };
};

export const loginAction = (data) => {
  return { type: "LOGIN", data: data };
};

export const forgotPasswordAction = (data) => {
  return { type: "FORGOT_PASSWORD", data: data };
};

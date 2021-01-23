export const currentContactAction = (data) => {
  return { type: "CONTACT", data: data };
};

export const updateName = (data) => {
  return { type: "NAME", data: data };
};

export const updateId = (data) => {
  return { type: "ID", data: data };
};

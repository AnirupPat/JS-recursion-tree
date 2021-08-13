let obj = {
  name: "Anirup",
  address: {
    personal: {
      city: "BBSR",
      location: {
        place: "Pristine Greens",
        default: true,
      },
    },
    office: {
      city: "Bangalore",
      location: {
        place: "Bellandur",
        default: false,
      },
    },
  },
};

let res = {};
const magicFunction = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magicFunction(obj[key], parent + "_" + key);
    } else {
      res[parent + "_" + key] = obj[key];
    }
  }
  console.log(res);
};

magicFunction(obj, "obj");

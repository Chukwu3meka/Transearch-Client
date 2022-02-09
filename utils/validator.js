const validate = (valueType, value) => {
  switch (valueType) {
    case "email": {
      if (!value) return null;
      value = value.toLowerCase();
      const reg =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      return (reg.test(value) && value.split("@")[0].length >= 5 && value.split("@")[0].length <= 30) || null;
    }
    case "text": {
      const newValue = value;
      const reg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.\s\-']{2,39}$/gim;
      let status = reg.test(newValue);
      if (status === true) return newValue;
      return false;
    }
    case "string": {
      const newValue = value;
      const reg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w\W]{2,999}$/gim;
      let status = reg.test(newValue) && newValue.length > 3;
      if (status === true) return newValue;
      return false;
    }
    default:
      return false;
  }
};

export default validate;

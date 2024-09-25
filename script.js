const obj = {
    abd: "ab",
    asd: "ad"
}

const copy1 = {...obj};

const copy2 = JSON.stringify(JSON.parse(ob));

const copy3 = Object.assign({}, obj);

const copy4 = function (val) {
    if (typeof val !== "object" || val == null) {
        return val;
    }
    const copyval = Array.isArray(val)? []: {};
    for (const key in val) {
        if (Object.hasOwnProperty.call(key)) {
          copyval[key] = copy4(val[key]);  
        }
      }
      return copyval;
}
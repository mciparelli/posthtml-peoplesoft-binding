const path = require("path");

module.exports = () => tree => {
  tree.match([{ tag: "link" }, { tag: "script" }], node => {
    if (node.tag === "link" && node.attrs && node.attrs.href) {
      const peopleSoftIdentifier = path
        .basename(path.resolve(node.attrs.href))
        .replace(".css", "")
        .toUpperCase();
      node.attrs.href = `%StyleSheet(${peopleSoftIdentifier})`;
      return node;
    }

    if (node.tag === "script" && node.attrs && node.attrs.src) {
      const peopleSoftIdentifier = path
        .basename(path.resolve(node.attrs.src))
        .replace(".js", "_js")
        .toUpperCase();
      node.attrs.src = `%JavaScript(${peopleSoftIdentifier})`;
      return node;
    }
    return node;
  });
};

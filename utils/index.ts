export const getRawURL = (path) => {
    const path1 = path.replace("/kr/", "/");
    const path2 = path1.replace("kr", "");
    return path2;
};

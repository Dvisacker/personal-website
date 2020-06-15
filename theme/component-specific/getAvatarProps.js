import fills from "../foundational-styles/fills";

/**
 * @param {Object} args
 * @return {Object} { color, backgroundColor }
 */
const getAvatarProps = ({ isSolid, color, hashValue }) => {
    const appearances = fills[isSolid ? "solid" : "subtle"];

    if (color === "automatic") {
        const keys = Object.keys(appearances);
        const key = keys[hashValue % keys.length];
        return appearances[key];
    }

    return appearances[color];
};

export default getAvatarProps;

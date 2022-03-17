const randomstring = require("randomstring");

// creates a 32 character unique link, which is MD5 standard and enough for non crypto purposes.
export function uniqueLink() {
    let uniqueLinkStr = randomstring.generate()
}
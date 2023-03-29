const bcrypt = require("bcryptjs")
const saltRounds = 10 

function getUnlockCode(unlockCode = ''){
    return bcrypt.hashSync(unlockCode, bcrypt.genSaltSync(saltRounds))
}

function checkUnlockCode(inputUnlockCode = '', storedUnlockCode = ''){//authenticate users
    if(inputUnlockCode == '' || storedUnlockCode == '') return false

    return bcrypt.compareSync(inputUnlockCode, storedUnlockCode)
}

module.exports = {
    getUnlockCode,
    checkUnlockCode
}

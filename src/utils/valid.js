const RULES = {
    PHONE: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
}

/**
 * 验证有效的手机号码
 * @param {*} rules 
 * @param {*} value 
 * @param {*} cb 
 */
export const validPhone = (rule, value, cb) => {
    if(!value) {
        return cb(new Error('请编辑有效电话号码'))
    }
    setTimeout(() => {
        if (RULES.PHONE.test(value)) {
            cb()
        }else {
            cb(new Error('请编辑有效电话号码'))
        }
    }, 300)
}
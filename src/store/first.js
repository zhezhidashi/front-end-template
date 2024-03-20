export default {
    state: {
        ruleForm: undefined,
    },
    mutations: {
        setRuleForm(state, val) {
            state.ruleForm = val
            
        },
        clearRuleForm(state) {
            state.ruleForm = undefined
            
        },
        getRuleForm(state) {
            return state.ruleForm
        }
    }
}
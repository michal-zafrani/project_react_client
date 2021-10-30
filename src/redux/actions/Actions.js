function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
// setUserName,value
// action.setUserNmae(value)
export const actions = new Proxy(
    {},
    {
        // prop="setUserName"
        get: function (target, prop) {
            if (target[prop] === undefined)
            //args=value
                return function (args) {
                    return {
                        // 'SET_USER_NAME'
                        type: convertActionNameToType(prop),
                        payload: args
                    };
                };

            else return target[prop];
        }
    }
);

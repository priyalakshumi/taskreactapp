export const create = 'CREATE_USER';
export const error = 'ERROR'

export const createuser = data => {
    console.log("action")
    return { type: create, user: data };
};

export const iserror = () => {
    console.log("action error")
    return {type: error}
}
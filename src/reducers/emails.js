export default (emails = [], action) => {
    switch (action.type) {
            
        case 'ADD_EMAIL':
            return {...emails, ...action.payload};

        default:
        return emails;
    }
}
export default function validateEmail(email: string) : boolean {
    if(email === null || email === undefined) { console.warn('validateEmail received a null or undefined value'); return false; }
    
    const _email = String(email).trim();

    if(_email.length === 0)
        return false;
    
    if(_email.indexOf('@') === -1)
        return false;

    if(_email.indexOf('.') === -1)
        return false;

    const _regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return _regex.test(_email);
}
